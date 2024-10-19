import { useStaticQuery, graphql } from 'gatsby';
import { formatFAQData } from './utils';

const SITE_CONTENT_QUERY = graphql`
  query SiteContentQuery {
    faqs: allMarkdownRemark(
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
    policies: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/policies/" } }
    ) {
      nodes {
        frontmatter {
          title
          introduction
          sections {
            title
            content
          }
          contact
        }
        fileAbsolutePath
      }
    }
    terms: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/terms/" } }
    ) {
      nodes {
        frontmatter {
          title
          introduction
          sections {
            title
            content
          }
          contact
        }
        fileAbsolutePath
      }
    }
  }
`;

export const usePageContentQueries = () => {
  const queryResults = useStaticQuery(SITE_CONTENT_QUERY);

  return {
    faqQuery: formatFAQData(queryResults.faqs?.group) ?? {},
    policyQuery: queryResults.policies?.nodes ?? [],
  };
};
