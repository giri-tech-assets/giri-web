import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/common/Accordion';
import { Layout } from '../components/common';
import {
  IPolicyContent,
  PolicyContent,
} from '@/components/policy/PolicyContent';
import { usePageContentQueries } from '@/hooks/pages-queries/usePageContentQueries';

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
  const { policyQuery } = usePageContentQueries();
  const policyContents: IPolicyContent[] = policyQuery.map(
    (content: any) => content.frontmatter,
  );


  return (
    <Layout>
      <div className={termsOfUseContent.styles.container}>
        <h1 className={termsOfUseContent.styles.title}>
          {termsOfUseContent.title}
        </h1>

        <Accordion type="multiple">
          {policyContents.map((section, index) => (
            <AccordionItem key={section.title + index} value={section.title}>
              <AccordionTrigger value={section.title}>
                {section.title}
              </AccordionTrigger>
              <AccordionContent value={section.title}>
                <div className="mt-4">
                  <PolicyContent policyContent={section} />
                </div>
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
