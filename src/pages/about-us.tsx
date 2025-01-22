import { FeatureSection } from '../components/about-us/FeatureSection';
import { HeroSection } from '../components/about-us/HeroSection';
import { ImageGallery } from '../components/about-us/ImageGallery';
import { Newsletter } from '../components/about-us/Newsletter';
import { WhyGiriToday } from '../components/home-page/why-giri-today/WhyGiri';
import { Layout } from '../components/common/Layout';
import { HeroBackground } from '@/components/home-page/hero/Hero';
import { useGetAllImages } from '@/hooks/useGetAllImages';

export function AboutUsPage() {
  const images = useGetAllImages();
  return (
    <Layout>
      <main className="flex-grow flex flex-col gap-10">
        <HeroBackground
          image={images?.[`home-page-ankara-background`]?.url || ``}
        />
        <HeroSection />
        <ImageGallery />
        <FeatureSection />
        <WhyGiriToday />
        <Newsletter />
      </main>
    </Layout>
  );
}

export default AboutUsPage;
