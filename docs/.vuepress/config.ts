import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions>({
  cache: "",
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',
  base:'/abc/',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',

    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: [
              '/a1/index.md',
              '/a1/vue_tsx_v_model.md',
            ],
          },
          {
            text: 'SubGroup2',
            children: [
              '/a1/select1.md',
            ],
          },
        ],
      },
    ],
    sidebar: {
      '/a1/': [
        {
          text: 'vue3 tsx',
          children: ['index.md', 'vue_tsx_v_model.md']
        }
      ],
    }
  }
});
