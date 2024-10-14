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
  acknowledgment: string;
}

export const policyContent: PolicyContent = {
  title: 'SELLER POLICY',
  lastUpdated: 'October 2024',
  introduction:
    'Welcome to Giri! This Seller policy is part of our Terms of Use and outlines the rules and guidelines you agree to follow when selling on our platform. Please read the below carefully.',
  sections: [
    {
      title: 'Becoming a Seller',
      content:
        'To become a seller on Giritoday, you must register for a seller account and provide requested information accurately. We may also ask for additional documents to verify your identity and business.',
    },
    {
      title: 'Listing a Product',
      content:
        'All listed products must have clear, accurate and truthful product descriptions, prices, and images. Providing inaccurate, or misleading information may result in the suspension of your account. Only list items that meet our quality standards and are in good condition.',
    },
    {
      title: 'Prohibited Items',
      content:
        'Do not list items that are illegal, counterfeit, or restricted on our platform. Check our list of prohibited items for more details.',
    },
    {
      title: 'Pricing',
      content:
        'You are responsible for setting prices for your listed products on Giritoday, including any applicable taxes. After a successful sale, we will process the payment and transfer it to your account, minus our commission or fees, based on our payment schedule.',
    },
    {
      title: 'Order Fulfillment',
      content: (
        <ul className="list-disc pl-5">
          <li>
            <strong>Timely Shipping</strong>: Ship orders on time, and provide
            accurate tracking information. Delayed shipments may affect your
            seller rating.
          </li>
          <li>
            <strong>Packaging</strong>: Ensure items are packaged safely to
            prevent damage during delivery.
          </li>
          <li>
            <strong>Order Cancellations</strong>: Contact us if you need to
            cancel an order. Frequent cancellations may impact your account.
          </li>
        </ul>
      ),
    },
    {
      title: 'Returns and Refunds',
      content:
        'Follow our return and refund policy. If a buyer requests a return, work with us to process the request smoothly and seamlessly.',
    },
    {
      title: 'Fees and Commissions',
      content:
        'We charge a commission or listing fee on each sale. These fees are outlined in your seller dashboard. All fees will be deducted from your sales earnings. You can view the fee breakdown in your account.',
    },
    {
      title: 'Account Management',
      content: (
        <ul className="list-disc pl-5">
          <li>
            <strong>Keep Information Updated</strong>: Ensure your contact
            information, bank details, and product listings are always accurate.
          </li>
          <li>
            <strong>Maintain Good Ratings</strong>: Provide excellent service
            and high-quality products to keep your seller ratings high.
          </li>
          <li>
            <strong>Suspensions and Terminations</strong>: Giritoday reserves
            the right to suspend or terminate your account if you violate this
            policy or if we receive negative feedback from buyers with respect
            to your product.
          </li>
        </ul>
      ),
    },
    {
      title: 'Compliance with Laws',
      content:
        'At Giritoday, we strive to be compliant with all relevant laws and regulations so ensure that your products and business practices are equally compliant. Note that you are responsible for any legal issues arising from your sales.',
    },
    {
      title: 'Intellectual Property',
      content:
        'Selling counterfeit products or products that violate intellectual property rights is strictly prohibited.',
    },
    {
      title: 'Changes to This Policy',
      content:
        'GiriToday reserves the right to update this policy occasionally. Any changes will be posted here, and continued use of our platform means you accept the new terms.',
    },
    {
      title: 'Contact Us',
      content: (
        <p>
          If you have any questions or need help, please reach out to us at:{' '}
          <strong>Giritoday Technology Limited</strong> giri@giritoday.com
        </p>
      ),
    },
  ],
  acknowledgment:
    'By becoming a seller on GiriToday, you acknowledge that you have read, understood, and agree to comply with the terms of this Seller Policy. Thank you for being a part of our marketplace!',
};

export const SellerPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg" id={'seller-policy'}>
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

      <p className="mt-8 text-sm">{policyContent.acknowledgment}</p>
    </div>
  );
};
