import React from 'react';


interface  HeroBackgroundComponentProps {
  src: string;
  alt: string;
}

export const HeroBackground: React.FC<HeroBackgroundComponentProps> = ({ src, alt }) => {
  return (
    <div
      style={{
        maxWidth: 'none !important',
      }}
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain w-full aspect-[1.53] max-md:max-w-full"
      />
    </div>
  );
};
