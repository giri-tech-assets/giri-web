import { useState, useEffect } from 'react';
import Button from '../../../common/Button';

const heroConfig = {
  styles: {
    main: `flex flex-col justify-center max-w-[612px]`,
    section: `flex flex-col w-full text-slate-50 max-md:max-w-full`,
    h1: `mt-4 text-6xl font-bold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]`,
    staticText: `text-slate-50`,
    animatedText: `
      inline-block text-amber-400
      transition-all duration-1000 ease-in-out
    `,
    animatedTextHidden: `opacity-0 translate-y-4`,
    animatedTextVisible: `opacity-100 translate-y-0`,
    paragraph: `mt-4 text-xl leading-8 text-zinc-100 max-md:max-w-full`,
  },
  phrases: [
    {
      static: `Giri Connects`,
      animated: `African Artisans with Global Markets`,
    },
    { static: `Giri Empowers`, animated: `Local Sellers through AI Matching` },
    { static: `Giri Brings`, animated: `Authentic African Products to You` },
    { static: `Giri Fosters`, animated: `Sustainable African Craftsmanship` },
    { static: `Giri Bridges`, animated: `Cultures through Creative Commerce` },
  ],
  missionStatement: `Giri's mission is connecting authentic local products with a global audience through AI-driven matching and sustainable practices`,
  button: {
    text: `Join the waitlist`,
    variant: `accent`,
    className: `width-50px`,
  },
  animationConfig: {
    interval: 20000,
    duration: 1500,
  },
  slogan: {
    seller: `With Giri you sell the product and WE TELL THE STORY!`,
    buyer: `Discover the stories behind the products you love`,
  },
};

const AnimatedText = () => {
  const { phrases, styles, animationConfig } = heroConfig;
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(false);
      }, animationConfig.duration / 2);
    }, animationConfig.interval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className={styles.h1}>
      <span className={styles.staticText}>
        {phrases[currentPhraseIndex].static}
        {` `}
      </span>
      <span
        className={`
          ${styles.animatedText}
          ${
            isAnimating ? styles.animatedTextHidden : styles.animatedTextVisible
          }
        `}
      >
        {phrases[currentPhraseIndex].animated}
      </span>
    </h1>
  );
};

const MainContent = () => {
  const { styles, missionStatement } = heroConfig;
  return (
    <section className={styles.section}>
      <AnimatedText />
      <p className={styles.paragraph}>{missionStatement}</p>
    </section>
  );
};

export const HeroMessage = () => {
  const { styles, button } = heroConfig;
  return (
    <main className={styles.main}>
      <MainContent />
      <div></div> {}
      <Button
        text={button.text}
        variant={button.variant as any}
        className={button.className}
      />
    </main>
  );
};

export default HeroMessage;
