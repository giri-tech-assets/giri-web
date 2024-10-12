import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { VisitorType } from '@/hooks/useGetVisitorType';

const faqContent = {
  title: 'Frequently Asked Questions',
  buyerFAQ: [
    {
      question: 'What is your return policy?',
      answer:
        'Typically we offer a 30-day return policy for all unused items in their original packaging. However, this is dependent on the Product. Refer to the product purchase policies. Please contact our customer service team to initiate a return.',
    },
    {
      question: 'How long does shipping take?',
      answer:
        'Shipping times vary depending on your location and product. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days. Customers will be able to use our tracking system and sign up for order updates',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we ship to most countries worldwide. International shipping rates and times vary by destination. Please check our shipping page for more details.',
    },
    {
      question: 'How can I track my order?',
      answer:
        "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number on our website or the carrier's site to track your package.",
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are securely processed.',
    },
  ],
  sellerFAQ: [
    {
      question: 'How do I become a seller on your platform?',
      answer:
        'To become a seller, you need to create a seller account and complete our verification process. Visit our "Become a Seller" page for more information and to start the application.',
    },
    {
      question: 'What fees do you charge sellers?',
      answer:
        'We charge a commission on each sale, which varies depending on the product category. There may also be listing fees and optional promotional fees. Please check our Seller Fee Structure page for detailed information.',
    },
    {
      question: 'How do I manage my inventory?',
      answer:
        'You can manage your inventory through our Seller Dashboard. Here, you can add new products, update stock levels, and modify product information.',
    },
    {
      question: 'How and when do I get paid?',
      answer:
        'Payments are typically processed every two weeks for all settled transactions. The funds will be transferred to the bank account you provided during registration.',
    },
    {
      question: 'What support do you offer to sellers?',
      answer:
        'We offer various support services including a dedicated seller support team, educational resources, and tools to help you optimize your listings and sales.',
    },
  ],
  styles: {
    container: 'max-w-2xl mx-auto mt-8',
    title: 'text-3xl font-bold mb-6 text-center',
    faqItem: 'border-b border-gray-200 py-4',
    question: 'flex justify-between items-center w-full text-left',
    questionText: 'text-lg font-medium',
    answer: 'mt-2 text-gray-600',
    toggle: 'flex justify-center space-x-4 mb-6',
    toggleButton: 'px-4 py-2 rounded-md',
    activeToggle: 'bg-blue-950 text-white',
    inactiveToggle: 'bg-gray-200 text-gray-700',
  },
  config: {
    chevronSize: 20,
    transitionDuration: 300, // in milliseconds
  },
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className={faqContent.styles.faqItem}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className={faqContent.styles.question}>
        <span className={faqContent.styles.questionText}>{question}</span>
        <ChevronDown
          size={faqContent.config.chevronSize}
          className={`transform transition-transform duration-${
            faqContent.config.transitionDuration
          } ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen
            ? `${(contentRef.current as any)?.scrollHeight || 0}px`
            : '0px',
          overflow: 'hidden',
          transition: `max-height ${faqContent.config.transitionDuration}ms ease-out, opacity ${faqContent.config.transitionDuration}ms ease-out`,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className={faqContent.styles.answer}>{answer}</p>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  const [userType, setUserType] = useState<VisitorType>(VisitorType.Buyer);

  const toggleUserType = (type: VisitorType) => {
    setUserType(type);
  };

  const faqData =
    userType === 'buyer' ? faqContent.buyerFAQ : faqContent.sellerFAQ;

  return (
    <div className={faqContent.styles.container} id="faq">
      <h2 className={faqContent.styles.title}>{faqContent.title}</h2>
      <div className={faqContent.styles.toggle}>
        <button
          className={`${faqContent.styles.toggleButton} ${
            userType === 'buyer'
              ? faqContent.styles.activeToggle
              : faqContent.styles.inactiveToggle
          }`}
          onClick={() => toggleUserType(VisitorType.Buyer)}
        >
          Buyer FAQ
        </button>
        <button
          className={`${faqContent.styles.toggleButton} ${
            userType === 'seller'
              ? faqContent.styles.activeToggle
              : faqContent.styles.inactiveToggle
          }`}
          onClick={() => toggleUserType(VisitorType.Seller)}
        >
          Seller FAQ
        </button>
      </div>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
