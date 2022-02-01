// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digital Public Goods Accelerator Guide',
  tagline: '',
  url: 'https://unicef.github.io/',
  baseUrl: '/publicgoods-accelerator-guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'unicef', // Usually your GitHub org/user name.
  projectName: 'publicgoods-accelerator-guide', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/unicef/publicgoods-accelerator-guide/edit/main/',
          routeBasePath: '/',   // docs-only mode https://docusaurus.io/docs/docs-introduction#docs-only-mode
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false, // Optional: disable the blog plugin
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Digital Public Goods Accelerator Guide',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'introduction/how-to-use-this-guide',
          //   position: 'left',
          //   label: 'Guide',
          // },
          {
            href: 'https://github.com/unicef/publicgoods-accelerator-guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/introduction/how-to-use-this-guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/UNICEFinnovate',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/unicef/publicgoods-accelerator-guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UNICEF. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
