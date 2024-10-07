import React from 'react';

export const BookDemo: React.FC = () => {
  return (
    <button className="flex overflow-hidden gap-2 justify-center items-center px-7 py-4 mt-20 bg-amber-400 rounded-2xl shadow-[8px_24px_35px_rgba(253,195,46,0.15)] max-md:px-5 max-md:mt-10">
      <span className="self-stretch my-auto text-lg font-medium leading-loose text-violet-950">Book a Demo</span>
      <div className="flex overflow-hidden flex-col self-stretch my-auto max-w-[290px] w-[25px]">
        <div className="flex overflow-hidden flex-col justify-center items-center min-h-[24px] w-[25px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/15cecfc47078d1130b56f0cea083f4cbe22a7305f55b4f118aa969ebfac07e57?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e" alt="" className="object-contain w-full aspect-[1.04]" />
        </div>
      </div>
    </button>
  );
};

