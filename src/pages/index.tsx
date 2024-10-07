import { ConnectSellerHero } from '@/components/home-page/connect-with-sellers/Hero';
import { HowItWorks } from '@/components/home-page/how-it-works/HowItWorks';
import { MainHeroSection } from '@/components/home-page/hero/Hero';
import { WhyGiriToday } from '@/components/home-page/why-giri-today/WhyGiri';
import { Layout } from '@/components/common';
import FAQAccordion from '@/components/faq';
import { Newsletter } from '@/components/about-us/Newsletter';

export default function () {
  return (
      <Layout>
      <MainHeroSection />
        <WhyGiriToday />
        <HowItWorks />
        <FAQAccordion />
        <ConnectSellerHero
          title="CONNECTING AFRICAN SELLERS TO GLOBAL AUDIENCE"
          subtitle='"At giritoday, we make shopping for arts , crafts , locally made products easy, fast, reliable and seamless for our global audience "'
          ctaText="Invest in Giri"
        />
        <Newsletter />
      </Layout>
  );
}
