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


const POLICY_QUERY = graphql`
  query PolicyQuery {
    markdownRemark(fileAbsolutePath: { regex: "/content/policies/" }) {
      frontmatter {
        title
        lastUpdated
        introduction
        sections {
          title
          content
        }
        contact
      }
    }
  }
`;

export const usePageContentQueries = () => {
  const faqQuery = useStaticQuery(FAQ_QUERY);
  const policyQuery = useStaticQuery(POLICY_QUERY);

  return {
    faqQuery: formatFAQData(faqQuery.allMarkdownRemark?.group) ?? {},
    policyQuery,
  };
};
