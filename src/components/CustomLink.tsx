// src/components/CustomLink.tsx
import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';

interface CustomLinkProps extends Omit<GatsbyLinkProps<{}>, 'ref'> {
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, ...props }) => {
  const isInternal = /^\/(?!\/)/.test(to);
  const isAnchor = to.includes('#');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor) {
      e.preventDefault();
      const element = document.getElementById(to.slice(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // if (isInternal) {
  //   return <Link to={to} {...props} onClick={handleClick} />;
  // }

  return <a href={to} {...props} />;
};

export default CustomLink;
