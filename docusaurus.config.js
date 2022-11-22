// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Estuary Documentation',
  tagline:
    'A reliable way to upload public data onto Filecoin and pin it to IPFS.',
  url: 'https://docs.estuary.tech',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'application-research', // Usually your GitHub org/user name.
  projectName: 'estuary-documentation', // Usually your repo name.

  presets: [
    [
      'docusaurus-preset-openapi',
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          editUrl:
            'https://github.com/application-research/estuary-documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/application-research/estuary-documentation/tree/main/',
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
          language: 'NodeJs',
          variant: 'Native',
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
          target: '_self',
          href: 'https://estuary.tech',
          alt: 'Estuary Logo',
          src: 'img/Estuary.svg',
           srcDark: 'img/Estuary_dark.svg',
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
            href: 'https://github.com/application-research/estuary',
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
              {
                label: 'Feedback',
                href: '/feedback',
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
              {
                label: 'Documentation Source Code',
                href: 'https://github.com/application-research/estuary-documentation',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      require.resolve('docusaurus-lunr-search'),
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
