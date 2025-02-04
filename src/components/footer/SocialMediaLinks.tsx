import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: `Instagram`,
    icon: <Instagram size={20} />,
    url: `https://www.instagram.com/giritodayhq?utm_source=qr`,
  },
  {
    name: `LinkedIn`,
    icon: <Linkedin size={20} />,
    url: `https://www.linkedin.com/company/giritodayy/`,
  },
  {
    name: `X (formerly Twitter)`,
    icon: <Twitter size={20} />,
    url: `https://x.com/giritoday?s=21&t=GnyXRNJiZV4AxDMdkrWabw`,
  },
];

export const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      {socialLinks.map(({ name, url, icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition"
        >
          {icon}
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
};
