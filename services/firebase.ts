// services/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  get,
  child,
  serverTimestamp as rtdbServerTimestamp,
} from "firebase/database";

import { getAuth, onAuthStateChanged, signInAnonymously, User } from "firebase/auth";

import { getFirestore, doc, setDoc, serverTimestamp as fsServerTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const fsdb = getFirestore(app);
export const storage = getStorage(app);

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

  // 加入家庭：会自动匿名登录，然后把 uid 写入 members（RTDB + Firestore）
  joinFamily: async (pairCode: string): Promise<{ success: boolean; error?: string; uid?: string; familyCode?: string }> => {
    try {
      const user = await ensureAnonAuth();
      const uid = user.uid;

      const familyCode = normalizeCode(pairCode);
      if (!familyCode) return { success: false, error: "家庭 Code 不能为空" };

      // 1) 先尝试读取 families/{code}，如果 rules 不允许，会在这里报 PERMISSION_DENIED
      await get(child(ref(db), `families/${familyCode}`));

      // 2) RTDB：members
      await set(ref(db, `families/${familyCode}/members/${uid}`), true);

      // 3) Firestore：members（给 Storage rules 用）
      await setDoc(
        doc(fsdb, `families/${familyCode}/members/${uid}`),
        { joinedAt: fsServerTimestamp() },
        { merge: true }
      );

      // 4) 记住当前家庭
      localStorage.setItem("familyCode", familyCode);

      return { success: true, uid, familyCode };
    } catch (error: any) {
      console.error("Firebase Join Error:", error);
      if (error?.code === "PERMISSION_DENIED") {
        return { success: false, error: "权限被拒绝：请检查 Realtime Database Rules（需要登录且是 members 才能访问）。" };
      }
      return { success: false, error: error?.message || "网络连接失败或数据库不可用" };
    }
  },

  // 订阅：families/{code}/{key} 实时监听
  subscribeToData: (pairCode: string, key: string, callback: (data: any) => void) => {
    const familyCode = normalizeCode(pairCode);
    const dataRef = ref(db, `families/${familyCode}/${key}`);
    return onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) callback(data);
    });
  },

  // 推送：直接 set 到 families/{code}/{key}
  pushData: async (pairCode: string, key: string, data: any) => {
    const familyCode = normalizeCode(pairCode);
    await set(ref(db, `families/${familyCode}/${key}`), data);
  },

  // 更新用户状态：写到 families/{code}/users/{uid}
  updateUserStatus: async (pairCode: string, userId: string, profile: any) => {
    const familyCode = normalizeCode(pairCode);
    await update(ref(db, `families/${familyCode}/users/${userId}`), {
      ...profile,
      lastActive: Date.now(),
    }).catch(() => {});
  },

  // 初始化云端数据：如果 families/{code} 不存在就 set 一次
  initializeCloudData: async (pairCode: string, allData: any) => {
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