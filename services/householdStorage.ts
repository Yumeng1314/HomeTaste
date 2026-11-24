import { applyOperation, type Household, type Operation } from '../household';

interface QueuedOperation {
  scope: string;
  id: string;
  order?: number;
  operation: Operation;
}

let opening: Promise<IDBDatabase> | undefined;

function openStorage() {
  opening ??= new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('HomeTaste', 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore('households');
      const outbox = request.result.createObjectStore('outbox', { keyPath: 'order', autoIncrement: true });
      outbox.createIndex('scope', 'scope');
      outbox.createIndex('id', 'id', { unique: true });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  }).catch(error => {
    opening = undefined;
    throw error;
  });
  return opening;
}

function result<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function finished(transaction: IDBTransaction) {
  return new Promise<void>((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onabort = () => reject(transaction.error ?? new Error('设备存储写入已取消'));
  });
}

export async function readSavedHousehold(scope: string) {
  const db = await openStorage();
  const transaction = db.transaction(['households', 'outbox'], 'readonly');
  const [base, queued] = await Promise.all([
    result<Household | undefined>(transaction.objectStore('households').get(scope)),
    result<QueuedOperation[]>(transaction.objectStore('outbox').index('scope').getAll(scope)),
  ]);
  return { base, pending: queued.map(entry => entry.operation) };
}

export async function cacheHousehold(scope: string, household: Household) {
  const db = await openStorage();
  const transaction = db.transaction('households', 'readwrite');
  transaction.objectStore('households').put(household, scope);
  await finished(transaction);
}

export async function queueOperations(scope: string, operations: Operation[]) {
  const db = await openStorage();
  const transaction = db.transaction('outbox', 'readwrite');
  for (const operation of operations) {
    transaction.objectStore('outbox').add({ scope, id: operation.id, operation } satisfies QueuedOperation);
  }
  await finished(transaction);
}

export async function removeQueuedOperation(operation: Operation) {
  const db = await openStorage();
  const transaction = db.transaction('outbox', 'readwrite');
  const store = transaction.objectStore('outbox');
  const key = store.index('id').getKey(operation.id);
  key.onsuccess = () => {
    if (key.result !== undefined) store.delete(key.result);
  };
  await finished(transaction);
}

export async function applyLocalOperations(initial: Household, operations: Operation[]) {
  const db = await openStorage();
  const transaction = db.transaction('households', 'readwrite');
  const store = transaction.objectStore('households');
  const request = store.get('local');
  let value = initial;
  request.onsuccess = () => {
    value = operations.reduce(applyOperation, request.result ?? initial);
    store.put(value, 'local');
  };
  await finished(transaction);
  return value;
}

export async function replaceLocalHousehold(household: Household) {
  await cacheHousehold('local', household);
}
