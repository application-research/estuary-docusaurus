// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Estuary',
  tagline:
    'A reliable way to upload public data onto Filecoin and pin it to IPFS.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/estuary-documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'snissn', // Usually your GitHub org/user name.
  projectName: 'estuary-documentation', // Usually your repo name.

  presets: [
    [
      'docusaurus-preset-openapi',
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      languageTabs: [
        {
          tabName: "cURL",
          highlight: "bash",
          language: "curl",
          variant: "curl",
          options: {
            longFormat: false,
            followRedirect: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: "JS",
          highlight: "javascript",
          language: "javascript",
          variant: "fetch",
          options: {
            longFormat: false,
            followRedirect: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: "Node",
          highlight: "javascript",
          language: "javascript",
          variant: "fetch",
          options: {
            ES6_enabled: true,
            followRedirect: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: "Go",
          highlight: "go",
          language: "go",
          variant: "native",
          options: {
            followRedirect: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: 'Python',
          highlight: 'python',
          language: 'python',
          variant: 'requests',
          options: {
            followRedirect: true,
            trimRequestBody: true,
          },
        },
      ],

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: 'Estuary Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Learn/intro',
            position: 'left',
            label: 'Docs',
          },
          { to: '/api', label: 'API', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
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
                to: '/docs/learn/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
