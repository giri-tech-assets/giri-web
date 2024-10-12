import { useStaticQuery, graphql } from 'gatsby'

export const useGetAllImages = () => {
  const data = useStaticQuery(graphql`
  {
    datoCmsAllpageimage {
      images {
        filename
        url
        alt
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          imgixParams: {invert: true}
        )
      }
    }
  }`)

  return  data?.datoCmsAllpageimage?.images?.reduce((acc: Record<string, any>, image: any) => {
    acc[image.filename.split('.')[0]] = image;
    return acc;
  }, {});
}



