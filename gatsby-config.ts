import type { GatsbyConfig } from 'gatsby';
import path from 'path';

require(`dotenv`).config({
  path: `.env`,
});

const logoUrl = `https://cdn.builder.io/api/v1/image/assets/TEMP/0ef6a459e7c7a66ba196beea2188914c91890feca80f09279d1f0467f591bc29?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e`;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `GiriToday`,
    titleTemplate: `%s | GiriToday`,
    description: `Shop, Sell, Celebrate Africa`,
    siteUrl: `https://giritoday.com`,
    defaultImage: `/img/shop-like-a-local.jpg`,
    social: {
      twitter: `@giritoday`,
      facebook: `giritoday`,
    },
    image: logoUrl,
    organization: {
      name: `GiriToday`,
      url: `https://giritoday.com`,
      logo: logoUrl,
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAG_MANAGER,

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: `gatsby` },

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: `info-site-route-change`,
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
        environment: `main`,
        previewMode: false,
      },
    },
    `gatsby-plugin-decap-cms`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: path.resolve(__dirname, `src/assets/images`),
        },
      },
    },
    {
      resolve: `gatsby-plugin-tidio-chat`,
      options: {
        tidioKey: process.env.TIDIO_API_TOKEN,
        enableDuringDevelop: true, // Optional. Disables Tidio chat widget when running Gatsby dev server. Defaults to true.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq`,
        path: `${__dirname}/content/faq`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `policy`,
        path: `${__dirname}/content/policies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-transformer-remark`,
    /**
     * TODO: this needs to come from envs
     */
    {
      resolve: `gatsby-plugin-apollo`,
      options: {
        typeName: `HASURA`,
        fieldName: `hasura`,
        uri: process.env.HASURA_ENDPOINT_URL,
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        },
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [`/preview/**`, `/do-not-track/me/too/`],
        },
      },
    },
  ],
  jsxRuntime: `automatic`,
  flags: {
    // DEV_SSR: true
  },
};

export default config;
