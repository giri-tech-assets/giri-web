import React, { useState } from 'react';
import CustomLink from '../CustomLink';
import useGetVisitorType, { VisitorType } from '../../hooks/useGetVisitorType';
import { useLocation } from '@reach/router';

const headerConfig = {
  styles: {
    header: 'w-full mx-auto px-4 py-4 relative bg-[#020089]',
    backgroundImage: {
      backgroundImage: `url('https://raw.githubusercontent.com/giri-tech-assets/web-images/f6655552e6d92f0a4ccf05d5c85be16d2eaffb53/african-pattern.svg')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    closeIcon: 'w-6 h-6 text-gray-800 absolute top-4 right-4',
    headerContent:
      'flex justify-between items-center max-w-7xl mx-auto relative z-10',
    logo: 'object-contain w-[50px] h-[50px] md:w-[70px] md:h-[70px]',
    desktopNav: 'hidden md:flex items-center space-x-8',
    mobileMenuButton: 'md:hidden z-50',
    mobileMenu:
      'fixed inset-y-0 right-0 w-2/3 bg-white shadow-lg z-40 transition-transform transform ease-in-out duration-300',
    mobileMenuContent: 'flex flex-col items-start p-8 space-y-6 mt-16',
    navItem: 'hover:text-amber-400 transition-colors relative z-10',
    activeNavItem: 'text-amber-400 font-bold',
    contactButton:
      'inline-block px-4 py-2 text-sm font-semibold text-center bg-amber-400 rounded-lg shadow-md text-violet-950 hover:bg-amber-500 transition-colors',
  },
  logo: {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0ef6a459e7c7a66ba196beea2188914c91890feca80f09279d1f0467f591bc29?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
    alt: 'Company Logo',
  },
  contactButton: {
    text: 'Contact Us',
    link: '/#newsletter',
  },
};

export type HeaderProps = {
  type?: 'home' | 'others';
};

export const Header: React.FC<HeaderProps> = ({ type }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { styles } = headerConfig;

  return (
    <header className={styles.header}>
      <div className="absolute inset-0 z-0" style={styles.backgroundImage} />
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.desktopNav}>
          <Navigation />
          <ContactButton />
        </div>
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <HamburgerIcon />
        </button>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.closeIcon}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
          <div className={styles.mobileMenuContent}>
            <MobileNavigation setIsMenuOpen={setIsMenuOpen} />
            <ContactButton />
          </div>
        </div>
      )}
    </header>
  );
};

const Logo: React.FC = () => {
  const { logo, styles } = headerConfig;
  return (
    <CustomLink to="/" aria-label="Go to home page">
      <img
        loading="lazy"
        src={logo.src}
        alt={logo.alt}
        className={styles.logo}
      />
    </CustomLink>
  );
};

const Navigation: React.FC = () => {
  const { visitorType } = useGetVisitorType();
  const location = useLocation();
  const faqLink = visitorType === VisitorType.Buyer ? '/shop#faq' : '/sell#faq';
  const homeLink = visitorType === VisitorType.Buyer ? '/shop' : '/sell';

  const navigationItems = [
    { title: 'Home', link: homeLink },
    { title: 'About Us', link: '/about-us' },
    { title: 'Careers', link: '/careers' },
    { title: 'FAQ', link: faqLink },
  ];
  const { styles } = headerConfig;

  return (
    <nav className="hidden md:flex space-x-8 items-center text-base text-white">
      {navigationItems.map(({ title, link }) => {
        return (
          <CustomLink
            key={title}
            to={link}
            className={`${styles.navItem} ${
              location.pathname.slice(0, -1) === link
                ? styles.activeNavItem
                : ''
            }`}
          >
            {title}
          </CustomLink>
        );
      })}
    </nav>
  );
};

const MobileNavigation: React.FC<{
  setIsMenuOpen: (isOpen: boolean) => void;
}> = ({ setIsMenuOpen }) => {
  const { styles } = headerConfig;
  const { visitorType } = useGetVisitorType();
  const location = useLocation();
  const faqLink = visitorType === VisitorType.Buyer ? '/shop#faq' : '/sell#faq';
  const homeLink = visitorType === VisitorType.Buyer ? '/shop' : '/sell';

  const navigationItems = [
    { title: 'Home', link: homeLink },
    { title: 'About Us', link: '/about-us' },
    { title: 'Careers', link: '/careers' },
    { title: 'FAQ', link: faqLink },
  ];

  return (
    <nav className="flex flex-col space-y-6 text-base text-gray-800">
      {navigationItems.map(({ title, link }) => {
        console.log(
          'location.pathname',
          location.pathname,
          link,
          location.pathname.slice(0, -1),
        );
        return (
          <CustomLink
            key={title}
            to={link}
            className={`${styles.navItem} ${
              location.pathname.slice(0, -1) === link
                ? styles.activeNavItem
                : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {title}
          </CustomLink>
        );
      })}
    </nav>
  );
};
const ContactButton: React.FC = () => {
  const { styles } = headerConfig;
  const { visitorType } = useGetVisitorType();
  const text =
    visitorType === VisitorType.Buyer ? 'Sell on Giri' : 'Shop on Giri';
  const link = visitorType === VisitorType.Buyer ? '/sell' : '/shop';

  return (
    <a href={link} className={styles.contactButton}>
      {text}
    </a>
  );
};

const HamburgerIcon: React.FC = () => (
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

const CloseIcon: React.FC = () => (
  <svg
    className="w-6 h-6"
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

export default Header;

