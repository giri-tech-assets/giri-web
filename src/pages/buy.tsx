import { ConnectSellerHero } from '@/components/home-page/connect-with-sellers/Hero';
import { HowItWorks } from '@/components/home-page/how-it-works/HowItWorks';
import { Layout } from '@/components/common';
import { MainHeroSection } from '@/components/home-page/hero/Hero';
import { Newsletter } from '@/components/about-us/Newsletter';
import { WhyGiriToday } from '@/components/home-page/why-giri-today/WhyGiri';
import FAQAccordion from '@/components/faq';
import { graphql } from 'gatsby';


const homePageContent = {
  connectSellerHero: {
    title: "CONNECTING AFRICAN SELLERS TO GLOBAL AUDIENCE",
    subtitle: '"At Giritoday, we make shopping for arts, crafts, and locally made products easy, fast, reliable and seamless for our global audience. "',
    ctaText: "Start Selling Now"
  }
};

export default function SellerPage(data: any) {
  console.log(data);


  return (
    <Layout>
      <MainHeroSection />
      <WhyGiriToday />
      <HowItWorks />
      <FAQAccordion />
      <ConnectSellerHero
        title={homePageContent.connectSellerHero.title}
        subtitle={homePageContent.connectSellerHero.subtitle}
        ctaText={homePageContent.connectSellerHero.ctaText}
      />
      <Newsletter />
    </Layout>
  );
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
