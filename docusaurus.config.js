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
          editUrl: 'https://github.com/czasg/docusaurus/edit/main',
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
    //     id: 'author',
    //     path: 'docs-author',
    //     routeBasePath: '/author',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //   }
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'note',
    //     path: 'docs-note',
    //     routeBasePath: '/note',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //   }
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'deploy',
    //     path: 'docs-deploy',
    //     routeBasePath: '/deploy',
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
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: '博客', position: 'left'},
          {to: '/docs/intro', label: '文档', position: 'left'},
          // {to: '/deploy/intro', label: '部署', position: 'left'},
          {to: '/aboutme', label: '关于我', position: 'left'},
          // {
          //   href: 'https://github.com/czasg',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
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
            title: '常活跃于',
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
            title: 'More',
            items: [
              {
                label: 'ChatGPT',
                href: 'https://chat.openai.com/chat',
              },
              {
                label: 'LXF',
                href: 'https://www.liaoxuefeng.com',
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
