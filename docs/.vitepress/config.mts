import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blog",
  description: "A VitePress Site",
  base: '/blog/', // 静态资源相对路径
  // srcDir: './',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }, // index.md 主页面
      { text: '例页', link: '/markdown-examples' },
      { text: '杂谈', link: '/discussion-list' },
      { text: '闪念胶囊', link: '/flash-thoughts' },
    ],

    sidebar: [
      {
        text: '闪念胶囊',
        items: [
          { text: '闪念胶囊1', link: '/flash-thoughts' },
          { text: '闪念胶囊2', link: '/flash-thoughts' }
        ]
      }
      // {
      //   text: '例页1',
      //   items: [
      //     { text: '例页1', link: '/markdown-examples' },
      //     { text: '例页2', link: '/api-examples' }
      //   ]
      // },
      // {
      //   text: '杂谈',
      //   items: [
      //     { text: '杂谈1', link: '/discussion-list' },
      //     { text: '杂谈2', link: '/api-examples' }
      //   ]
      // },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
