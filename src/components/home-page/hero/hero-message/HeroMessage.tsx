import React, { useState, useEffect } from "react";
import Button from "@/components/common/Button";


const AnimatedText = () => {
  const phrases = [
    { static: "Giri Connects", animated: "African Artisans with Global Markets" },
    { static: "Giri Empowers", animated: "Local Sellers through AI Matching" },
    { static: "Giri Brings", animated: "Authentic African Products to You" },
    { static: "Giri Fosters", animated: "Sustainable African Craftsmanship" },
    { static: "Giri Bridges", animated: "Cultures through Creative Commerce" }
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(false);
      }, 500); // Half of the animation duration
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className="mt-4 text-6xl font-bold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
      <span className="text-slate-50">{phrases[currentPhraseIndex].static} </span>
      <span
        className={`
          inline-block text-amber-400
          transition-all duration-1000 ease-in-out
          ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
        `}
      >
        {phrases[currentPhraseIndex].animated}
      </span>
    </h1>
  );
};

const MainContent = () => (
  <section className="flex flex-col w-full text-slate-50 max-md:max-w-full">
    <AnimatedText />
    <p className="mt-4 text-xl leading-8 text-zinc-100 max-md:max-w-full">
      Giri's mission is connecting authentic local products with a global audience through AI-driven matching and sustainable practices.
    </p>
  </section>
);

export const HeroMessage = () => (
  <main className="flex flex-col justify-center max-w-[612px]">
    <MainContent />
    <Button text={'Join the wait list'} variant='accent' className="width-50px"/>
  </main>
);

export default HeroMessage;
