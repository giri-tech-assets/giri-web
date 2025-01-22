import { ConnectSellerHero } from '../components/home-page/connect-with-sellers/Hero';
import { HowItWorks } from '../components/home-page/how-it-works/HowItWorks';
import { Layout } from '../components/common';
import { MainHeroSection } from '../components/home-page/hero/Hero';
import { Newsletter } from '../components/about-us/Newsletter';
import { WhyGiriToday } from '../components/home-page/why-giri-today/WhyGiri';
import FAQAccordion from '../components/faq';
import { TrackYourOrder } from '@/components/seller-track-order';
import { SEO } from '@/components/seo/seo';

const homePageContent = {
  connectSellerHero: {
    title: `CONNECTING AFRICAN SELLERS TO GLOBAL AUDIENCE`,
    subtitle: `"At Giri, we make shopping for arts, crafts, and locally made products easy, fast, reliable and seamless for our global audience. "`,
    ctaText: `Start Selling Now`,
  },
};

export default function SellerPage() {
  return (
    <Layout>
      <SEO
        title="Sell smarter with GiriToday – your partner in global success!"
        description="Reach a global audience while focusing on what you do best – creating amazing products. With local payouts, seamless logistics, and tailored advice, growing your business has never been easier.Join GiriToday and turn your creativity into global opportunities! 🌍✨ #SellWithGiriToday #AfricanEntrepreneurs #GlobalMarketplace"
        pathname="/sell"
        image="/img/man-artist.jpg"
      />
      <MainHeroSection />
      <WhyGiriToday />
      <HowItWorks />
      <TrackYourOrder />
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
