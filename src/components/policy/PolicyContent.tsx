import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PolicySection {
  title: string;
  content: React.ReactNode;
}

export interface IPolicyContent {
  title: string;
  // lastUpdated: string; // TODO: fix in content
  introduction: string;
  sections: PolicySection[];
  contact: string;
}

interface PolicyProps {
  policyContent: IPolicyContent;
}

export const PolicyContent = ({ policyContent }: PolicyProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6">{policyContent.title}</h1>
      <p className="text-sm text-gray-600 mb-6">
        {/* TODO: update this */}
        Last Updated: {new Date(Date.now()).toLocaleString()}
      </p>

      <p className="mb-6">{policyContent.introduction}</p>

      {policyContent?.sections?.map((section: any, index: any) => (
        <section key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {index + 1}. {section.title}
          </h2>
          <Markdown remarkPlugins={[remarkGfm]}>{section.content}</Markdown>
        </section>
      ))}
    </div>
  );
};
