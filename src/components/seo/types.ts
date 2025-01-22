import * as React from 'react';

export interface SiteMetadata {
  title: string;
  titleTemplate: string;
  description: string;
  siteUrl: string;
  image: string;
  defaultImage: string;
  social: {
    twitter?: string;
    facebook?: string;
  };
  organization?: {
    name: string;
    url: string;
    logo: string;
  };
}

export interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  article?: boolean;
  noindex?: boolean;
  children?: React.ReactNode;
}
