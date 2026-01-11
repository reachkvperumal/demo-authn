/* eslint-disable no-undef */

const githubRepo = process.env.GITHUB_REPOSITORY;
const [githubOwner, githubProject] = githubRepo ? githubRepo.split('/') : [undefined, undefined];

const siteUrl =
    process.env.SITE_URL ||
    (githubOwner ? `https://${githubOwner}.github.io` : 'http://localhost');

const siteBaseUrl =
    process.env.BASE_URL ||
    (githubProject ? `/${githubProject}/` : '/');

const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';

module.exports = {
    title: 'My Docusaurus Docs',
    tagline: 'Generated documentation from CALM',
    url: siteUrl,
    baseUrl: siteBaseUrl,
    onBrokenLinks: isCI ? 'warn' : 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: githubOwner || 'my-org',
    projectName: githubProject || 'calm-docs',

    themeConfig: {
        navbar: {
            title: 'CALM Documentation',
            logo: {
                alt: 'Calm Logo',
                src: 'img/2025_CALM_Icon.svg',
            },
        },
    },

    themes: [
        '@docusaurus/theme-mermaid',
    ],
    markdown: {
        mermaid: true
    },
    stylesheets: [
        'css/custom.css'
    ],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/'
                },
            },
        ],
    ],
    plugins: [
        [
            require.resolve('docusaurus-plugin-search-local'),
            {
                indexDocs: true,
                indexPages: true,
                highlightSearchTermsOnTargetPage: true,
                removeDefaultStopWordFilter: true
            },
        ],
    ],
};
