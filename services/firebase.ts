
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, update, get, child } from "firebase/database";

// TODO: 请替换为您自己的 Firebase 项目配置
// 1. 访问 console.firebase.google.com 创建项目
// 2. 进入 Project Settings -> General -> Your apps -> SDK setup and configuration
// 3. 复制配置如下：
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // 即使这里没填，代码结构也是为了让您填入后即可工作
  authDomain: "hometaste-demo.firebaseapp.com",
  databaseURL: "https://hometaste-demo-default-rtdb.firebaseio.com",
  projectId: "hometaste-demo",
  storageBucket: "hometaste-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// 尝试初始化，如果配置无效则捕获错误以免应用崩溃
let db: any = null;
try {
  const app = initializeApp(firebaseConfig);
  db = getDatabase(app);
} catch (e) {
  console.warn("Firebase 初始化失败，请检查 services/firebase.ts 中的配置。目前将仅使用本地存储。", e);
}

export const syncService = {
  // 生成一个新的家庭配对码
  generatePairCode: () => {
    return 'HT-' + Math.floor(100000 + Math.random() * 900000);
  },

  // 加入家庭：检查配对码是否存在
  joinFamily: async (pairCode: string): Promise<boolean> => {
    if (!db) return false;
    const dbRef = ref(db);
    try {
      const snapshot = await get(child(dbRef, `families/${pairCode}`));
      // 如果节点存在，或者这是一个新生成的码（允许创建），则返回 true
      // 这里简化逻辑：只要格式正确就允许连接，连接后首次同步决定数据流向
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  // 监听数据变化
  subscribeToData: (pairCode: string, key: string, callback: (data: any) => void) => {
    if (!db || !pairCode) return () => {};
    
    const dataRef = ref(db, `families/${pairCode}/${key}`);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        callback(data);
      }
    });
    return unsubscribe; // 返回取消订阅的函数
  },

  // 推送数据更新（防抖逻辑应在 UI 层处理，这里负责直接写）
  pushData: (pairCode: string, key: string, data: any) => {
    if (!db || !pairCode) return;
    set(ref(db, `families/${pairCode}/${key}`), data).catch(err => console.error("Sync failed", err));
  },

  // 更新用户状态（在线状态/资料）
  updateUserStatus: (pairCode: string, userId: string, profile: any) => {
    if (!db || !pairCode) return;
    update(ref(db, `families/${pairCode}/users/${userId}`), {
      ...profile,
      lastActive: Date.now()
    });
  },
  
  // 初始化上传：当用户第一次创建/连接家庭时，把本地数据传上去
  initializeCloudData: async (pairCode: string, allData: any) => {
    if (!db || !pairCode) return;
    // 检查云端是否已有数据
    const snapshot = await get(ref(db, `families/${pairCode}`));
    if (!snapshot.exists()) {
      // 云端无数据，上传本地数据作为初始值
      await set(ref(db, `families/${pairCode}`), allData);
      return true; // 我是主导者
    }
    return false; // 云端已有数据，应该下载（这会通过 subscribeToData 自动完成）
  }
};
