import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/common/Accordion"
import { Layout } from '@/components/common';

interface TermsOfUseProps {
  websiteUrl: string;
}

const termsOfUseContent = {
  title: "Terms of Use",
  sections: [
    {
      id: "agreement",
      title: "1. Agreement",
      content: "This Terms of Use (\"Terms of Use\"/\"Agreement\") is a legal agreement between you (\"You\" /\"Your\"/\"Customer\"), and Giri (\"Giri\", \"Us\", \"Our\", \"We\"). This Agreement contains the terms and conditions that govern the use of and subscription to Giri's services through its website application, [websiteUrl], including any related mobile applications and associated domains thereof (the \"Platform\")."
    },
    {
      id: "acceptance",
      title: "2. Acceptance of Terms",
      content: [
        "By accessing or using the Platform, creating an account, or signing up for any of our services, You acknowledge that You have read, understood, and agree to be bound by this Terms of Use, effective as of the date of such action. You also agree to comply with all agreements, applicable laws, and regulations incorporated into this Terms of Use.",
        "If You do not accept the terms of this Terms of Use, do not access or use the Platform or services available via the Platform. If You are agreeing to this Terms of Use on behalf of a business, You represent and warrant that You are an authorized representative of that business and have the authority to bind that business, understanding that this Agreement will be binding on that business. We reserve the right to take legal action against You in the event this representation is false."
      ]
    },
    {
      id: "modifications",
      title: "3. Modifications to Terms",
      content: [
        "Giri reserves the right to amend this Terms of Use at any time and may notify You of any such changes by posting the revised Terms of Use on the Platform. All changes shall be effective upon posting. You should check this Terms of Use periodically for such changes. Your continued use of the Platform after any changes constitutes Your agreement to be bound by such changes.",
        "Giri may terminate, suspend, change, or restrict access to all or any part of the services without notice or liability where necessary to protect its commercial interests."
      ]
    },
    {
      id: "privacy",
      title: "4. Privacy Policy",
      content: "You acknowledge and agree that Your use of the Platform, including information transmitted to or stored by Giri, is governed by Our Privacy Policy."
    }
  ],
  styles: {
    container: "max-w-3xl mx-auto px-4 py-20 text-gray-800",
    title: "text-3xl font-bold mb-6",
    paragraph: "mb-4 leading-relaxed",
    lastUpdated: "mt-6 text-sm text-gray-600",
    link: "text-blue-600 hover:text-blue-800 underline"
  }
};

const TermsOfUse: React.FC<TermsOfUseProps> = ({ websiteUrl }) => {
  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <p key={index} className={termsOfUseContent.styles.paragraph} id={index === 0 ? 'terms' : undefined}>
          {renderParagraphWithUrl(paragraph)}
        </p>
      ));
    }
    return <p className={termsOfUseContent.styles.paragraph}>{renderParagraphWithUrl(content)}</p>;
  };

  const renderParagraphWithUrl = (text: string) => {
    const parts = text.split('[websiteUrl]');
    return parts.map((part, index) =>
      index === 0 ? part : (
        <React.Fragment key={index}>
          <a href={websiteUrl} className={termsOfUseContent.styles.link} target="_blank" rel="noopener noreferrer">
            {websiteUrl}
          </a>
          {part}
        </React.Fragment>
      )
    );
  };

  return (
    <Layout>
      <div className={termsOfUseContent.styles.container}>
        <h1 className={termsOfUseContent.styles.title}>{termsOfUseContent.title}</h1>

        <Accordion type="single">
          {termsOfUseContent.sections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger value={section.id}>{section.title}</AccordionTrigger>
              <AccordionContent value={section.id}>
                {renderContent(section.content)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className={termsOfUseContent.styles.lastUpdated}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </Layout>
  );
};

export default TermsOfUse;
