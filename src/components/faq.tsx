import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy for all unused items in their original packaging. Please contact our customer service team to initiate a return.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.',
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
];

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
      className="border-b border-gray-200 py-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className="flex justify-between items-center w-full text-left">
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown
          size={20}
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen
            ? `${(contentRef?.current as any)?.scrollHeight}px`
            : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="mt-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8" id='faq'>
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
