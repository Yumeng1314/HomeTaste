// services/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  get,
  push,
  onChildAdded,
  query,
  limitToLast,
  serverTimestamp as rtdbServerTimestamp,
} from "firebase/database";

import { getAuth, onAuthStateChanged, signInAnonymously, User } from "firebase/auth";

import { getFirestore, doc, setDoc, serverTimestamp as fsServerTimestamp } from "firebase/firestore";

// =====================
// 1) Firebase 配置（你这份没问题）
// =====================
const firebaseConfig = {
  apiKey: "AIzaSyAldb_sD5Vg1zDt3P2CnHE1_boY4RMf9m4",
  authDomain: "hometaste-d6834.firebaseapp.com",
  databaseURL: "https://hometaste-d6834-default-rtdb.firebaseio.com",
  projectId: "hometaste-d6834",
  storageBucket: "hometaste-d6834.firebasestorage.app",
  messagingSenderId: "132298816482",
  appId: "1:132298816482:web:2915b8e21fcb62e6c497bb",
};

// =====================
// 2) 初始化（只初始化一次）
// =====================
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
let fsdb: ReturnType<typeof getFirestore> | null = null;
try {
  fsdb = getFirestore(app);
} catch (error) {
  console.warn("Firestore init skipped:", error);
}

// =====================
// 3) 确保匿名登录（拿到 uid）
// =====================
let cachedUser: User | null = null;

async function ensureAnonAuth(): Promise<User> {
  if (cachedUser) return cachedUser;

  return new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      try {
        if (u) {
          cachedUser = u;
          unsub();
          resolve(u);
          return;
        }
        const cred = await signInAnonymously(auth);
        cachedUser = cred.user;
        unsub();
        resolve(cred.user);
      } catch (e) {
        unsub();
        reject(e);
      }
    });
  });
}

// =====================
// 4) Family code 相关（多家庭隔离）
// =====================
function normalizeCode(code: string) {
  return code.trim().toUpperCase();
}

function randomCode(len = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // 去掉易混淆字符
  let out = "HT-";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

// =====================
// 5) 对外暴露的同步服务（保持你原来的 API 风格）
// =====================
export const syncService = {
  // 生成一个新的家庭 code
  generatePairCode: () => randomCode(6),

joinFamily: async (pairCode: string): Promise<{ success: boolean; error?: string; uid?: string; familyCode?: string }> => {
  try {
    const user = await ensureAnonAuth();
    const uid = user.uid;

    const familyCode = normalizeCode(pairCode);
    if (!familyCode) return { success: false, error: "家庭 Code 不能为空" };

    // ✅ 先把自己写进 members（让你立刻成为 member）
    await set(ref(db, `families/${familyCode}/members/${uid}`), true);

    // ✅ Firestore：members（给 Storage rules 用）
    if (fsdb) {
      await setDoc(
        doc(fsdb, `families/${familyCode}/members/${uid}`),
        { joinedAt: fsServerTimestamp() },
        { merge: true }
      );
    }

    localStorage.setItem("familyCode", familyCode);

    return { success: true, uid, familyCode };
  } catch (error: any) {
    console.error("Firebase Join Error:", error);
    // RTDB 常见：PERMISSION_DENIED；Firestore 常见：permission-denied
    const code = error?.code;
    if (code === "PERMISSION_DENIED" || code === "permission-denied") {
      return { success: false, error: "权限被拒绝：请检查 Realtime Database / Firestore Rules（需要允许写入 members 才能加入）。" };
    }
    return { success: false, error: error?.message || "网络连接失败或数据库不可用" };
  }
},
  
subscribeToData: async (pairCode: string, key: string, callback: (data: any) => void) => {
  await ensureAnonAuth();
  const familyCode = normalizeCode(pairCode);
  const dataRef = ref(db, `families/${familyCode}/${key}`);

  return onValue(dataRef, (snapshot) => {
    callback(snapshot.val()); // ✅ 关键：null 也回调，让 cloudReady 能变 true
  });
},
  
  // =========
  // 活动日志：写入一条操作记录
  // =========
  logActivity: async (
    pairCode: string,
    evt: {
      actorUid?: string;
      actorName?: string;
      action: string;        // "新增" | "删除" | "完成" | "取消完成" | "更新" ...
      targetType: string;    // "食材" | "食谱" | "采购" ...
      targetName: string;    // 例如 "番茄炒蛋"
      ts?: number;
    }
  ) => {
    const u = await ensureAnonAuth();
    const familyCode = normalizeCode(pairCode);

    await push(ref(db, `families/${familyCode}/activity`), {
      actorUid: evt.actorUid || u.uid,
      actorName: evt.actorName || "家人",
      action: evt.action,
      targetType: evt.targetType,
      targetName: evt.targetName,
      ts: evt.ts || Date.now(),
    });
  },

  // =========
  // 活动日志：订阅最新活动（只推送新增的，不会一直全量刷）
  // =========
  subscribeToActivity: async (
    pairCode: string,
    cb: (evt: any) => void,
    options?: { limit?: number }
  ) => {
    await ensureAnonAuth();
    const familyCode = normalizeCode(pairCode);

    const q = query(
      ref(db, `families/${familyCode}/activity`),
      limitToLast(options?.limit ?? 30)
    );

    // 避免刚订阅时把历史 limit 条全弹一遍
    let warmedUp = false;
    setTimeout(() => (warmedUp = true), 300);

    return onChildAdded(q, (snap) => {
      const v = snap.val();
      if (!v) return;
      if (!warmedUp) return; // 只忽略“刚连上时的历史”，后续新增都回调
      cb(v);
    });
  },

  // 推送：直接 set 到 families/{code}/{key}
  pushData: async (pairCode: string, key: string, data: any) => {
     await ensureAnonAuth(); // ✅ 第一行加在这里
    const familyCode = normalizeCode(pairCode);
    await set(ref(db, `families/${familyCode}/${key}`), data);
  },

  // 更新用户状态：写到 families/{code}/users/{uid}
  updateUserStatus: async (pairCode: string, userId: string, profile: any) => {
    await ensureAnonAuth();
    const familyCode = normalizeCode(pairCode);
    await update(ref(db, `families/${familyCode}/users/${userId}`), {
      ...profile,
      lastActive: Date.now(),
    }).catch(() => {});
  },

  // 初始化云端数据：如果 families/{code} 不存在就 set 一次
  initializeCloudData: async (pairCode: string, allData: any) => {
    await ensureAnonAuth(); // ✅ 第一行加在这里
    const familyCode = normalizeCode(pairCode);
    const snapshot = await get(ref(db, `families/${familyCode}`));
    if (!snapshot.exists()) {
      await set(ref(db, `families/${familyCode}`), {
        ...allData,
        meta: {
          createdAt: rtdbServerTimestamp(),
        },
      });
      return true;
    }
    return false;
  },
};
export async function getUid() {
  // 如果你文件里有 ensureAnonAuth() 就直接用它
  const u = await ensureAnonAuth();
  return u.uid;
}
