import type { GatsbyNode } from 'gatsby'
import path from 'path'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });
};


exports.onCreatePage = ({ page, actions }: any) => {
  const { createPage } = actions
  if (page.path.match(/^\/404\/$/)) {
    page.matchPath = "/*"
    createPage(page)
  }
}
