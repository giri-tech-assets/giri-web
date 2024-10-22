import { FeatureSection } from '../components/about-us/FeatureSection';
import { HeroSection } from '../components/about-us/HeroSection';
import { ImageGallery } from '../components/about-us/ImageGallery';
import { Newsletter } from '../components/about-us/Newsletter';
import { WhyGiriToday } from '../components/home-page/why-giri-today/WhyGiri';
import { Layout } from '../components/common/Layout';
import { HeroBackground } from '@/components/home-page/hero/Hero';
import { useGetPageImage } from '@/hooks/pages-queries/useGetPageImage';

export function AboutUsPage() {
  const { home: imageSrc } = useGetPageImage();
  return (
    <Layout>
      <main className="flex-grow flex flex-col gap-10">
        <HeroBackground
          image={imageSrc?.['home-page-ankara-background']?.src || ''}
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
