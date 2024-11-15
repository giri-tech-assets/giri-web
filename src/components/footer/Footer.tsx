import React from 'react';
import { PrivacyLinks } from './PrivacyLinks';
import { Address } from './Address';

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap gap-10 justify-between items-center px-8 py-5 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] max-md:px-5">
      <>
        <PrivacyLinks />
        <Address
          {...NigeriaAddress}
          className="text-gray-700 leading-relaxed"
        />
      </>
      {/* <LanguageCurrencySelector /> */}
    </footer>
  );
};


const NigeriaAddress = {
  street: 'Suit 1',
  suite: '126, Ogba Road',
  city: 'Agege',
  state: 'Lagos',
  country: 'Nigeria',
}
