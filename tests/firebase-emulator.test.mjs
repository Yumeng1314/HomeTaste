import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fromLegacy, records } from '../household.ts';

const database = 'http://127.0.0.1:9000';
const namespace = 'demo-hometaste-default-rtdb';

async function user() {
  const response = await fetch('http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1/accounts:signUp?key=demo-api-key', {
    method: 'POST', body: JSON.stringify({ returnSecureToken: true }),
    headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(5000),
  });
  assert.equal(response.status, 200);
  const { localId: uid, idToken: token } = await response.json();
  return { uid, token };
}

async function request(path, { as, value } = {}) {
  const url = new URL(`/${path}.json`, database);
  url.searchParams.set('ns', namespace);
  const headers = {};
  if (as === 'owner') headers.Authorization = 'Bearer owner';
  else if (as) url.searchParams.set('auth', as.token);
  return fetch(url, {
    headers,
    ...(value === undefined ? {} : { method: 'PUT', body: JSON.stringify(value) }),
    signal: AbortSignal.timeout(5000),
  });
}

test('family data requires a member and joining requires a current server-validated invite', async () => {
  const [founder, guest, stranger] = await Promise.all([user(), user(), user()]);
  const family = `F-${crypto.randomUUID()}`;
  const path = `families/${family}`;
  const code = `HT-${crypto.randomUUID().replaceAll('-', '').toUpperCase()}`;
  const invite = { family, createdBy: founder.uid, expiresAt: Date.now() + 60_000 };

  assert.equal((await request(path, { as: founder, value: { owner: founder.uid, members: { [founder.uid]: true }, shared: { version: 1 } } })).status, 200);
  assert.equal((await request(path, { as: founder })).status, 200);
  assert.equal((await request(path, { as: guest })).status, 401);
  assert.equal((await request(path)).status, 401);
  assert.equal((await request(`${path}/members/${guest.uid}`, { as: guest, value: true })).status, 401);
  assert.equal((await request(`${path}/members/${guest.uid}`, { as: guest, value: code })).status, 401);
  assert.equal((await request(`invites/${code}`, { as: stranger, value: { ...invite, createdBy: stranger.uid } })).status, 401);
  assert.equal((await request(`invites/${code}`, { as: founder, value: invite })).status, 200);
  assert.equal((await request('invites', { as: guest })).status, 401);
  assert.equal((await request(`${path}/members/${stranger.uid}`, { as: guest, value: code })).status, 401);
  assert.equal((await request(`${path}/members/${guest.uid}`, { as: guest, value: code })).status, 200);
  assert.equal((await request(`${path}/shared`, { as: guest })).status, 200);
  assert.equal((await request(`${path}/shared/inventory/sample`, { as: stranger, value: { value: { name: '排骨' } } })).status, 401);
  assert.equal((await request(`${path}/shared`, { as: guest, value: { version: 0 } })).status, 401);
  assert.equal((await request(`${path}/ht_inventory`, { as: guest, value: [] })).status, 401);

  const expiredCode = `HT-${crypto.randomUUID().replaceAll('-', '').toUpperCase()}`;
  assert.equal((await request(`invites/${expiredCode}`, { as: 'owner', value: { ...invite, expiresAt: Date.now() - 1000 } })).status, 200);
  assert.equal((await request(`invites/${expiredCode}`, { as: stranger })).status, 401);
  assert.equal((await request(`${path}/members/${stranger.uid}`, { as: stranger, value: expiredCode })).status, 401);
});

test('existing legacy members can migrate without touching the old cloud records', async () => {
  const member = await user();
  const family = `HT-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
  const path = `families/${family}`;
  const original = { id: '100', name: '番茄', unit: '个', amount: 2, category: '蔬菜', storageZone: '常温', updatedAt: 1 };
  const legacy = { members: { [member.uid]: true }, ht_inventory: [original] };
  assert.equal((await request(path, { as: 'owner', value: legacy })).status, 200);

  const before = await request(path, { as: member });
  assert.equal(before.status, 200);
  const migrated = fromLegacy(await before.json());
  assert.equal((await request(`${path}/shared`, { as: member, value: migrated })).status, 200);
  const readBack = await request(`${path}/shared`, { as: member });
  assert.deepEqual(records(await readBack.json(), 'inventory'), [original]);
  const untouched = await request(`${path}/ht_inventory`, { as: member });
  assert.deepEqual(await untouched.json(), [original]);
});
