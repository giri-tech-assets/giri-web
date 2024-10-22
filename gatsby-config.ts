import type { GatsbyConfig } from 'gatsby';
import path from 'path';

require("dotenv").config({
  path: `.env`,
})

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
        environment: 'main',
        previewMode: false,
      },
    },
    `gatsby-plugin-decap-cms`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Giri- Africa's Global Marketplace",
        short_name: "GiriToday",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffffff",
        theme_color: "#db3000",
        icon: "src/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/images')
        }
      }
    },
    {
      resolve: 'gatsby-plugin-tidio-chat',
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
      resolve: 'gatsby-plugin-apollo',
      options: {
        typeName: 'HASURA',
        fieldName: 'hasura',
        uri: 'https://darling-sponge-48.hasura.app/v1/graphql',
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
          exclude: ["/preview/**", "/do-not-track/me/too/"],
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

