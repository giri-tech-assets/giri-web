import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { motion } from 'framer-motion';
import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image';

interface BlogPostQueryResult {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      date: string;
      author: string;
      featuredImage: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
}

const BlogPostTemplate: React.FC<PageProps<BlogPostQueryResult>> = ({ data }) => {
  const post = data.markdownRemark;
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <div className="min-h-screen bg-[#FFF5E6]" style={{
      backgroundImage: `url('/hand-drawn-style-line-doodle-african-pattern.svg')`,
      backgroundSize: '500px',
      backgroundRepeat: 'repeat',
    }}>
      <motion.div
        className="max-w-4xl mx-auto px-4 py-12 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-[#8B4513]">{post.frontmatter.title}</h1>
        <div className="mb-8 text-gray-600">
          <span>{post.frontmatter.date} | By {post.frontmatter.author}</span>
        </div>
        {image && (
          <GatsbyImage
            image={image}
            alt={post.frontmatter.title}
            className="w-full h-64 object-cover mb-8 rounded-lg"
          />
        )}
        <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.html }} />
      </motion.div>
    </div>
  );
};

export default BlogPostTemplate;
