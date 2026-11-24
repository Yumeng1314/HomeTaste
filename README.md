# HomeTaste

HomeTaste 是一个以家庭为单位的手机网页应用。家人可共同记录菜谱、库存和购物清单，安排菜单，再把单道菜谱用 PNG 或文字分享出去。

## 本地运行与验证

使用 Node.js 24，在项目目录运行以下命令。

```bash
npm ci
npm run typecheck
npm test
npm run dev
```

普通开发模式使用现有 Firebase 项目。需要测试家庭创建、加入、同步或迁移时，请使用本地 Firebase 模拟器。模拟器使用单独的演示项目和测试资料。

安装 Firebase CLI 和 Java 21 后，在一个终端启动模拟器。

```bash
firebase emulators:start --only auth,database --project demo-hometaste
```

在另一个终端运行测试和本地页面。

```bash
npm run test:firebase
VITE_FIREBASE_EMULATORS=true npm run dev
```

可分别打开 `http://127.0.0.1:5173/` 和 `http://localhost:5173/`，模拟两个独立的浏览器存储和身份。在一个窗口创建家庭、生成邀请码，再用另一个窗口加入。

## 发布到现有 Firebase 和 GitHub Pages

请按备份、发布数据库规则、发布网页的顺序操作。规则发布后，旧网页无法继续写入旧数据路径。在新版网页部署完成前，请让家人暂停写入。

### 1. 备份线上数据和旧规则

1. 在仍保留旧版数据的常用手机上，打开 HomeTaste → 设置 → 导出数据备份。家里有多部手机时，至少保留常用设备的各一份 JSON，特别是曾经遇到菜谱未同步的设备。
2. 登录 Firebase 控制台，选择项目 `hometaste-d6834`。打开 **Realtime Database → Data**，确认是 `hometaste-d6834-default-rtdb`。在数据面板的菜单里选择 **Export JSON**，保存一份数据库备份。
3. 打开同一个数据库的 **Rules**，把当前规则完整复制到本地文件。若 Firebase 项目还供其他应用使用，先把该应用所需的独立路径规则合并到新规则中，再发布。新文件默认拒绝未列出的路径。
4. 告知家人在切换期间暂停用旧网页修改菜谱、库存或清单。保留原浏览器或原主屏幕应用的站点数据，以便新版识别已有的匿名成员身份。

[Firebase 数据导出说明](https://firebase.google.com/docs/database/manage-data-console) · [Firebase 规则部署说明](https://firebase.google.com/docs/rules/manage-deploy)

### 2. 验证匿名登录并发布 Realtime Database 规则

1. 在 Firebase 控制台打开 **Authentication → Sign-in method**。找到 **Anonymous**，如果尚未启用，打开并保存。
2. 返回 **Realtime Database → Rules**。用项目里的 `database.rules.json` 替换规则编辑框的内容，然后点击 **Publish**。请确认编辑的是 Realtime Database 的规则页。
3. 已经在终端登录 Firebase 且有权限的话，也可用下面的命令发布同一份规则，和控制台操作二选一。

```bash
cd "/Users/yumeng/Documents/Playground/HomeTaste" && firebase deploy --only database --project hometaste-d6834
```

Firebase 控制台的 **Data** 页面用于查看或导出。请把规则文件发布到 **Rules**，把线上数据留在原处。家庭同步只需要匿名认证与 Realtime Database。

[Firebase 匿名认证说明](https://firebase.google.com/docs/auth/web/anonymous-auth)

### 3. 发布前端

在 GitHub 打开 **Yumeng1314/HomeTaste → Settings → Pages → Build and deployment**，查看当前发布来源。

如果需要在 Mac 终端构建或部署，先进入 HomeTaste 项目目录。终端提示符最后显示 `~` 时，你还在用户主目录。

```bash
cd "/Users/yumeng/Documents/Playground/HomeTaste"
```

- 如果显示 **Deploy from a branch → main → /docs**，运行 `npm run build`，将代码和完整的 `docs/` 更新一起提交。如果本地的 `docs/` 已按当前代码重新构建，可以直接提交。可以先推到分支再合并到 `main`。合并后到 **Actions** 查看 Pages 部署状态。
- 如果显示 **Deploy from a branch → gh-pages → /(root)**，先把代码提交到项目仓库。然后在已能推送该仓库的终端运行 `npm run deploy`，由脚本构建并推送 `gh-pages`。到 **Actions** 等待 Pages 部署通过。
- 如果显示 **GitHub Actions**，使用现有 Pages 发布工作流。工作流需要执行 `npm ci` 和 `npm run build`，上传的 Pages artifact 目录应为 `docs`。
- 如果线上实际使用 Firebase Hosting，可执行 `npm run build`，然后运行 `firebase deploy --only hosting --project hometaste-d6834`。数据库规则仍按上一步单独发布。

如果你用 GitHub Desktop 提交 `main /docs` 版本，选择 **File → Add Local Repository**，指向本机 `/Users/yumeng/Documents/Playground/HomeTaste`。在 **Changes** 确认包含源码、`database.rules.json` 和完整的 `docs/` 更新，填写提交说明，点击 **Commit**，再点 **Push origin**。如果 `main` 有分支保护，先从 **Branch → New branch** 建分支，提交并发布分支，再在 GitHub 合并 Pull Request。

发布后，从 **Settings → Pages** 打开它显示的正式网址。已经加到手机主屏幕的用户可以关闭 HomeTaste 再打开。首次启动新版时，本应用使用原站点地址和站点数据识别已有家庭。

[GitHub Pages 发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### 4. 在家人的手机上验收

1. 先用一台已加入家庭的旧设备打开新版，等首页显示「已同步」。新版会读取旧家庭的数据并复制到 `families/<家庭 ID>/shared`，迁移后旧记录仍在原路径。
2. 核对几道菜、库存、采购和近期历史。如果常用设备上有以前没传完的记录，使用 **家庭设置 → 补入本机旧版记录**，或 **从备份补入缺失记录**，确认条目数量后再保存。家庭备份补入按记录 ID 处理，已有记录会保留。单机模式另可选择用备份完整替换本机数据。
3. 已加入的其他设备使用原浏览器打开新版。如果设备更换或浏览器身份已清除，请让仍在家庭中的成员点 **家庭设置 → 生成邀请码**，再从新设备的同一屏幕粘贴该码加入。新版邀请码有效期为 6 天。
4. 两部手机分别新增不同采购项，确认双方都看到两笔。再买入一项，核对它只入库一次。用一台手机断网新增采购项，恢复网络后确认另一台手机能看到。
5. 在 iPhone Safari 及已添加到主屏幕的版本、Android Chrome 上打开一道菜，确认 **分享 → 分享图片、保存图片、复制文字** 均符合预期。系统分享面板展示的目标取决于手机上安装的应用与系统支持。

如需排查，先保留手机上的站点数据和待同步操作。已升级家庭的修改写入 `shared`，因此直接切回旧网页只会读取升级之前的旧路径。回滚前先导出新版备份，再处理数据迁移。

## 可选的 AI 设置

菜谱、库存、计划、采购与分享不需要 Gemini key。原有识图和在线推荐仍会读取 `VITE_GEMINI_API_KEY`。该值用于前端构建，部署时会进入浏览器代码。公开构建请留空，识图在没有 key 时不可用，推荐使用现有的本地演示逻辑。
