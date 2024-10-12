import Button from '../../common/Button';
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

export const ConnectSellerHero: React.FC<HeroProps> = ({ title, subtitle, ctaText }) => {
  return (
    <header className="relative flex flex-col justify-center items-center px-8 py-8 w-full min-h-[480px] md:px-20 md:py-8">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32c3b1674a6dd08f597de233dbf6053c607eafcc68089ce704873fbcb68ee6d7?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e"
        alt=""
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
        <Button text={ctaText} variant={'accent'} />
      </div>
    </header>
  );
};

