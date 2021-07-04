/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React Frankenstein',
  tagline: 'Dinosaurs are cool',
  url: 'https://alvin883.github.io',
  baseUrl: '/react-frankenstein/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'alvin883', // Usually your GitHub org/user name.
  projectName: 'react-frankenstein', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'React Frankenstein',
      logo: {
        alt: 'React Frankenstein Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Documentation',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/alvin883/react-frankenstein',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/react-frankenstein',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/alvin883/react-frankenstein',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} alvin883. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/alvin883/react-frankenstein/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/alvin883/react-frankenstein/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
};
