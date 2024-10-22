import React from 'react';
import { SignupButton } from '@/components/common/SignupButton';



interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

export const ConnectSellerHero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
}) => {
  const images = {
    backgroundHero: '/img/african-connect.png',
  };

  return (
    <header className="relative flex flex-col justify-center items-center px-8 py-8 w-full min-h-[480px] md:px-20 md:py-8">
      <img
        loading="lazy"
        src={images.backgroundHero}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col items-center max-w-4xl w-full">
        <div className="flex flex-col items-center w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-50">
            {title}
          </h1>
          <p className="mt-4 text-base md:text-lg font-medium leading-7 text-zinc-100 max-w-2xl">
            {subtitle}
          </p>
        </div>
        <div className="mt-4">
          <SignupButton buttonText={ctaText} />
        </div>
      </div>
    </header>
  );
};
