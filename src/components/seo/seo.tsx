import React from 'react';
import { Helmet as HemletElement } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import type { SiteMetadata, SEOProps } from './types';

const Helmet = HemletElement as any;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  image,
  article = false,
  noindex = false,
  children,
}) => {
  // Get default metadata from gatsby-config
  const { site } = useStaticQuery<{
    site: { siteMetadata: SiteMetadata };
  }>(graphql`
    query {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          siteUrl
          image
          social {
            twitter
            facebook
          }
          organization {
            name
            url
            logo
          }
        }
      }
    }
  `);

  const metadata = site.siteMetadata;
  const seo = {
    title: title || metadata.title,
    description: description || metadata.description,
    url: pathname ? `${metadata.siteUrl}${pathname}` : metadata.siteUrl,
    image: `${metadata.siteUrl}${image || metadata.image}`,
  };

  // Schema.org JSON-LD
  const organizationSchema = metadata.organization
    ? {
        '@context': `https://schema.org`,
        '@type': `Organization`,
        name: metadata.organization.name,
        url: metadata.organization.url,
        logo: metadata.organization.logo,
      }
    : null;

  const articleSchema = article
    ? {
        '@context': `https://schema.org`,
        '@type': `Article`,
        headline: seo.title,
        image: seo.image,
        url: seo.url,
      }
    : null;

  return (
    <Helmet
      title={seo.title}
      titleTemplate={metadata.titleTemplate}
      defer={false}
    >
      {/* General Meta Tags */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={seo.url} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? `article` : `website`} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {metadata.social?.facebook && (
        <meta property="fb:app_id" content={metadata.social.facebook} />
      )}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {metadata.social?.twitter && (
        <meta name="twitter:creator" content={metadata.social.twitter} />
      )}
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Schema.org JSON-LD */}
      {organizationSchema && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {/* Additional Meta Tags */}
      {children}
    </Helmet>
  );
};
