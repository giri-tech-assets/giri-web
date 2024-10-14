import React from 'react';
import { FeatureCard } from './FeatureCard';
import useGetVisitorType from '../../../hooks/useGetVisitorType';
import { Button } from '@/components/common';
import { SignupButton } from '@/components/common/SignupButton';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ContentType {
  headerIcon: string;
  headerTag: string;
  title: string;
  description: string;
  features: Feature[];
}

const buyerContent: ContentType = {
  headerIcon:
    'https://cdn.builder.io/api/v1/image/assets/TEMP/7df039c68128b09ff22e0a53cc481ef468043ee18deddeb1323aa75202840228?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
  headerTag: 'Features for Buyers',
  title: 'Why Shop on Giri?',
  description:
    'Let Giri’s AI-powered platform connect you to the perfect African products, tailored to your tastes and preferences.',
  features: [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/668307f3799a2b078193b68e673ef8ea50d7c61b56beb0f8ccefa49ecf0ea87c?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
      title: 'Personalized AI Recommendations',
      description:
        'Our AI technology learns what you love and matches you with unique African products you’ll adore, ensuring a curated shopping experience just for you.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b8154757a57e838102a0502fb291645757c45cb262eb223ce4377c9b0af3c57c?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
      title: 'Diverse Selection',
      description:
        'Explore a wide range of authentic African goods, from traditional crafts to modern creations, handpicked just for you.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/edca4ed99e7ed6ad353f3f038aaf381b5cd74fd06028c224a949992b8522e972?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
      title: 'Seamless Experience',
      description:
        'Enjoy an effortless shopping journey with secure payments, fast shipping, and personalized product matches.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d520ace12c1c6f7fe3f528c2855c68736d6d1ea41ce5e09242d7b1690bfcad45?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
      title: 'Support African Artisans',
      description:
        'Every purchase directly supports local African artisans and communities, fostering sustainable growth and cultural exchange.',
    },
  ],
};

const sellerContent: ContentType = {
  headerIcon:
    'https://cdn.builder.io/api/v1/image/assets/TEMP/7df039c68128b09ff22e0a53cc481ef468043ee18deddeb1323aa75202840228?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
  headerTag: 'Features for Sellers',
  title: 'Why Sell on Giri?',
  description:
    'Leverage Giri’s AI-driven platform to connect with buyers who love authentic African products, grow your business, and reach a global audience. Sell more, ship faster, earn more!.',
  features: [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/668307f3799a2b078193b68e673ef8ea50d7c61b56beb0f8ccefa49ecf0ea87c?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
      title: 'AI-Powered Buyer Matching',
      description:
        'Our AI technology helps match your products with buyers most likely to love them, increasing your chances of making a sale.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b8154757a57e838102a0502fb291645757c45cb262eb223ce4377c9b0af3c57c?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
      title: 'Global Reach',
      description:
        'Expand your business to an international audience, connecting with customers from around the world who are passionate about African culture.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/edca4ed99e7ed6ad353f3f038aaf381b5cd74fd06028c224a949992b8522e972?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
      title: 'Effortless Store Management',
      description:
        'Manage your inventory, orders, and customer interactions easily with our intuitive seller tools.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d520ace12c1c6f7fe3f528c2855c68736d6d1ea41ce5e09242d7b1690bfcad45?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
      title: 'Increased Visibility',
      description:
        'Benefit from increased exposure to a community eager to discover and purchase authentic African goods.',
    },
  ],
};

const styles = {
  section: 'flex flex-col',
  header: 'flex flex-col justify-center self-center max-w-full w-[748px]',
  headerInner:
    'flex flex-col justify-center items-center w-full max-md:max-w-full',
  headerTagContainer:
    'flex gap-5 items-center text-base font-medium leading-loose whitespace-nowrap text-neutral-900',
  headerTagIcon: 'object-contain shrink-0 self-stretch my-auto w-[65px]',
  headerTag:
    'gap-1 self-stretch px-4 py-1 my-auto bg-white border border-solid shadow border-zinc-200 rounded-[1000px]',
  title:
    'mt-3 text-5xl font-bold leading-none text-center text-gray-900 max-md:max-w-full max-md:text-4xl',
  description:
    'self-center mt-3.5 text-base leading-6 text-center text-gray-500 max-md:max-w-full',
  featuresContainer:
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-md:mt-10',
};

export const WhyGiriToday: React.FC = () => {
  const { visitorType } = useGetVisitorType();

  const isBuyer = visitorType === 'buyer';
  const content = isBuyer ? buyerContent : sellerContent;
  const ctaText = isBuyer ? 'Join our NewsLetter' : 'Join the waitlist';

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerTagContainer}>
            <img
              loading="lazy"
              src={content.headerIcon}
              alt=""
              className={styles.headerTagIcon}
            />
            <div className={styles.headerTag}>{content.headerTag}</div>
          </div>
          <h2 className={styles.title}>{content.title}</h2>
        </div>
        <p className={styles.description}>{content.description}</p>
      </header>
      <div className={styles.featuresContainer}>
        {content.features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};
