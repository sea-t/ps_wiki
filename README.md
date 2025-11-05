# 学习博客 - Java & AI 工程师成长之路

[![Deploy VitePress Site](https://github.com/sea-t/ps_wiki/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/sea-t/ps_wiki/actions/workflows/gh-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> 基于 VitePress 构建的技术学习博客，专注于 Java 工程师和 AI 工程师的成长路径。

## 🌐 在线访问

访问地址：[https://sea-t.github.io/ps_wiki/](https://sea-t.github.io/ps_wiki/)

## 📚 内容概览

- **Java 工程师路线** - 从基础到进阶的完整学习路径
- **AI 工程师路线** - Python、机器学习、深度学习系统化教程
- **Linux 运维** - 系统管理、网络配置、Shell 脚本
- **DevOps** - Docker、CI/CD、云原生技术
- **AI 资讯** - 追踪 AI 领域最新动态和技术趋势

## 🚀 快速开始

### 环境要求

- Node.js 18.0+
- npm 或 yarn

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 📁 项目结构

```
ps_wiki/
├── docs/                      # VitePress 文档目录
│   ├── .vitepress/           # VitePress 配置
│   │   ├── config.ts         # 站点配置
│   │   └── theme/            # 自定义主题
│   │       ├── index.ts      # 主题入口
│   │       └── custom.css    # 自定义样式
│   ├── index.md              # 首页
│   ├── roadmap/              # 学习路线
│   ├── ai-news/              # AI 资讯
│   └── about.md              # 关于页面
├── .github/
│   └── workflows/
│       └── gh-pages.yml      # GitHub Actions 部署配置
├── package.json              # 项目配置
└── README.md                 # 项目说明（本文件）
```

## 🎨 主题特色

- ✨ 紫色渐变主题配色
- 🌓 完美支持深色/浅色模式
- 📱 响应式设计，移动端友好
- 🔍 强大的本地搜索功能
- ⚡ 快速的页面加载速度
- 🎯 清晰的导航和侧边栏组织

## 🛠️ 技术栈

- **框架**: [VitePress](https://vitepress.dev/) - 基于 Vite 和 Vue 的静态站点生成器
- **部署**: GitHub Pages + GitHub Actions
- **样式**: 自定义 CSS 主题
- **语言**: TypeScript + Markdown

## 📝 内容贡献

欢迎提交问题和改进建议！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

### 写作规范

- 使用 Markdown 格式编写
- 代码示例要有语法高亮标记
- 添加适当的标题层级和导航
- 保持内容的准确性和时效性

## 📄 License

本项目采用 [MIT](LICENSE) 协议开源。

## 🤝 联系方式

- GitHub: [@sea-t](https://github.com/sea-t)
- Issues: [提交问题](https://github.com/sea-t/ps_wiki/issues)

## 🙏 致谢

- [VitePress](https://vitepress.dev/) - 优秀的文档站点生成器
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- 所有贡献者的支持和帮助

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/sea-t">sea-t</a>
  <br>
  © 2019-2025 sea-t's Learning Blog
</p>
