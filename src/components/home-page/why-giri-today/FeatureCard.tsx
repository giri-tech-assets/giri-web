import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col justify-center p-6 rounded-3xl bg-slate-50 shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:bg-white cursor-pointer">
    <div className="flex flex-col w-full">
      <div className="flex overflow-hidden gap-2.5 justify-center items-center p-6 border-solid bg-violet-950 bg-opacity-10 border-[5px] border-white border-opacity-30 h-[90px] w-[90px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110">
        <img loading="lazy" src={icon} alt="" className="object-contain aspect-square w-[45px]" />
      </div>
      <div className="flex flex-col mt-7 w-full">
        <h3 className="text-xl font-semibold leading-7 text-neutral-800 transition-colors duration-300 ease-in-out hover:text-[#020089]">{title}</h3>
        <p className="mt-3.5 text-sm leading-5 text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-700">{description}</p>
      </div>
    </div>
  </article>
  );
};
