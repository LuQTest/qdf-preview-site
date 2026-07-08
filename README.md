# 千代福官网预览站 · 发布包

本目录是「千代福网站改版 / 改版第五版」中 `indexV3.3.html` 的**可直接发布静态站**。

## 目录结构
```
发布_千代福预览站/
├── index.html                      # 根入口（自动跳转到预览页）
├── indexV3.3.html                  # 预览页本体
├── images/                         # 页面引用的全部图片资源（40 张）
├── .nojekyll                       # 禁用 GitHub Pages 的 Jekyll 处理
└── README.md                       # 本说明
```

## 重要说明
- 页面通过相对路径 `images/*` 引用图片，已随包一起拷贝，结构不要拆散。
- 页面依赖两个外部 CDN：**Tailwind Play CDN** 与 **Google Fonts**。部署后浏览器会自动联网加载，无需额外处理；但在完全离线环境会丢失样式/字体。
- 页面文件使用英文名 `indexV3.3.html`，根目录用 `index.html` 做跳转，便于 GitHub Pages 稳定访问。

---

## 方式 A：发布到 GitHub Pages（需要你的 GitHub 凭据）

GitHub Pages 必须推送到**你自己的 GitHub 仓库**，因此需要你提供一个
具有 `repo` 权限的 **Personal Access Token (PAT)**，或已有仓库地址。

### A1. 用 Git 推送（推荐，一条命令即可）
1. 在 GitHub 新建一个仓库（如 `qiandafu-preview`，公开）。
2. 在本目录初始化并推送：
   ```bash
   cd 发布_千代福预览站
   git init
   git add -A
   git commit -m "千代福官网预览站"
   git branch -M main
   git remote add origin https://<你的TOKEN>@github.com/<用户名>/<仓库名>.git
   git push -u origin main
   ```
3. 仓库 → Settings → Pages → Source 选 `main` 分支 `/ (root)` → Save。
4. 几分钟后访问 `https://<用户名>.github.io/<仓库名>/`，根目录会自动跳转到预览页。

### A2. 不用 Git，直接在 GitHub 网页上传
进入仓库 → Add file → Upload files → 把本目录全部内容拖进去 → Commit。
然后同样在 Settings → Pages 开启即可。

> 安全提示：PAT 等同于账号密码，用完后请在
> GitHub → Settings → Developer settings → Personal access tokens 吊销。

---

## 方式 B：直接用 CloudStudio 上线（无需任何凭据）
本包已通过 WorkBuddy 的 CloudStudio 部署能力上线，获得一个可立即分享的网址，
适合临时演示、客户预览。需要长期/自定义域名时再走上面的 GitHub Pages。

---

## 本地预览
直接双击 `index.html` 即可在浏览器打开（需联网加载 CDN 与字体）。
