import React from 'react';

const heroConfig = {
  styles: {
    section:
      'flex flex-col justify-center items-center self-center mt-20 max-w-full text-center text-slate-800 w-[764px] max-md:mt-10',
    heading: 'text-5xl font-bold max-md:max-w-full max-md:text-4xl',
    paragraph: 'mt-5 text-base max-md:max-w-full',
  },
  content: {
    heading:
      'Bringing Local Markets to Global Doorsteps – Discover Authentic African Goods, from Anywhere!',
    paragraph:
      'Giri serves as an e-commerce platform where global buyers can connect with local sellers. The idea is to make local African goods, Unique items, foods, clothing and African culture available for exporting to a global market audience. Regardless of where you are, Giritoday will meet you there.',
  },
};

export const HeroSection: React.FC = () => (
  <section className={heroConfig.styles.section}>
    <h1 className={heroConfig.styles.heading}>{heroConfig.content.heading}</h1>
    <p className={heroConfig.styles.paragraph}>
      {heroConfig.content.paragraph}
    </p>
  </section>
);
