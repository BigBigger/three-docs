/*
 * @Description  : vitepress 配置文件
 * @Author       : BigBigger
 * @Date         : 2021-08-10 11:05:21
 * @LastEditTime : 2021-08-18 11:02:47
 * @LastEditors  : BigBigger
 */

const getRoutes = require('./router');

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Three Learning',
  lang: 'zh-CN',
  description: 'threejs 学习日志',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  vite: {
    build: {
      brotliSize: false,
      chunkSizeWarningLimit: 600,
    },
    // 启动服务配置
    server: {
      open: true, // 自动打开浏览器
      port: 8888, // 端口号
    },
  },
  themeConfig: {
    nav: [
      { text: '学习日志', link: '/docs/' },
      {
        text: '相关链接',
        items: [
          {
            text: 'Three',
            link: 'https://three.org',
          },
          {
            text: 'Vue',
            link: 'https://v3.vuejs.org',
          },
          {
            text: 'Vite',
            link: 'https://vitejs.dev/',
          },
          {
            text: 'VitePress',
            link: 'https://vitepress.vuejs.org/',
          },
        ],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/BigBigger/three-docs',
      },
    ],
    sidebar: {
      ...getRoutes('docs'),
      '/': 'auto',
    },
  },
  markdown: {
    anchor: {
      renderPermalink: require('./utils/render-perma-link'),
    },
    config: (md) => {
      md.use(require('./utils/markdown-it-custom-anchor'));
    },
  },
};
