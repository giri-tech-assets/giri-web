import { useStaticQuery, graphql } from 'gatsby';
import { formatFAQData } from './utils';

const FAQ_QUERY = graphql`
  query GroupedFAQQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/faq/" } }
      sort: { frontmatter: { order: ASC } }
    ) {
      group(field: { frontmatter: { type: SELECT } }) {
        fieldValue
        nodes {
          frontmatter {
            question
            answer
            type
          }
        }
      }
    }
  }
`;

export const usePageContentQueries = () => {
  const faqQuery = useStaticQuery(FAQ_QUERY);

  return {
    faqQuery: formatFAQData(faqQuery.allMarkdownRemark?.group) ?? {},
  };
};
