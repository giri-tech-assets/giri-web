import React from 'react';

export const LanguageCurrencySelector: React.FC = () => {
  return (
    <div className="flex items-start self-stretch my-auto whitespace-nowrap text-zinc-400">
      <div className="flex flex-col w-[98px]">
        <div className="flex flex-col justify-center px-2.5 py-3.5 w-full bg-white rounded-xl">
          <div className="flex gap-1.5 items-start">
            <div className="text-lg leading-none text-center"></div>
            <button className="text-sm font-semibold tracking-normal">
              English
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[74px]">
        <div className="flex flex-col justify-center px-2 py-3.5 w-full bg-white rounded-xl">
          <div className="flex gap-1.5 items-start">
            <div className="text-lg leading-none text-center"></div>
            <button className="text-sm font-semibold tracking-normal">USD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

