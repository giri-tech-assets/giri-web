import React from 'react';
import BrotherPorter from '@/assets/images/brother-porter.svg';
import ShoppingLadies from '@/assets/images/shopping-ladies.svg';



interface FeatureProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: any;
  imageAlt: string;
  reverse?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ title, description, buttonText, imageSrc, imageAlt, reverse = false }) => (
  <div className={`flex w-full ${reverse ? 'flex-row-reverse' : 'flex-row'} gap-8 mb-20 max-md:flex-col`}>
    <div className="w-1/2 max-md:w-full">
      <div className="object-contain w-full aspect-[1.1]" >
      {imageSrc}
      </div>

    </div>
    <div className="flex flex-col justify-center w-1/2 max-md:w-full">
      <h2 className="text-3xl font-bold text-slate-800 mb-2.5">{title}</h2>
      <p className="text-base text-slate-800 mb-8">{description}</p>
      <button className="gap-2.5 self-start px-5 py-4 text-base font-semibold text-white rounded-lg bg-blue-950 min-h-[50px]">
        {buttonText}
      </button>
    </div>
  </div>
);

export const FeatureSection: React.FC = () => (
  <section className="mt-44 w-full max-w-[1281px] mx-auto px-4 max-md:mt-10">
    <div className="flex flex-col">
    <Feature
        title="For Sellers: Showcase Your Creativity – Reach Buyers Around the Globe!"
        description="Expand your reach and grow your business by showcasing your products to a global audience. GiriToday offers easy-to-use tools, marketing support, and a community that values creativity and craftsmanship."
        buttonText="Start selling now"
        imageSrc={<ShoppingLadies/>}
        imageAlt="African seller showcase"
        reverse
      />
      <Feature
        title="For Buyers: Shop Authentic, From Africa's Markets to Your Doorstep"
        description="Explore a marketplace filled with unique products that tell stories from different cultures and regions. From handcrafted goods to local delicacies, every item is a discovery waiting to be made."
        buttonText="Start shopping now"
        imageSrc={<BrotherPorter/>}
        imageAlt="African marketplace showcase"
      />
    </div>
  </section>
);
