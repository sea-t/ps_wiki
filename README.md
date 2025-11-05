# 博客使用指南

这是一份简明的博客维护和内容添加指南。

## 📝 添加博客内容

### 1. 添加新文章

在 `docs/` 目录下创建或编辑 Markdown 文件：

```bash
# 例如：添加一篇 Java 相关文章
docs/notes/java/spring-boot.md

# 添加一篇 AI 资讯
docs/ai-news/2025-trends.md
```

### 2. 文章格式

每篇文章使用标准 Markdown 格式：

```markdown
# 文章标题

文章内容...

## 二级标题

内容段落...
```

### 3. 更新导航和侧边栏

编辑 `docs/.vitepress/config.ts`：

```typescript
// 添加导航栏链接
nav: [
  { text: '新栏目', link: '/new-section/' }
]

// 添加侧边栏
sidebar: {
  '/new-section/': [
    {
      text: '栏目名称',
      items: [
        { text: '文章标题', link: '/new-section/article' }
      ]
    }
  ]
}
```

## 🚀 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

访问 `http://localhost:5173/ps_wiki/` 预览。

### 构建生产版本

```bash
npm run docs:build
```

## 📁 目录结构

```
docs/
├── .vitepress/
│   ├── config.ts        # 站点配置
│   └── theme/           # 自定义主题
├── index.md             # 首页
├── roadmap/             # 学习路线
├── ai-news/             # AI 资讯
└── notes/               # 技术笔记
```

## 🎨 自定义主题

编辑 `docs/.vitepress/theme/custom.css` 修改样式。

主题色变量：

```css
:root {
  --vp-c-brand-1: #7c3aed;  /* 主色调 */
  --vp-c-brand-2: #6d28d9;
  --vp-c-brand-3: #5b21b6;
}
```

## 🔧 配置说明

### 站点信息

`docs/.vitepress/config.ts`:

```typescript
export default defineConfig({
  title: '站点标题',
  description: '站点描述',
  base: '/ps_wiki/',
})
```

### 搜索功能

使用本地搜索，无需额外配置。

## 📤 部署

### 自动部署

推送到 `main` 或 `master` 分支会自动触发 GitHub Actions 部署。

### 手动部署

```bash
npm run docs:build
# 将 docs/.vitepress/dist 目录部署到服务器
```

## 📋 常用命令

```bash
# 开发
npm run docs:dev

# 构建
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 🐛 故障排查

### 构建失败

1. 检查 `package-lock.json` 是否存在
2. 运行 `npm install` 重新安装依赖
3. 检查 Markdown 文件语法是否正确

### 样式不生效

1. 清除缓存：删除 `docs/.vitepress/cache` 目录
2. 重启开发服务器

## 📚 参考资料

- [VitePress 官方文档](https://vitepress.dev/)
- [Markdown 语法指南](https://www.markdownguide.org/)

---

更多问题请提交 [Issue](https://github.com/sea-t/ps_wiki/issues)
