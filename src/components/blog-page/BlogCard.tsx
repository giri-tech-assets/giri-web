import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { motion } from 'framer-motion';
import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image';

export interface BlogPostData {
  node: {
    id: string;
    frontmatter: {
      title: string;
      date: string;
      author: string;
      excerpt: string;
      featuredImage: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
    fields: {
      slug: string;
    };
  };
}




export const BlogPostCard: React.FC<{ post: BlogPostData['node'] }> = ({ post }) => {
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={post.fields.slug}>
        {image && (
          <GatsbyImage
            image={image}
            alt={post.frontmatter.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.frontmatter.title}</h2>
          <p className="text-gray-600 mb-4">{post.frontmatter.excerpt}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{post.frontmatter.author}</span>
            <span>{post.frontmatter.date}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
