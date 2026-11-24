import { useEffect, useRef, useState } from 'react';
import type { FamilyMember, UserProfile } from '../types';
import { createFamily, createInvite, joinFamily, subscribeToMembers } from '../services/firebase';
import { COLLECTIONS, exportBackup, importBackup, localDate, missingRecords, readLegacyDevice, records, snapshotOf } from '../household';
import { readSavedHousehold } from '../services/householdStorage';
import { compressImage } from '../services/images';
import type { useHousehold } from '../services/useHousehold';

interface SettingsViewProps {
  userProfile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => boolean;
  sync: ReturnType<typeof useHousehold>;
}

const control = 'min-h-11 rounded-xl px-3 py-2 text-sm font-bold disabled:opacity-50';
const field = 'min-h-11 w-full min-w-0 rounded-xl border border-gray-200 bg-white px-3 py-2 text-base text-gray-900';

export default function SettingsView({ userProfile, onUpdateProfile, sync }: SettingsViewProps) {
  const family = userProfile.pairCode;
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [targetCode, setTargetCode] = useState('');
  const [invitation, setInvitation] = useState('');
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  const [displayName, setDisplayName] = useState(userProfile.name);
  const [role, setRole] = useState(userProfile.role);
  const fileInput = useRef<HTMLInputElement>(null);
  const restoreMode = useRef<'merge' | 'replace'>('merge');

  useEffect(() => {
    if (!family) return;
    let active = true;
    let unsubscribe: (() => void) | undefined;
    subscribeToMembers(family, list => {
      if (active) setMembers(list);
    }).then(stop => {
      if (active) unsubscribe = stop;
      else stop();
    }).catch(error => console.warn('Family members unavailable', error));
    return () => {
      active = false;
      unsubscribe?.();
    };
  }, [family]);

  async function familyAction(action: 'create' | 'join' | 'invite') {
    setBusy(true);
    setNotice('');
    try {
      if (action === 'invite') {
        setInvitation(await createInvite(family));
      } else {
        const id = action === 'create' ? await createFamily(snapshotOf(sync.data)) : await joinFamily(targetCode);
        if (!onUpdateProfile({ pairCode: id })) {
          setNotice('家庭已连接，但浏览器未能保存设备设置。请检查站点存储权限后重试。');
        }
      }
    } catch (error) {
      const detail = error instanceof Error ? error.message : '';
      const message = /PERMISSION_DENIED|permission_denied|permission-denied/i.test(detail)
        ? action === 'join' ? '邀请码无效、已过期或访问被拒绝。请让家人生成新邀请码。' : '访问被拒绝。请检查线上 Firebase 规则是否已更新。'
        : detail || '暂时无法连接，请稍后重试。';
      setNotice(message);
    } finally {
      setBusy(false);
    }
  }

  function downloadBackup(data = sync.data) {
    const blob = new Blob([JSON.stringify(exportBackup(data), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hometaste_backup_${localDate()}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 30_000);
    setNotice('已生成当前设备所显示数据的备份。');
  }

  async function restoreBackup(file: File) {
    setNotice('');
    setBusy(true);
    try {
      const incoming = importBackup(JSON.parse(await file.text()));
      if (!family && restoreMode.current === 'replace') {
        if (window.confirm('将本机数据替换为这份备份？当前记录会被替换，建议先导出一份备份。')) {
          setNotice(await sync.replaceLocal(incoming) ? '本机数据已从备份恢复。' : '恢复失败，请重试。');
        }
        return;
      }
      const additions = missingRecords(sync.data, incoming);
      if (!additions.length) {
        setNotice('没有需要补入的新记录。');
        return;
      }
      if (window.confirm(`将 ${additions.length} 条缺失记录加入${family ? '当前家庭' : '本机'}？已有记录会保留。`)) {
        const okay = await sync.save(additions);
        setNotice(okay ? '缺失记录已补入。' : '恢复未完成，请检查同步状态后重试。');
      }
    } catch (error) {
      setNotice(error instanceof Error ? error.message : '无法读取备份。');
    } finally {
      setBusy(false);
    }
  }

  async function restoreLegacy() {
    setBusy(true);
    setNotice('');
    try {
      const additions = missingRecords(sync.data, readLegacyDevice());
      if (!additions.length) {
        setNotice('本机旧版资料没有可补入的记录。');
        return;
      }
      if (window.confirm(`把本机旧版的 ${additions.length} 条缺失记录补入这个家庭？请先确认这是原来的家庭。`)) {
        setNotice(await sync.save(additions) ? '旧版记录已补入。' : '补入未完成，请重试。');
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-5 p-5 pb-32 lg:p-10">
      <h2 className="text-2xl font-black text-gray-900">家庭设置</h2>
      <section className="space-y-3 rounded-2xl border border-gray-100 bg-white p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-bold">家庭同步</h3>
          <p role="status" className={`text-sm font-bold ${sync.synced ? 'text-emerald-800' : 'text-amber-900'}`}>{sync.status}</p>
        </div>
        {sync.failure && <button className={`${control} bg-amber-50 text-amber-900`} onClick={sync.retry}>重试同步</button>}
        {family ? (
          <>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm"><img src={userProfile.avatar} className="h-8 w-8 rounded-full object-cover" alt="" />{userProfile.name}（本机）</li>
              {members.map(member => <li key={member.id} className="flex items-center gap-2 text-sm">
                {member.avatar && <img src={member.avatar} className="h-8 w-8 rounded-full object-cover" alt="" />}{member.name}
              </li>)}
            </ul>
            <button disabled={busy || !sync.synced} className={`${control} bg-emerald-800 text-white`} onClick={() => familyAction('invite')}>生成邀请码</button>
            {invitation && (
              <div className="space-y-2 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-900">
                <label className="block font-bold">邀请码 · 6 天内有效
                  <input className={`${field} mt-1 font-mono`} readOnly value={invitation} onFocus={event => event.target.select()} />
                </label>
                <button className={`${control} bg-white`} onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(invitation);
                    setNotice('已复制邀请码，可以发给家人。');
                  } catch {
                    setNotice('可以长按邀请码手动复制。');
                  }
                }}>复制邀请码</button>
              </div>
            )}
          </>
        ) : (
          <>
            <button disabled={busy || !sync.writable} className={`${control} bg-emerald-800 text-white`} onClick={() => familyAction('create')}>创建家庭并共享本机数据</button>
            <form className="flex gap-2" onSubmit={event => { event.preventDefault(); void familyAction('join'); }}>
              <input className={`${field} flex-1`} aria-label="家庭邀请码" placeholder="粘贴家人发来的邀请码"
                value={targetCode} onChange={event => setTargetCode(event.target.value)} autoCapitalize="characters" spellCheck={false} />
              <button className={`${control} shrink-0 bg-emerald-50 text-emerald-900`} disabled={busy || !targetCode.trim()}>加入家庭</button>
            </form>
            <p className="text-xs text-gray-600">加入会显示该家庭的数据。本机原有记录会保留在设备上，加入前也可以导出一份备份。</p>
          </>
        )}
      </section>

      <form className="space-y-3 rounded-2xl border border-gray-100 bg-white p-4"
        onSubmit={event => {
          event.preventDefault();
          setNotice(onUpdateProfile({ name: displayName.trim() || userProfile.name, role: role.trim() })
            ? '家庭资料已更新。' : '浏览器无法保存设置。');
        }}>
        <h3 className="text-lg font-bold">我的资料</h3>
        <div className="grid grid-cols-2 gap-3">
          <label className="min-w-0 space-y-1 text-sm font-bold">称呼
            <input className={field} value={displayName} onChange={event => setDisplayName(event.target.value)} maxLength={80} />
          </label>
          <label className="min-w-0 space-y-1 text-sm font-bold">身份
            <input className={field} value={role} onChange={event => setRole(event.target.value)} maxLength={80} />
          </label>
        </div>
        <label className="block text-sm font-bold">更换头像
          <input type="file" accept="image/*" className="block max-w-full py-2 text-sm font-normal" onChange={async event => {
            const file = event.target.files?.[0];
            if (!file) return;
            try {
              const avatar = await compressImage(file, 280);
              setNotice(onUpdateProfile({ avatar }) ? '头像已更新。' : '头像未能保存。');
            } catch {
              setNotice('图片无法处理，请尝试 JPG 或 PNG。');
            }
          }} />
        </label>
        <button className={`${control} bg-gray-100`}>保存资料</button>
      </form>

      <section className="space-y-3 rounded-2xl border border-gray-100 bg-white p-4">
        <h3 className="text-lg font-bold">数据备份</h3>
        <div className="flex flex-wrap gap-2">
          <button disabled={!sync.writable} onClick={() => downloadBackup()} className={`${control} bg-gray-100`}>导出 JSON 备份</button>
          <button disabled={busy || !sync.writable} onClick={() => { restoreMode.current = 'merge'; fileInput.current?.click(); }} className={`${control} bg-gray-100`}>从备份补入缺失记录</button>
          <input hidden type="file" accept=".json,application/json" ref={fileInput} onChange={event => {
            const file = event.target.files?.[0];
            event.target.value = '';
            if (file) void restoreBackup(file);
          }} />
          {!family && <button disabled={busy || !sync.writable} className={`${control} bg-gray-100`} onClick={() => {
            restoreMode.current = 'replace';
            fileInput.current?.click();
          }}>用备份替换本机数据</button>}
          {family && <button disabled={busy} className={`${control} bg-gray-100`} onClick={async () => {
            try {
              const { base } = await readSavedHousehold('local');
              const device = base ?? readLegacyDevice();
              if (COLLECTIONS.some(collection => records(device, collection).length)) downloadBackup(device);
              else setNotice('这台设备没有单独保存的本机记录。');
            } catch {
              setNotice('无法读取这台设备的本机记录。');
            }
          }}>导出加入前的本机数据</button>}
          {family?.startsWith('HT-') && <button disabled={busy || !sync.writable} className={`${control} bg-gray-100`} onClick={restoreLegacy}>补入本机旧版记录</button>}
        </div>
      </section>
      {notice && <p role="status" className="rounded-xl bg-amber-50 p-3 text-sm text-amber-950">{notice}</p>}
    </div>
  );
}
