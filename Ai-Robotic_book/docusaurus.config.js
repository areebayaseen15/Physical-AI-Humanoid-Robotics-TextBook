// @ts-check
// Note: type annotations allow type checking and IDEs to introspect type errors.
// By default, this file processes JSDoc comments.
// You can add TypeScript configuration like:
// module.exports = { ... }
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'An open-source, AI-augmented textbook for physical AI and humanoid robotics, leveraging Claude agents for dynamic content generation, personalization, and RAG-driven interactions.',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'claude-code-hackathon', // Usually your GitHub org/user name.
  projectName: 'robotic-book', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/claude-code-hackathon/robotic-book/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/claude-code-hackathon/robotic-book/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        // logo: {
        //   alt: 'Physical AI & Humanoid Robotics Textbook',
        //   src: 'img/logo.svg',
        // },
   
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Textbook Intro',
                to: '/docs/intro',
              },
              {
                label: 'Curriculum',
                to: '/docs/module1/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/panaversity',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/panaversity',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/claude-code-hackathon/robotic-book',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Panaversity. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
module.exports = config;
