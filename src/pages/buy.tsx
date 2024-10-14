import { ConnectSellerHero } from '../components/home-page/connect-with-sellers/Hero';
import { HowItWorks } from '../components/home-page/how-it-works/HowItWorks';
import { Layout } from '../components/common';
import { MainHeroSection } from '../components/home-page/hero/Hero';
import { Newsletter } from '../components/about-us/Newsletter';
import { WhyGiriToday } from '../components/home-page/why-giri-today/WhyGiri';
import FAQAccordion from '../components/faq';

const homePageContent = {
  connectSellerHero: {
    title: 'CONNECTING AFRICAN SELLERS TO GLOBAL AUDIENCE',
    subtitle:
      '"At Giri, we make shopping for arts, crafts, and locally made products easy, fast, reliable and seamless for our global audience. "',
    ctaText: 'Join our NewsLetter',
  },
};

export default function BuyerPage() {
  return (
    <Layout>
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
