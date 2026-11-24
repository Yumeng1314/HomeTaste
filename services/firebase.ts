import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth, signInAnonymously, type User } from 'firebase/auth';
import {
  connectDatabaseEmulator, getDatabase, get, set, ref, onValue, onChildAdded, limitToLast,
  query, orderByChild, startAt, runTransaction, serverTimestamp,
} from 'firebase/database';
import {
  EMPTY_HOUSEHOLD, applyOperation, applyRowOperation, fromLegacy, newId, operationRow,
  type Household, type Operation,
} from '../household';
import type { FamilyMember, UserProfile } from '../types';

const useEmulators = import.meta.env.DEV && import.meta.env.VITE_FIREBASE_EMULATORS === 'true';
const production = {
  apiKey: 'AIzaSyAldb_sD5Vg1zDt3P2CnHE1_boY4RMf9m4',
  authDomain: 'hometaste-d6834.firebaseapp.com',
  databaseURL: 'https://hometaste-d6834-default-rtdb.firebaseio.com',
  projectId: 'hometaste-d6834',
  storageBucket: 'hometaste-d6834.firebasestorage.app',
  messagingSenderId: '132298816482',
  appId: '1:132298816482:web:2915b8e21fcb62e6c497bb',
};
const app = initializeApp(useEmulators ? {
  ...production, apiKey: 'demo-api-key', projectId: 'demo-hometaste', databaseURL: 'https://demo-hometaste-default-rtdb.firebaseio.com',
} : production);

const auth = getAuth(app);
const db = getDatabase(app);
if (useEmulators) {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
  connectDatabaseEmulator(db, '127.0.0.1', 9000);
}

let authRequest: Promise<User> | undefined;
function currentUser(): Promise<User> {
  authRequest ??= auth.authStateReady()
    .then(async () => auth.currentUser ?? (await signInAnonymously(auth)).user)
    .catch(error => {
      authRequest = undefined;
      throw error;
    });
  return authRequest;
}

const familyPath = (family: string) => `families/${family}`;
const sharedPath = (family: string) => `${familyPath(family)}/shared`;
export const validFamilyId = (family: string) => /^(HT-[A-Z0-9]{6}|F-[a-f0-9-]{36})$/.test(family);

export function watchConnection(callback: (connected: boolean) => void) {
  return onValue(ref(db, '.info/connected'), snapshot => callback(snapshot.val() === true));
}

export async function createFamily(initial: Household) {
  const { uid } = await currentUser();
  const family = `F-${newId()}`;
  await set(ref(db, familyPath(family)), {
    owner: uid,
    members: { [uid]: true },
    shared: initial,
  });
  return family;
}

export async function createInvite(family: string) {
  const { uid } = await currentUser();
  const code = `HT-${newId().replace(/-/g, '').toUpperCase()}`;
  const expiresAt = Date.now() + 6 * 24 * 60 * 60 * 1000;
  await set(ref(db, `invites/${code}`), { family, createdBy: uid, expiresAt });
  return code;
}

export async function joinFamily(input: string) {
  const code = input.trim().toUpperCase();
  if (!/^HT-[A-F0-9]{32}$/.test(code)) {
    throw new Error('请输入家庭成员从新版「家庭同步」页面发给你的完整邀请码。');
  }

  const { uid } = await currentUser();
  const snapshot = await get(ref(db, `invites/${code}`));
  const family = snapshot.val()?.family;
  if (typeof family !== 'string' || !validFamilyId(family)) {
    throw new Error('邀请码无效或已过期。');
  }

  const member = ref(db, `${familyPath(family)}/members/${uid}`);
  if (!(await get(member)).exists()) await set(member, code);
  return family;
}

export async function subscribeToHousehold(
  family: string,
  receive: (value: Household) => void,
  fail: (error: Error) => void,
) {
  await currentUser();
  const shared = ref(db, sharedPath(family));
  // Existing family members can migrate their cloud data once. An initialized
  // household always has a version, even when every collection is empty.
  if (!(await get(shared)).exists()) {
    const legacy = await get(ref(db, familyPath(family)));
    const migrated = fromLegacy(legacy.val() ?? {});
    await runTransaction(shared, current => current ?? migrated, { applyLocally: false });
  }
  return onValue(shared, snapshot => receive(snapshot.val() ?? EMPTY_HOUSEHOLD), fail);
}

export async function sendOperation(family: string, operation: Operation) {
  const { uid } = await currentUser();
  const target = operationRow(operation);
  if (target) {
    await runTransaction(
      ref(db, `${sharedPath(family)}/${target.collection}/${target.key}`),
      row => applyRowOperation(row, operation),
      { applyLocally: false },
    );
  } else {
    await runTransaction(
      ref(db, sharedPath(family)),
      value => value ? applyOperation(value, operation) : value,
      { applyLocally: false },
    );
  }

  if (operation.activity) {
    set(ref(db, `${familyPath(family)}/activity/${operation.id}`), {
      ...operation.activity, actorUid: uid, ts: serverTimestamp(),
    }).catch(error => console.warn('Activity update failed', error));
  }
}

export async function publishProfile(family: string, profile: UserProfile) {
  const { uid } = await currentUser();
  await set(ref(db, `${familyPath(family)}/users/${uid}`), {
    name: profile.name, avatar: profile.avatar,
  });
}

export async function subscribeToMembers(family: string, callback: (members: FamilyMember[]) => void) {
  const { uid } = await currentUser();
  return onValue(ref(db, `${familyPath(family)}/users`), snapshot => {
    const users = (snapshot.val() ?? {}) as Record<string, Omit<FamilyMember, 'id'>>;
    callback(Object.entries(users).filter(([key]) => key !== uid).map(([id, user]) => ({
      id, name: user.name || '家人', avatar: user.avatar || '',
    })));
  });
}

export async function subscribeToActivity(family: string, callback: (message: string) => void) {
  const { uid } = await currentUser();
  const offset = (await get(ref(db, '.info/serverTimeOffset'))).val() ?? 0;
  const activity = query(ref(db, `${familyPath(family)}/activity`), orderByChild('ts'), startAt(Date.now() + offset), limitToLast(30));
  return onChildAdded(activity, snapshot => {
    const event = snapshot.val();
    if (event?.actorUid && event.actorUid !== uid) {
      callback(`${event.actorName || '家人'}${event.action}了${event.targetType}：${event.targetName}`);
    }
  });
}
