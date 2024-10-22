import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

interface ImageItem {
  image: string;
  name: string;
  alt: string;
  caption: string | null;
}

interface ImageValue {
  src: string;
  alt: string;
  caption: string | null;
}

interface GroupedImages {
  [page: string]: {
    [imageName: string]: ImageValue;
  };
}

interface GalleryData {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    page: string;
    gallery_images: ImageItem[];
  };
}

function groupImages(data: GalleryData[]): GroupedImages {
  // Extract available pages from the data
  const pages = [...new Set(data.map((item) => item.frontmatter.page))];

  // Create grouped images object
  return pages.reduce((acc: GroupedImages, page) => {
    // Get all images for this page
    const pageImages = data
      .filter((item) => item.frontmatter.page === page)
      .flatMap((item) => item.frontmatter.gallery_images);

    // Convert array to object with image names as keys
    acc[page] = pageImages.reduce((imageAcc, img) => {
      imageAcc[img.name] = {
        src: img.image,
        alt: img.alt,
        caption: img.caption,
      };
      return imageAcc;
    }, {} as { [key: string]: ImageValue });

    return acc;
  }, {});
}

export const useGetPageImage = () => {
  const queryResults = useStaticQuery(graphql`
    query ImagesGallery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/images/" } }
      ) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            page
            gallery_images {
              image
              name
              alt
              caption
            }
          }
        }
      }
    }
  `);

  return useMemo(
    () => groupImages(queryResults.allMarkdownRemark.nodes),
    [queryResults],
  );
};
