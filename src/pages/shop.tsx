import { ConnectSellerHero } from '../components/home-page/connect-with-sellers/Hero';
import { Layout } from '../components/common';
import { MainHeroSection } from '../components/home-page/hero/Hero';
import { Newsletter } from '../components/about-us/Newsletter';
import { WhyGiriToday } from '../components/home-page/why-giri-today/WhyGiri';
import FAQAccordion from '../components/faq';
import { SEO } from '@/components/seo/seo';

const homePageContent = {
  connectSellerHero: {
    title: `CONNECTING AFRICAN SELLERS TO GLOBAL AUDIENCE`,
    subtitle: `"At Giri, we make shopping for arts, crafts, and locally made products easy, fast, reliable and seamless for our global audience."`,
    ctaText: `Join our NewsLetter`,
  },
};

export default function BuyerPage() {
  return (
    <Layout>
      <SEO
        title="GiriToday - Shop authentic African products – delivered worldwide with ease! 🌍🛍️"
        description="Looking for vibrant African fashion? 🌺 Handmade jewelry? 🍲 Fresh, hard-to-find African groceries? 🍹 We’ve got it all! GiriToday connects you with trusted artisans and sellers from Africa, bringing unique, high-quality products straight to your door."
        pathname="/shop"
        image="/img/gift-couple.jpg"
      />
      <MainHeroSection />
      <WhyGiriToday />
      {/* /**
       Make popular section gallery
        */}
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
