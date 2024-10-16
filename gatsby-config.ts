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
        apiToken: '48f99ef2f4919a8444b4101c043ec3',
        environment: 'main',
        previewMode: false,
      },
    },
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
        tidioKey: 'bdzekyema5graqeqzgmc5yfvljg5jgfp',
        enableDuringDevelop: true, // Optional. Disables Tidio chat widget when running Gatsby dev server. Defaults to true.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`,
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
          'x-hasura-admin-secret': 'czcmfonL8cTnFa0EBk1FjE1PjyxsJIYdrksplESuO3zY7w0IB1K0mI2wTwxPiCyC'
        },
      },
    },


    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-WY472GMRDX'
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

