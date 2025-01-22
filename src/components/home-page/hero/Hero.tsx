import React, { useState, useEffect } from 'react';

import useGetVisitorType, { VisitorType } from '@/hooks/useGetVisitorType';
import { SignupButton } from '@/components/common/SignupButton';
import { useGetPageImage } from '@/hooks/pages-queries/useGetPageImage';

interface HeroConfigStyles {
  wrapper: string;
  section: string;
  content: string;
  container: string;
  flexWrapper: string;
  halfWidth: string;
  imageWrapper: string;
  image: string;
  main: string;
  messageSection: string;
  h1: string;
  staticText: string;
  animatedText: string;
  animatedTextHidden: string;
  animatedTextVisible: string;
  paragraph: string;
}

interface HeroConfigBackground {
  className: string;
  style: React.CSSProperties;
}

interface HeroConfigPhrase {
  static: string;
  animated: string;
}

interface HeroConfigButton {
  text: string;
  variant: string;
  className: string;
}

interface HeroConfigAnimationConfig {
  interval: number;
  textDuration: number;
  imageDelay: number;
  imageFadeDuration: number;
}

interface HeroConfig {
  styles: HeroConfigStyles;
  background: HeroConfigBackground;
  phrases: {
    seller: HeroConfigPhrase[];
    buyer: HeroConfigPhrase[];
  };
  missionStatement: {
    seller: string;
    buyer: string;
  };
  button: {
    seller: HeroConfigButton;
    buyer: HeroConfigButton;
  };
  animationConfig: HeroConfigAnimationConfig;
}

