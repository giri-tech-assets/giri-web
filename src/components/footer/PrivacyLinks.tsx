import React from 'react';

const privacyLinksConfig = {
  styles: {
    container: "flex flex-col self-stretch my-auto text-sm",
    nav: "flex gap-3.5 items-start font-semibold text-gray-900",
    copyright: "mt-3.5 tracking-normal text-gray-500",
  },
  links: [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Term of Use", href: "/privacy#terms" },
  ],
  companyName: "Giri Inc",
};

export const PrivacyLinks: React.FC = () => {
  const { styles, links, companyName } = privacyLinksConfig;
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.text}
          </a>
        ))}
      </nav>
      <div className={styles.copyright}>
        © {currentYear} {companyName}. All rights reserved.
      </div>
    </div>
  );
};

export default PrivacyLinks;
