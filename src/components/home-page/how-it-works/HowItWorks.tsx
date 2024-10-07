import React from 'react';
import { FeatureCard } from './FeatureCard';
import Button from '@/components/common/Button';

import Integrate from '@/assets/images/integrate.svg';
import Sell from '@/assets/images/sell.svg';
import Deliver from '@/assets/images/deliver.svg';
import AnimatedSvg from '@/components/common/AnimatedSvg';

interface Feature {
  imageSrc: any;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    imageSrc: <AnimatedSvg SvgComponent={Integrate as any} size={50} />,
    title: 'INTEGRATE',
    description:
      'We set up online stores for our sellers with products catalogs, each products tailored to users experience ranging from handmade to personalized items.',
  },
  {
    imageSrc: <AnimatedSvg SvgComponent={Sell as any} size={50} />,
    title: 'SELL',
    description:
      'We promote your products to customers globally making sure our buyers are reached via various platforms, payment methods are simplified to ensure seamless user experience.',
  },
  {
    imageSrc: <AnimatedSvg SvgComponent={Deliver as any} size={50} />,
    title: 'DELIVER',
    description:
      'All product Quality is strictly monitored and carefully packaged to ensure our buyers receive items in good condition.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <header className="flex flex-col justify-center max-w-full w-[748px]">
        <div className="flex flex-col justify-center items-center w-full max-md:max-w-full">
          <div className="flex gap-5 items-center text-base font-medium leading-loose whitespace-nowrap text-neutral-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5d7ab23f508c7b7dbf600b889d52134d0da53212998e591c8bb9593fc454cd5?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-[65px]"
            />
            <div className="gap-1 self-stretch px-4 py-1 my-auto bg-white border border-solid shadow border-zinc-200 rounded-[1000px]">
              Features
            </div>
          </div>
          <h1 className="mt-3 text-5xl font-bold leading-none text-center text-gray-900 max-md:max-w-full max-md:text-4xl">
            How It Works
          </h1>
        </div>
        <p className="self-center mt-3.5 text-base leading-6 text-center text-gray-500 max-md:max-w-full">
          At GiriToday, experience the essence of Africa through our curated
          selection, authentic products, and seamless shopping experience with
          ecofriendly materials to promote sustainability
        </p>
      </header>
      <div className="relative flex flex-col items-center self-stretch mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-start self-stretch w-full text-center max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none"></div>
      </div>
      <Button text={'Start Selling'} variant={'accent'}/>
    </section>
  );
};
