import React from 'react';
import { AboutGiri, CareersHeader } from '../components/career-page/Header';
import InfoCard from '../components/career-page/InfoCard';
import { Layout } from '../components/common/Layout';
import { OpenRolesComponent } from '../components/career-page/OpenRoles';
import { SEO } from '@/components/seo/seo';

interface CareerPageProps {}

const CareerPage: React.FC<CareerPageProps> = () => {
  const infoCards = [
    {
      imageSrc: `https://cdn.builder.io/api/v1/image/assets/TEMP/261964a154516d5a2391cfd174dd895726a06794a6a83ac3ad17889eb1d2ba4f?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e`,
      title: `How we work at Giri`,
      description: `Our work model enhances flexibility, impact, sustainability and work life balance.`,
    },
    {
      imageSrc: `https://cdn.builder.io/api/v1/image/assets/TEMP/27745129630096b0ecca6a83eabdfc869daacffe28d1a042b43e0ab23eceb00b?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e`,
      title: `Diversity & Inclusion`,
      description: `We encourage an environment where our employess feel safe, grow and make impact.`,
    },
    {
      imageSrc: `https://cdn.builder.io/api/v1/image/assets/TEMP/4dc1c9627ee3426508bb8edf1dee929759739ded24cc0af912feebd633997500?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e`,
      title: `Economic and Environmental Impact`,
      description: `Promoting an eco-conscious environment, we advocate for sustainability amount our users both sells and buyers.`,
    },
  ];

  return (
    <Layout>
      <SEO
        title="GiriToday Careers - Join the winning team!"
        description="Do your best works. Empower Africans small business owners to scale their crafts"
        pathname="/careers"
        image="/img/african-connect.png"
      />
      <CareersHeader />
      <AboutGiri />
      <section className="flex flex-wrap gap-2 mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {infoCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </section>
      <section>
        <OpenRolesComponent />
      </section>
    </Layout>
  );
};

export default CareerPage;
