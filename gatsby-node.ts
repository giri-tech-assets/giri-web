import type { GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';


export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};


// export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode });
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     });
//   }
// };

// export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions;

//   const result = await graphql<{
//     allMarkdownRemark: {
//       edges: Array<{
//         node: {
//           fields: {
//             slug: string;
//           };
//         };
//       }>;
//     };
//   }>(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors || !result.data) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`);
//     return;
//   }

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`src/templates/blog-post.tsx`),
//       context: {
//         slug: node.fields.slug,
//       },
//     });
//   });
// };
