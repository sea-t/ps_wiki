import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站标题和描述
  title: '学习博客',
  description: 'Java & AI 工程师成长之路 - 系统化的学习路径和实用的技术资源',
  lang: 'zh-CN',

  // 部署基础路径
  base: '/ps_wiki/',

  // Head 标签
  head: [
    ['link', { rel: 'icon', href: '/ps_wiki/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  // 主题配置
  themeConfig: {
    // 网站 Logo
    logo: '/logo.svg',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习路线',
        items: [
          { text: 'Java & AI 工程师路线图', link: '/roadmap/java-ai-engineer' }
        ]
      },
      {
        text: 'AI 资讯',
        items: [
          { text: 'AI 资讯概览', link: '/ai-news/' },
          { text: '2025年AI趋势', link: '/ai-news/2025-trends' }
        ]
      },
      {
        text: '关于',
        items: [
          { text: '关于本站', link: '/about' },
          { text: 'GitHub', link: 'https://github.com/sea-t/ps_wiki' }
        ]
      }
    ],

    // 侧边栏
    sidebar: {
      '/roadmap/': [
        {
          text: '📚 学习路线',
          collapsed: false,
          items: [
            { text: 'Java & AI 工程师学习路线图', link: '/roadmap/java-ai-engineer' }
          ]
        }
      ],
      '/ai-news/': [
        {
          text: '📰 AI 资讯',
          collapsed: false,
          items: [
            { text: 'AI 资讯概览', link: '/ai-news/' },
            { text: '2025年AI最新资讯与趋势', link: '/ai-news/2025-trends' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sea-t/ps_wiki' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 sea-t. Powered by VitePress'
    },

    // 搜索（本地搜索）
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/sea-t/ps_wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 深色模式
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',

    // 语言切换
    langMenuLabel: '多语言'
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // 最后更新时间戳
  lastUpdated: true,

  // 清理 URL
  cleanUrls: true
})
