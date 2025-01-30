import React from 'react';

const heroConfig = {
  styles: {
    section: `flex flex-col justify-center items-center self-center mt-20 max-w-full text-center text-slate-800 w-[764px] max-md:mt-10`,
    heading: `text-5xl font-bold max-md:max-w-full max-md:text-4xl`,
    paragraph: `mt-5 text-base max-md:max-w-full`,
  },
  content: {
    heading: `Bringing Local Markets to Global Doorsteps – Discover Authentic African Goods, from Anywhere!`,
    paragraph: `Giri is an African E-Commerce Platform connecting global buyers with local African sellers! We bridge the gap between local African artisans and the global market, showcasing unique goods, specialty foods, vibrant clothing, and rich cultural heritage. Wherever you are in the world, Giri brings Africa to you, making it easy to discover and purchase authentic African products and experience the beauty of African culture`,
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
