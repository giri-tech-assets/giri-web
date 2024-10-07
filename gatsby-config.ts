import type { GatsbyConfig } from 'gatsby';
import path from 'path';


const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
  ],
  jsxRuntime: `automatic`,
};

export default config;
