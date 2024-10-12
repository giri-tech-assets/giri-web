import React from 'react';

const footerConfig = {
  navLinks: [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/blog", text: "Blog" },
    { href: "/careers", text: "Careers" },
    { href: "/faq", text: "FAQs" },
    { href: "/contact", text: "Contact Us" },
  ],

  socialLinks: [
    {
      href: "https://facebook.com",
      ariaLabel: "Facebook",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f6e158ea63428bf9b136c6543bc1a4da1a308ed94fbd4b5421bbf3a56d3c0e5?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
    },
    {
      href: "https://twitter.com",
      ariaLabel: "Twitter",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ac983acb498f00c104e7d52ed248f64ea7336cf6f6e63c2f4382a09f8fbe18d?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e",
    },
  ],

  legalLinks: [
    { href: "/privacy", text: "Privacy Policy" },
    { href: "/terms", text: "Terms & Conditions" },
  ],

  styles: {
    footer: "flex flex-col justify-center px-20 py-5 w-full bg-slate-800 max-md:px-5 max-md:max-w-full",
    contentWrapper: "flex flex-wrap gap-10 items-center max-md:mr-0.5 max-md:max-w-full",
    nav: "flex gap-5 items-start self-stretch my-auto text-sm font-medium tracking-tight text-center text-white min-w-[240px]",
    socialWrapper: "flex gap-2.5 items-start self-stretch my-auto",
    socialIcon: "object-contain shrink-0 aspect-square fill-stone-300 w-[35px]",
    divider: "flex shrink-0 mt-7 h-px bg-stone-300 bg-opacity-50 max-md:max-w-full",
    bottomContent: "flex flex-wrap gap-10 items-start mt-6 text-sm text-white max-md:max-w-full",
    legalLinks: "flex gap-4 items-center font-medium capitalize min-w-[240px]",
  },

  copyright: `Copyrights© ${new Date().getFullYear()} All Rights Reserved`,
};

export const Footer: React.FC = () => (
  <footer className={footerConfig.styles.footer}>
    <div className={footerConfig.styles.contentWrapper}>
      <nav className={footerConfig.styles.nav}>
        {footerConfig.navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.text}</a>
        ))}
      </nav>
      <div className={footerConfig.styles.socialWrapper}>
        {footerConfig.socialLinks.map((link) => (
          <a key={link.href} href={link.href} aria-label={link.ariaLabel}>
            <img loading="lazy" src={link.imgSrc} alt="" className={footerConfig.styles.socialIcon} />
          </a>
        ))}
      </div>
    </div>
    <div className={footerConfig.styles.divider} />
    <div className={footerConfig.styles.bottomContent}>
      <div>{footerConfig.copyright}</div>
      <div className={footerConfig.styles.legalLinks}>
        {footerConfig.legalLinks.map((link) => (
          <a key={link.href} href={link.href} className="self-stretch my-auto">{link.text}</a>
        ))}
      </div>
    </div>
  </footer>
);
