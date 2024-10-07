import React from 'react';

export const Footer: React.FC = () => (
  <footer className="flex flex-col justify-center px-20 py-5 w-full bg-slate-800 max-md:px-5 max-md:max-w-full">
    <div className="flex flex-wrap gap-10 items-center max-md:mr-0.5 max-md:max-w-full">
      <nav className="flex gap-5 items-start self-stretch my-auto text-sm font-medium tracking-tight text-center text-white min-w-[240px]">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
        <a href="/faq">FAQs</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <div className="flex gap-2.5 items-start self-stretch my-auto">
        <a href="https://facebook.com" aria-label="Facebook">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f6e158ea63428bf9b136c6543bc1a4da1a308ed94fbd4b5421bbf3a56d3c0e5?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e" alt="" className="object-contain shrink-0 aspect-square fill-stone-300 w-[35px]" />
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ac983acb498f00c104e7d52ed248f64ea7336cf6f6e63c2f4382a09f8fbe18d?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e" alt="" className="object-contain shrink-0 aspect-square fill-stone-300 w-[35px]" />
        </a>
      </div>
    </div>
    <div className="flex shrink-0 mt-7 h-px bg-stone-300 bg-opacity-50 max-md:max-w-full" />
    <div className="flex flex-wrap gap-10 items-start mt-6 text-sm text-white max-md:max-w-full">
      <div>Copyrights© 2023 All Rights Reserved</div>
      <div className="flex gap-4 items-center font-medium capitalize min-w-[240px]">
        <a href="/privacy" className="self-stretch my-auto">Privacy Policy</a>
        <a href="/terms" className="self-stretch my-auto">Terms & Conditions</a>
      </div>
    </div>
  </footer>
);
