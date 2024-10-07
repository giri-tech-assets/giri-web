import React from 'react';

export const Newsletter: React.FC = () => (
  <section id={'newsletter'} className="flex overflow-hidden flex-col justify-center items-center px-16 py-20 w-full bg-amber-400 max-md:px-5 max-md:max-w-full">
    <div className="flex flex-wrap gap-10 justify-center items-start max-md:max-w-full">
      <div className="flex flex-col justify-center items-start text-center min-w-[240px] text-slate-800">
        <h2 className="text-3xl font-bold tracking-tight leading-none">Join the waitlist</h2>
        <p className="mt-1.5 text-base font-medium tracking-tight leading-loose">
          Be the first to know when we launch the future of African marketPlace!
        </p>
      </div>
      <form className="flex flex-col rounded-none min-w-[240px] w-[532px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between py-2.5 pr-2.5 pl-5 w-full bg-white rounded-lg max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-2 items-center my-auto text-base font-medium tracking-tight text-neutral-500">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7628973a3e6b543d87cbd46d4e5d847a2feb8d69b8feeb8acbfc3434a691dc?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e" alt="" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
            <label htmlFor="emailInput" className="sr-only">Enter email address</label>
            <input
              type="email"
              id="emailInput"
              placeholder="Enter email address..."
              className="bg-transparent border-none focus:outline-none"
              aria-label="Enter email address"
            />
          </div>
          <button type="submit" className="px-7 py-4 text-sm font-bold tracking-tight leading-none text-white rounded bg-violet-950 max-md:px-5">
            Join Now
          </button>
        </div>
      </form>
    </div>
  </section>
);

