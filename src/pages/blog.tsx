// import { BlogPostData, BlogPostCard } from "../components/blog-page/BlogCard";
// import { motion } from "framer-motion";
// import { PageProps, graphql } from "gatsby";

// interface BlogPageQueryResult {
//   allMarkdownRemark: {
//     edges: BlogPostData[];
//   };
// }

// const AfricanInspiredBlogPage: React.FC<PageProps<BlogPageQueryResult>> = ({ data }) => {
//   const posts = data?.allMarkdownRemark.edges;

//   return (
//     <div className="min-h-screen bg-[#FFF5E6]" style={{
//       backgroundImage: `url('/hand-drawn-style-line-doodle-african-pattern.svg')`,
//       backgroundSize: '500px',
//       backgroundRepeat: 'repeat',
//     }}>
//       <div className="max-w-6xl mx-auto px-4 py-12" style={{
//         backgroundColor: 'rgba(255, 245, 230, 0.9)',
//       }}>
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#8B4513]"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Giri Blog: Stories from Africa
//         </motion.h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {posts.map(({ node }) => (
//             <BlogPostCard key={node.id} post={node} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AfricanInspiredBlogPage;

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             author
//             excerpt
//             featuredImage {
//               childImageSharp {
//                 gatsbyImageData(layout: CONSTRAINED, width: 800)
//               }
//             }
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;


function Blog() {
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  )
}

export default Blog;
