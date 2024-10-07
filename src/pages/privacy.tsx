import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/common/Accordion"
import { Layout } from '@/components/common';

interface TermsOfUseProps {
  websiteUrl: string;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ websiteUrl }) => {
  return (
    <Layout>
    <div className="max-w-3xl mx-auto px-4 py-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

      <Accordion type="single">
        <AccordionItem value="agreement">
          <AccordionTrigger value="agreement">1. Agreement</AccordionTrigger>
          <AccordionContent value="agreement">
            <p className="mb-4 leading-relaxed">
              This Terms of Use ("Terms of Use"/"Agreement") is a legal agreement between you ("You" /"Your"/"Customer"), and GiriToday ("GiriToday", "Us", "Our", "We"). This Agreement contains the terms and conditions that govern the use of and subscription to GiriToday's services through its website application, <a href={websiteUrl} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">{websiteUrl}</a>, including any related mobile applications and associated domains thereof (the "Platform").
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="acceptance">
          <AccordionTrigger value="acceptance">2. Acceptance of Terms</AccordionTrigger>
          <AccordionContent value="acceptance">
            <p className="mb-4 leading-relaxed" id={'terms'}>
              By accessing or using the Platform, creating an account, or signing up for any of our services, You acknowledge that You have read, understood, and agree to be bound by this Terms of Use, effective as of the date of such action. You also agree to comply with all agreements, applicable laws, and regulations incorporated into this Terms of Use.
            </p>
            <p className="mb-4 leading-relaxed">
              If You do not accept the terms of this Terms of Use, do not access or use the Platform or services available via the Platform. If You are agreeing to this Terms of Use on behalf of a business, You represent and warrant that You are an authorized representative of that business and have the authority to bind that business, understanding that this Agreement will be binding on that business. We reserve the right to take legal action against You in the event this representation is false.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="modifications">
          <AccordionTrigger value="modifications">3. Modifications to Terms</AccordionTrigger>
          <AccordionContent value="modifications">
            <p className="mb-4 leading-relaxed">
              GiriToday reserves the right to amend this Terms of Use at any time and may notify You of any such changes by posting the revised Terms of Use on the Platform. All changes shall be effective upon posting. You should check this Terms of Use periodically for such changes. Your continued use of the Platform after any changes constitutes Your agreement to be bound by such changes.
            </p>
            <p className="mb-4 leading-relaxed">
              GiriToday may terminate, suspend, change, or restrict access to all or any part of the services without notice or liability where necessary to protect its commercial interests.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="privacy">
          <AccordionTrigger value="privacy">4. Privacy Policy</AccordionTrigger>
          <AccordionContent value="privacy">
            <p className="mb-4 leading-relaxed">
              You acknowledge and agree that Your use of the Platform, including information transmitted to or stored by GiriToday, is governed by Our Privacy Policy.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p className="mt-6 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
    </Layout>

  );
};

export default TermsOfUse;
