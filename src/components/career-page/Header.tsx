import React from 'react';
import { HeroBackground } from '../home-page/hero/Hero';

const careersHeaderConfig = {
  styles: {
    header:
      'flex flex-col justify-center self-center max-w-full text-base w-full mb-12 mt-10',
    container: 'flex flex-col justify-center items-center w-full',
    title:
      'text-5xl font-bold leading-tight text-center text-gray-900 mb-4 max-md:text-4xl',
    subtitle: 'text-xl text-center text-gray-600 max-w-2xl mx-auto',
  },
  content: {
    title: 'Join Our Mission to Empower Africa',
    subtitle:
      'Be part of the fastest-growing marketplace connecting Africa to the world.',
  },
};

export const CareersHeader: React.FC = () => {
  return (
    <header className={careersHeaderConfig.styles.header}>
      <div className={careersHeaderConfig.styles.container}>
        <h1 className={careersHeaderConfig.styles.title}>
          {careersHeaderConfig.content.title}
        </h1>
        <p className={careersHeaderConfig.styles.subtitle}>
          {careersHeaderConfig.content.subtitle}
        </p>
      </div>
    </header>
  );
};

const aboutGiriConfig = {
  styles: {
    section: 'bg-gray-50 py-16 mb-12',
    container: 'max-w-4xl mx-auto px-6',
    mainTitle: 'text-3xl font-bold mb-6 text-center text-gray-900',
    subTitle: 'text-2xl font-semibold mb-4 text-gray-800',
    paragraph: 'text-gray-600 mb-6',
  },
  content: {
    mainTitle: 'Who We Are',
    subTitle: 'About Giri',
    paragraphs: [
      'Giri is the fastest-growing marketplace connecting Africa to the world. We empower sellers from across Africa to showcase their unique products, crafts, and culture to a global audience, making it easier than ever for people around the world to discover and buy authentic African goods. From vibrant textiles to handcrafted art, Giri is building bridges between Africa and the rest of the world, celebrating our rich heritage.',
      'Our mission is to bring the spirit of Africa to every corner of the globe. We are not just a marketplace; we are a movement that elevates African creativity, innovation, and entrepreneurship. Join us in shaping the future of global trade—where Africa is at the center, sharing its heart with the world.',
    ],
  },
};

export const AboutGiri: React.FC = () => {
  return (
    <section className={aboutGiriConfig.styles.section}>
      <div className={aboutGiriConfig.styles.container}>
        <h2 className={aboutGiriConfig.styles.mainTitle}>
          {aboutGiriConfig.content.mainTitle}
        </h2>
        <h3 className={aboutGiriConfig.styles.subTitle}>
          {aboutGiriConfig.content.subTitle}
        </h3>
        {aboutGiriConfig.content.paragraphs.map((paragraph, index) => (
          <p key={index} className={aboutGiriConfig.styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
