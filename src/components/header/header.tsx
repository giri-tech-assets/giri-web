import React, { useState } from 'react';
import CustomLink from '../CustomLink';
import Background from './african-pattern.svg';
import { Link } from 'gatsby';

const navigationItems = [
  { title: 'Home', link: '/' },
  { title: 'About Us', link: '/about-us' },
  { title: 'Careers', link: '/careers' },
  // { title: 'Blog', link: '/blog' },
  { title: 'FAQ', link: '/#faq' },
];

export type HeaderProps = {
  type?: 'home' | 'others';
};

export const Header: React.FC<HeaderProps> = ({ type }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full mx-auto px-4 py-4 relative bg-[#020089]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="flex justify-between items-center max-w-7xl mx-auto relative z-10">
        <Logo />
        <div className="hidden md:flex items-center space-x-8">
          <Navigation />
          <ContactButton />
        </div>
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-2/3 bg-white shadow-lg z-40 transition-transform transform ease-in-out duration-300">
          <div className="flex flex-col items-start p-8 space-y-6 mt-16">
            <MobileNavigation setIsMenuOpen={setIsMenuOpen} />
            <ContactButton />
          </div>
        </div>
      )}
    </header>
  );
};

const Logo: React.FC = () => {
  return (
    <Link to="/" aria-label="Go to home page">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef6a459e7c7a66ba196beea2188914c91890feca80f09279d1f0467f591bc29?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e"
        alt="Company Logo"
        className="object-contain w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
      />
    </Link>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav className="hidden md:flex space-x-8 items-center text-base text-white">
      {navigationItems.map(({ title, link }) => (
        <CustomLink
          key={title}
          to={link}
          className="hover:text-amber-400 transition-colors relative z-10"
        >
          {title}
        </CustomLink>
      ))}
    </nav>
  );
};

const MobileNavigation: React.FC<{ setIsMenuOpen: (isOpen: boolean) => void }> = ({ setIsMenuOpen }) => {
  return (
    <nav className="flex flex-col space-y-6 text-base text-gray-800">
      {navigationItems.map(({ title, link }) => (
        <CustomLink
          key={title}
          to={link}
          className="hover:text-amber-400 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {title}
        </CustomLink>
      ))}
    </nav>
  );
};

const ContactButton: React.FC = () => {
  return (
    <a
      href="/#newsletter"
      className="inline-block px-4 py-2 text-sm font-semibold text-center bg-amber-400 rounded-lg shadow-md text-violet-950 hover:bg-amber-500 transition-colors"
    >
      Contact Us
    </a>
  );
};

const HamburgerIcon: React.FC = () => {
  return (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  );
};

const CloseIcon: React.FC = () => {
  return (
    <svg
      className="w-6 h-6 text-gray-800"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
};

export default Header;
