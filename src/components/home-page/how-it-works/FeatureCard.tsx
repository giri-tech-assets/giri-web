import React from 'react';

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col grow shrink items-center min-w-[240px] w-[272px]">
      <img
        src={imageSrc}
        alt="what-we-do"
        loading="lazy"
        width="50"
        height="50"
        className="w-[50px] h-[50px]"
      />
      <div className="flex flex-col items-center mt-12 max-w-full w-[330px] max-md:mt-10">
        <h2 className="text-xl font-bold leading-tight text-neutral-800">
          {title}
        </h2>
        <p className="mt-3 text-base leading-6 text-gray-500">{description}</p>
      </div>
    </article>
  );
};
