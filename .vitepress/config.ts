import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'JDoodle Documentation',
  description: 'Cloud IDE and Compiler Platform Documentation',
  
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/'
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/'
    }
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'JDoodle Docs',

    nav: [
      { text: 'Cloud IDE', link: '/ide/guide/getting-started' },
      { text: 'Education', link: '/education/guide/getting-started' },
      { text: 'API', link: '/api/guide/getting-started' },
      { text: 'JDoodle.new', link: '/jdoodle-new/guide/getting-started' },
    ],

    sidebar: {
      '/ide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/ide/guide/getting-started' },
            { text: 'Features', link: '/ide/guide/features' },
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'Basic Usage', link: '/ide/examples/basic' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/api/guide/getting-started' },
            { text: 'Authentication', link: '/api/guide/authentication' },
            { text: 'Rate Limits', link: '/api/guide/rate-limits' },
          ]
        },
        {
          text: 'Compiler API',
          items: [
            { text: 'REST API', link: '/api/guide/rest-api' },
            { text: 'WebSocket API', link: '/api/guide/websocket' },
          ]
        },
        {
          text: 'Embedded IDE',
          items: [
            { text: 'Integration', link: '/api/guide/embedded-ide' },
            { text: 'Customization', link: '/api/guide/customization' },
          ]
        }
      ]
    },

    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'jdoodle'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jdoodle' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present JDoodle'
    }
  },

  appearance: true,

  // Custom CSS variables for Stripe-like theme
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            :root {
              --vp-c-brand: rgb(96, 114, 144);
              --vp-c-brand-light: rgb(116, 134, 164);
              --vp-c-brand-dark: rgb(76, 94, 124);
              --vp-c-bg-soft: rgb(235, 239, 246);
              --vp-c-emphasis: rgb(250, 87, 33);
            }
          `
        }
      }
    }
  }
})