import { useEffect, useMemo, useRef, useState } from 'react';
import { applyOperation, EMPTY_HOUSEHOLD, readLegacyDevice, type Household, type Operation } from '../household';
import { sendOperation, subscribeToHousehold, watchConnection } from './firebase';
import {
  applyLocalOperations, cacheHousehold, queueOperations, readSavedHousehold, removeQueuedOperation,
  replaceLocalHousehold,
} from './householdStorage';

export function useHousehold(family?: string) {
  // The parent remounts this hook when the family changes.
  const scope = family ? `family:${family}` : 'local';
  const initial = useRef<Household>(EMPTY_HOUSEHOLD);
  const [base, setBase] = useState<Household>(EMPTY_HOUSEHOLD);
  const [pending, setPending] = useState<Operation[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [hasCache, setHasCache] = useState(false);
  const [connected, setConnected] = useState(false);
  const [ready, setReady] = useState(false);
  const [failure, setFailure] = useState('');
  const [retryCount, setRetryCount] = useState(0);
  const inFlight = useRef(false);

  useEffect(() => {
    let active = true;
    readSavedHousehold(scope).then(saved => {
      if (!active) return;
      initial.current = family ? EMPTY_HOUSEHOLD : readLegacyDevice();
      setBase(saved.base ?? initial.current);
      setHasCache(Boolean(saved.base));
      setPending(saved.pending);
      setLoaded(true);
    }).catch(() => {
      if (active) setFailure('无法读取此设备的数据，请检查浏览器的站点存储权限。');
    });
    return () => { active = false; };
  }, [scope, family, retryCount]);

  useEffect(() => {
    if (family) return watchConnection(setConnected);
  }, [family]);

  useEffect(() => {
    if (!family || !loaded || !connected) {
      setReady(false);
      return;
    }

    let active = true;
    let unsubscribe: (() => void) | undefined;
    setFailure('');
    const failed = (error: Error) => {
      if (!active) return;
      console.warn('Family subscription failed', error);
      setReady(false);
      setFailure('无法读取家庭数据，请检查连接和家庭成员权限后重试。');
    };

    subscribeToHousehold(family, household => {
      if (!active) return;
      setBase(household);
      setHasCache(true);
      setReady(true);
      cacheHousehold(scope, household).catch(error => console.warn('Family cache failed', error));
    }, failed).then(stop => {
      if (active) unsubscribe = stop;
      else stop();
    }).catch(failed);

    return () => {
      active = false;
      unsubscribe?.();
    };
  }, [family, scope, connected, loaded, retryCount]);

  useEffect(() => {
    const operation = pending[0];
    if (!family || !ready || !connected || !operation || failure || inFlight.current) return;
    inFlight.current = true;
    (async () => {
      try {
        await sendOperation(family, operation);
        await removeQueuedOperation(operation);
        setBase(previous => applyOperation(previous, operation));
        setPending(previous => previous.filter(item => item.id !== operation.id));
      } catch (error) {
        console.warn('Family save failed', error);
        setFailure('有更改未同步。更改已保存在本机，可以重试。');
      } finally {
        inFlight.current = false;
      }
    })();
  }, [family, ready, connected, pending, failure]);

  const data = useMemo(() => pending.reduce(applyOperation, base), [base, pending]);
  const writable = loaded && (!family || ready || hasCache);

  const save = async (operations: Operation[]) => {
    if (!writable || operations.length === 0) return operations.length === 0;
    try {
      if (family) {
        await queueOperations(scope, operations);
        setPending(previous => [...previous, ...operations]);
      } else {
        setBase(await applyLocalOperations(initial.current, operations));
      }
      return true;
    } catch (error) {
      console.warn('Device save failed', error);
      setFailure('设备存储写入失败，请检查可用空间，重新保存。');
      return false;
    }
  };

  const replaceLocal = async (household: Household) => {
    if (family) return false;
    try {
      await replaceLocalHousehold(household);
      setBase(household);
      initial.current = household;
      return true;
    } catch {
      setFailure('恢复失败，设备无法写入备份。');
      return false;
    }
  };

  const retry = () => {
    setFailure('');
    if (!loaded || !ready) setRetryCount(count => count + 1);
  };

  const status = failure || (!family
    ? loaded ? '仅保存在这台设备' : '正在读取本机数据…'
    : pending.length
      ? `${pending.length} 项待同步${connected ? '' : ' · 离线'}`
      : ready && connected ? '已同步'
        : connected ? '正在连接家庭…' : '离线 · 显示本机缓存');

  return { data, save, replaceLocal, writable, status, failure, retry, pendingCount: pending.length, online: ready && connected, synced: ready && connected && !failure && !pending.length };
}
