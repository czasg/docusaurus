// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Czasg',
  tagline: '👋👋👋',
  url: 'https://czasg.github.io',
  baseUrl: '/docusaurus/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'czasg', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          editUrl: 'https://github.com/czasg/docusaurus/edit/main',
          breadcrumbs: true, // 面包屑导航
        },
        blog: {
          blogSidebarTitle: '全部博文',
          showReadingTime: true,
          blogSidebarCount: 'ALL',  // [ALL, number]
          postsPerPage: 10,
          editUrl: 'https://github.com/czasg/docusaurus/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'books',
    //     path: 'books',
    //     routeBasePath: '/books',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //   }
    // ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        style: 'dark',
        title: 'Czasg',
        logo: {
          alt: 'Czasg',
          src: 'img/logo.ico',
        },
        hideOnScroll: true, // 滚动页面时自动隐藏导航栏
        items: [
          {to: '/blog', label: '博客', position: 'left'},
          {to: '/docs', label: '文档', position: 'left'},
          {
            type: 'dropdown',
            label: '工具',
            position: 'left',
            items: [
              {
                label: "ChatGPT",
                href: "https://chat.openai.com/chat",
              },
              {
                label: "Json2Go",
                href: "https://mholt.github.io/json-to-go",
              },
              {
                label: "圆图剪切",
                href: "https://crop-circle.imageonline.co/cn/",
              },
            ],
          },
          {to: '/about-me', label: '关于我', position: 'left'},
        ],
      },
      docs: {
        sidebar: {
          hideable: false, // 侧边栏是否支持隐藏
          autoCollapseCategories: true, // 扩展一个类别时折叠所有的同级类别
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Py开源项目',
            items: [
              {
                label: 'Pywss',
                href: 'https://github.com/czasg/pywss',
              },
              {
                label: 'Loggus',
                href: 'https://github.com/czasg/loggus',
              },
            ],
          },
          {
            title: 'Go开源项目',
            items: [
              {
                label: 'Go Queue',
                href: 'https://github.com/czasg/go-queue',
              },
              {
                label: 'Go Env',
                href: 'https://github.com/czasg/go-env',
              },
              {
                label: 'Go Set',
                href: 'https://github.com/czasg/go-set',
              },
              {
                label: 'Gonal',
                href: 'https://github.com/czasg/gonal',
              },
              {
                label: 'Snow',
                href: 'https://github.com/czasg/snow',
              },
            ],
          },
          {
            title: '活跃社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/czasg',
              },
              {
                label: 'V2EX',
                href: 'https://www.v2ex.com',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com',
              },
            ],
          },
          {
            title: '官方文档',
            items: [
              {
                label: 'Py标准库',
                href: 'https://docs.python.org/zh-cn/3/library/index.html',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Czasg's Site.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
