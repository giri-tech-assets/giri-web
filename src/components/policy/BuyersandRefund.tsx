import React from 'react';

interface PolicySection {
  title: string;
  content: React.ReactNode;
}

interface PolicyContent {
  title: string;
  lastUpdated: string;
  introduction: string;
  sections: PolicySection[];
  contact: string;
}

const policyContent: PolicyContent = {
  title: 'RETURN AND REFUND POLICY',
  lastUpdated: 'October 2024',
  introduction:
    'Welcome to Giriytoday! Thank you for shopping with us. We strive to ensure that all our buyers are happy with their purchases. This policy explains how to return items and request refunds if you are unsatisfied with your purchase.',
  sections: [
    {
      title: 'Eligibility',
      content: (
        <ul className="list-disc pl-5">
          <li>
            To qualify for a return, items must be unused, in their original
            packaging, and in the same condition as you received them.
          </li>
          <li>
            If you receive an item that is damaged, defective, or incorrect,
            please contact us right away. Send us a photo of the item and your
            order number. We'll arrange a replacement or full refund, including
            shipping costs.
          </li>
          <li>
            Some items, like perishable goods, personalized or custom-made
            items, and personal care products, are not eligible for returns.
          </li>
          <li>
            If you're unsure whether your item qualifies, please reach out to us
            before making a return.
          </li>
        </ul>
      ),
    },
    {
      title: 'Timeline for Return',
      content:
        'You can only return purchased items within 30 DAYS from the delivery date.',
    },
    {
      title: 'How to initiate a Return',
      content:
        "Contact our Customer Service team at giri@giritoday.com with your order number and reason for the return. Once approved, we'll provide instructions on how to send the item back to us. You are responsible for the shipping costs of returning the item unless it was damaged or defective.",
    },
    {
      title: 'Refund Process',
      content:
        "Once we receive your returned item, we will inspect it to ensure it meets our return criteria. If approved, we'll process your refund to your original payment method. Please allow up to 60 BUSINESS DAYS for the refund to reflect in your account. If your return does not meet the criteria, we will notify you and may return the item to you without a refund.",
    },
    {
      title: 'Late or Missing Refunds',
      content: (
        <ul className="list-disc pl-5">
          <li>
            If you haven't received your refund within the expected timeframe,
            check with your bank or credit card provider. Sometimes processing
            delays occur.
          </li>
          <li>
            If you've done this and still have not received your refund, contact
            us at giri@giritoday.com.
          </li>
        </ul>
      ),
    },
  ],
  contact:
    'If you have any questions or need assistance with a return, please reach out to our Customer Service team: Giritoday Technology Limited at giri@giritoday.com',
};

export const ReturnRefundPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6">{policyContent.title}</h1>
      <p className="text-sm text-gray-600 mb-6">
        Last Updated: {policyContent.lastUpdated}
      </p>

      <p className="mb-6">{policyContent.introduction}</p>

      {policyContent.sections.map((section, index) => (
        <section key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {index + 1}. {section.title}
          </h2>
          <div>{section.content}</div>
        </section>
      ))}

      <h2 className="text-xl font-semibold mb-2">
        {policyContent.sections.length + 1}. Contact Us
      </h2>
      <p>{policyContent.contact}</p>
    </div>
  );
};
