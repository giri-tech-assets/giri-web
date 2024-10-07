import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col flex-1 shrink justify-center p-6 rounded-3xl basis-0 bg-slate-50 min-w-[240px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:bg-white max-md:px-5 cursor-pointer">
      <div className="flex flex-col w-full">
        <div className="flex overflow-hidden gap-2.5 justify-center items-center pr-6 pl-6 border-solid bg-violet-950 bg-opacity-10 border-[5px] border-white border-opacity-30 h-[90px] min-h-[90px] rounded-[900px] w-[90px] max-md:px-5 transition-transform duration-300 ease-in-out hover:scale-110">
          <img loading="lazy" src={icon} alt="" className="object-contain self-stretch my-auto aspect-square w-[45px]" />
        </div>
        <div className="flex flex-col mt-7 w-full">
          <div className="flex flex-col w-full">
            <h3 className="text-xl font-semibold leading-7 text-neutral-800 transition-colors duration-300 ease-in-out hover:text-[#020089]">{title}</h3>
            <p className="mt-3.5 text-sm leading-5 text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
