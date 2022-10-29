// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Estuary Documentation',
  tagline:
    'A reliable way to upload public data onto Filecoin and pin it to IPFS.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/estuary-documentation/',
  onBrokenLinks: 'warn',
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
          tabName: 'cURL',
          highlight: 'bash',
          language: 'curl',
          variant: 'curl',
          options: {
            longFormat: false,
            followRedirect: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: 'JS',
          highlight: 'javascript',
          language: 'javascript',
          variant: 'fetch',
          options: {
            longFormat: false,
            followRedirect: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: 'Node',
          highlight: 'javascript',
          language: 'javascript',
          variant: 'fetch',
          options: {
            ES6_enabled: true,
            followRedirect: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: 'Go',
          highlight: 'go',
          language: 'go',
          variant: 'native',
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
        logo: {
          alt: 'Estuary Logo',
          src: 'img/Estuary.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Learn/intro',
            position: 'left',
            label: 'Docs',
          },
          { to: '/clients',           docsPluginId: 'clients',
          label: 'Supported API Clients', position: 'left' },
          { to: '/api', label: 'API Documentation', position: 'left' },
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
                label: 'Twitter',
                href: 'https://twitter.com/aresearchgroup',
              },
              {
                label: 'Join Slack',
                href:
                  'https://docs.estuary.tech/#:~:text=Join%20Slack%20(%23ecosystem%2Ddev)',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/ipfs',
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
                href: 'https://github.com/application-research/estuary',
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
    plugins: [
      "docusaurus-plugin-sass",
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'clients',
          path: 'clients',
          routeBasePath: 'clients',
          sidebarPath: require.resolve('./sidebars.js'),
          // ... other options
        },
      ],
    ],
  
}

module.exports = config
