import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/common/Accordion';
import { Layout } from '../components/common';
import { ReturnRefundPolicy } from '@/components/policy/BuyersandRefund';
import { SellerPolicy } from '@/components/policy/Seller';

interface TermsOfUseProps {
  websiteUrl: string;
}

const termsOfUseContent = {
  title: 'Terms of Use',
  styles: {
    container: 'max-w-3xl mx-auto px-4 py-20 text-gray-800',
    title: 'text-3xl font-bold mb-6',
    paragraph: 'mb-4 leading-relaxed',
    lastUpdated: 'mt-6 text-sm text-gray-600',
    link: 'text-blue-600 hover:text-blue-800 underline',
  },
};

const TermsOfUse: React.FC<TermsOfUseProps> = () => {
  const sections = [
    {
      id: 'seller-policy',
      component: <SellerPolicy />,
      title: 'Seller Policy',
    },
    {
      id: 'return-refund-policy',
      component: <ReturnRefundPolicy />,
      title: 'Return and Refund Policy',
    },
  ];
  return (
    <Layout>
      <div className={termsOfUseContent.styles.container}>
        <h1 className={termsOfUseContent.styles.title}>
          {termsOfUseContent.title}
        </h1>

        <Accordion type="multiple">
          {sections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger value={section.id}>
                {section.title}
              </AccordionTrigger>
              <AccordionContent value={section.id}>
                <div className="mt-4">{section.component}</div>
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
