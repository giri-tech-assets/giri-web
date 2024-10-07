import React from 'react';
import {FeatureCard} from './FeatureCard';


interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/668307f3799a2b078193b68e673ef8ea50d7c61b56beb0f8ccefa49ecf0ea87c?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
    title: "Seamless Shopping Experience",
    description: "Experience convenience like never before with GiriToday. Our user-friendly interface, secure payment options, and worldwide shipping make shopping a breeze. Whether you're browsing from your desktop or mobile device, GiriToday ensures a seamless shopping experience from start to finish."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8154757a57e838102a0502fb291645757c45cb262eb223ce4377c9b0af3c57c?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
    title: "Diverse Selection",
    description: "Discover a world of diversity at GiriToday. Our platform offers a vast selection of handpicked goods, ranging from traditional crafts to contemporary creations. With over 300 quality traders/stores, you'll find something unique to suit every taste and style."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/edca4ed99e7ed6ad353f3f038aaf381b5cd74fd06028c224a949992b8522e972?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
    title: "Authenticity Guaranteed",
    description: "At GiriToday, authenticity is our top priority. We meticulously verify each product and trader to ensure that you receive only genuine African treasures. Shop with confidence, knowing that every purchase supports local artisans and communities."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d520ace12c1c6f7fe3f528c2855c68736d6d1ea41ce5e09242d7b1690bfcad45?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
    title: "Sustainability",
    description: "Promoting an Eco-conscious environment by encouraging our artisans to use locally sourced, up cycled and repurposed materials. Providing resources and workshops to artisans to learn sustainable practices."
  }
];

export const WhyGiriToday: React.FC = () => {
  return (
    <section className="flex flex-col">
      <header className="flex flex-col justify-center self-center max-w-full w-[748px]">
        <div className="flex flex-col justify-center items-center w-full max-md:max-w-full">
          <div className="flex gap-5 items-center text-base font-medium leading-loose whitespace-nowrap text-neutral-900">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7df039c68128b09ff22e0a53cc481ef468043ee18deddeb1323aa75202840228?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e" alt="" className="object-contain shrink-0 self-stretch my-auto w-[65px]" />
            <div className="gap-1 self-stretch px-4 py-1 my-auto bg-white border border-solid shadow border-zinc-200 rounded-[1000px]">
              Features
            </div>
          </div>
          <h2 className="mt-3 text-5xl font-bold leading-none text-center text-gray-900 max-md:max-w-full max-md:text-4xl">
            Why GiriToday?
          </h2>
        </div>
        <p className="self-center mt-3.5 text-base leading-6 text-center text-gray-500 max-md:max-w-full">
          At GiriToday, experience the essence of Africa through our curated selection, authentic products, and seamless shopping experience with ecofriendly materials to promote sustainability
        </p>
      </header>
      <div className="flex flex-wrap gap-2 mt-12 w-full max-md:mt-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

