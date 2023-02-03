// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Estuary Documentation",
  tagline:
    "A reliable way to upload public data onto Filecoin and pin it to IPFS.",
  url: "https://docs.estuary.tech",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pin-storage", // Usually your GitHub org/user name.
  projectName: "pin-storage-documentation", // Usually your repo name.

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          routeBasePath: "/",
          breadcrumbs: false,
          editUrl: "https://github.com/pin-storage/estuary-docusaurus",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/pin-storage/estuary-docusaurus",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
          tabName: "Node",
          highlight: "javascript",
          language: "NodeJs",
          variant: "Axios",
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
          tabName: "Python",
          highlight: "python",
          language: "python",
          variant: "requests",
          options: {
            followRedirect: true,
            trimRequestBody: true,
          },
        },
      ],

      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      navbar: {
        logo: {
          alt: "LOGO",
          src: "/img/icons/horizontal_gradient.png",
        },
        items: [
          {
            label: "pin.storage",
            to: "https://pin-storage-web.vercel.app/",
            position: "left",
            className: "logo",
          },
          {
            to: "/",
            position: "left",
            label: "Docs",
          },
          { to: "/api", label: "API", position: "left" },
          // { to: '/blog', label: 'Blog', position: 'left' }, (Removing the link to blog for now)
        ],
      },
      footer: {
        logo: {
          src: "/img/icons/horizontal_gradient.png",
        },
        copyright: "© 2023 - Pin.Storage",
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Quickstart",
                to: "/docs/Learn/Quickstart/Get an API Key",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/aresearchgroup",
              },
              {
                label: "Join Slack",
                href: "https://filecoin.io/slack",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/ipfs",
              },
              {
                label: "Feedback",
                href: "/feedback",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/pin-storage/",
              },
              {
                label: "Documentation Source Code",
                href: "https://github.com/pin-storage/estuary-docusaurus",
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
    require.resolve("docusaurus-lunr-search"),
    "docusaurus-plugin-sass",
  ],
};

module.exports = config;
