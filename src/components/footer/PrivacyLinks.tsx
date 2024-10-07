import React from 'react';

export const PrivacyLinks: React.FC = () => {
  return (
    <div className="flex flex-col self-stretch my-auto text-sm">
      <nav className="flex gap-3.5 items-start font-semibold text-gray-900">
        <a href="/privacy">Privacy Policy</a>
        <a href="/privacy#terms">Term of Use</a>
      </nav>
      <div className="mt-3.5 tracking-normal text-gray-500">
        {`© ${new Date().getFullYear()} Giri. All rights reserved.`}
      </div>
    </div>
  );
};