const heroConfig: HeroConfig = {
  styles: {
    wrapper: `relative w-screen left-1/2 right-1/2 -mx-[50vw]`,
    section: `relative w-full overflow-hidden bg-[#020089] pb-20 pt-4 md:pt-8 px-5 min-h-[50vh] flex items-center`,
    content: `relative  w-full flex items-center`,
    container: `container mx-auto px-4 `,
    flexWrapper: `flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch w-full `,
    halfWidth: `w-full lg:w-1/2 flex-shrink-0`,
    imageWrapper: `w-full lg:w-1/2 flex-shrink-0 flex justify-center items-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[600px]`, // Updated for responsiveness
    image: `w-full h-full relative rounded-3xl overflow-hidden`, // Removed max-h constraint
    main: `flex flex-col justify-center max-w-[612px]`,
    messageSection: `flex flex-col w-full text-slate-50 max-md:max-w-full`,
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
  background: {
    className: `absolute inset-0 z-0`,
    style: {
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center`,
      backgroundSize: `cover`,
    },
  },
  phrases: {
    seller: [
      { static: `Giri Connects`, animated: `You with Global Markets` },
      {
        static: `Giri Empowers`,
        animated: `Your Business with AI Powered Buyer-Matching`,
      },
      { static: `Giri Showcases`, animated: `Your Authentic African Products` },
      {
        static: `Sell More`,
        animated: `Ship Faster, Earn Bigger, Grow Your Business`,
      },
    ],
    buyer: [
      {
        static: ``,
        animated: `Discover the stories behind the products you love!`,
      },
      { static: ``, animated: `Shop like a local!` },
      {
        static: `Affordable`,
        animated: `Authentic African products delivered to You!`,
      },
      { static: `Support`, animated: `Sustainable African Craftsmanship` },
    ],
  },
  missionStatement: {
    seller: `Join Giri! Discover how to sell to a global audience. You sell the product, We tell the story!`,
    buyer: `Enjoy the best shopping experience for authentic African products with Giri—connecting you to local artisans and delivering cultural treasures right to your doorstep.`,
  },
  button: {
    seller: {
      text: `Start Selling on Giri`,
      variant: `accent`,
      className: `width-50px`,
    },
    buyer: {
      text: `Join our newsletter`,
      variant: `accent`,
      className: `width-50px`,
    },
  },
  animationConfig: {
    interval: 8000,
    textDuration: 100,
    imageDelay: 100,
    imageFadeDuration: 500,
  },
};

interface HeroBackgroundProps {
  image: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ image }) => {
  const { background } = heroConfig;
  const backgroundStyle: React.CSSProperties = {
    ...background.style,
    backgroundImage: `url('${image}')`,
  };
  return <div className={background.className} style={backgroundStyle} />;
};

interface AnimatedTextProps {
  onPhraseChange: (index: number) => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ onPhraseChange }) => {
  const { phrases, styles, animationConfig } = heroConfig;
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const { visitorType } = useGetVisitorType();
  const phrasesSelector =
    visitorType === VisitorType.Seller ? phrases.seller : phrases.buyer;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        const newIndex = (currentPhraseIndex + 1) % phrases.seller.length;
        setCurrentPhraseIndex(newIndex);
        onPhraseChange(newIndex);
        setIsAnimating(false);
      }, animationConfig.textDuration / 2);
    }, animationConfig.interval);

    return () => clearInterval(intervalId);
  }, [
    animationConfig.interval,
    animationConfig.textDuration,
    currentPhraseIndex,
    onPhraseChange,
    phrases.seller.length,
  ]);

  return (
    <h1 className={styles.h1}>
      <span className={styles.staticText}>
        {phrasesSelector[currentPhraseIndex].static}
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
        {phrasesSelector[currentPhraseIndex].animated}
      </span>
    </h1>
  );
};

interface MainContentProps {
  onPhraseChange: (index: number) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onPhraseChange }) => {
  const { styles } = heroConfig;
  const { visitorType } = useGetVisitorType();
  const missionStatement =
    visitorType === VisitorType.Seller
      ? heroConfig.missionStatement.seller
      : heroConfig.missionStatement.buyer;
  const button =
    visitorType === VisitorType.Seller
      ? heroConfig.button.seller
      : heroConfig.button.buyer;

  return (
    <section className={styles.messageSection}>
      <AnimatedText onPhraseChange={onPhraseChange} />
      <p className={styles.paragraph}>{missionStatement}</p>
      <div className="mt-6">
        <SignupButton
          buttonText={button.text}
          inputPlaceholder={`Email Address`}
          shouldUseModal={true}
          submittedText="Thank you for signing up!"
        />
      </div>
    </section>
  );
};

export const MainHeroSection: React.FC = () => {
  const { styles, animationConfig } = heroConfig;
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [nextImageIndex, setNextImageIndex] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const { visitorType } = useGetVisitorType();

  const sellerImageSelector = [
    `man-artist`,
    `women-clay`,
    `local-artisans`,
    `happy-seller`,
  ];
  const buyerImageSelector = [
    `shopping-received-happy`,
    `shop-like-a-local`,
    `crafts-shoes`,
    `spice-shop`,
  ];
  const imagesSelector: string[] =
    visitorType === VisitorType.Seller
      ? sellerImageSelector
      : buyerImageSelector;

  const handlePhraseChange = (newIndex: number) => {
    setIsTransitioning(true);
    setNextImageIndex(newIndex % imagesSelector.length);

    setTimeout(() => {
      setCurrentImageIndex(newIndex % imagesSelector.length);
      setIsTransitioning(false);
    }, animationConfig.imageFadeDuration);
  };

  const { home: imageSrc } = useGetPageImage();

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <HeroBackground
          image={imageSrc?.[`home-page-ankara-background`]?.src || ``}
        />
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.flexWrapper}>
              <div className={styles.halfWidth}>
                <MainContent onPhraseChange={handlePhraseChange} />
              </div>
              <div className={styles.imageWrapper}>
                <div className={`${styles.image}`}>
                  <img
                    src={
                      imageSrc?.[imagesSelector[currentImageIndex]]?.src || ``
                    }
                    alt={`Hero image ${currentImageIndex + 1}`}
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full max-h-[600px] object-cover transition-opacity duration-1000"
                    style={{ opacity: isTransitioning ? 0 : 1 }}
                  />
                  <img
                    src={imageSrc?.[imagesSelector[nextImageIndex]]?.src || ``}
                    alt={`Hero image ${nextImageIndex + 1}`}
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full max-h-[600px] object-cover transition-opacity duration-1000"
                    style={{ opacity: isTransitioning ? 1 : 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
