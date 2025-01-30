import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { VisitorType } from '@/hooks/useGetVisitorType';
import { usePageContentQueries } from '@/hooks/pages-queries/usePageContentQueries';

const faqContent = {
  title: `Frequently Asked Questions`,
  styles: {
    container: `max-w-2xl mx-auto mt-8`,
    title: `text-3xl font-bold mb-6 text-center`,
    faqItem: `border-b border-gray-200 py-4`,
    question: `flex justify-between items-center w-full text-left`,
    questionText: `text-lg font-medium`,
    answer: `mt-2 text-gray-600`,
    toggle: `flex justify-center space-x-4 mb-6`,
    toggleButton: `px-4 py-2 rounded-md`,
    activeToggle: `bg-blue-950 text-white`,
    inactiveToggle: `bg-gray-200 text-gray-700`,
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
          } ${isOpen ? `rotate-180` : ``}`}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen
            ? `${(contentRef.current as any)?.scrollHeight || 0}px`
            : `0px`,
          overflow: `hidden`,
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

  const {
    faqQuery: { buyerFAQ, sellerFAQ },
  } = usePageContentQueries();

  const faqData = userType === `buyer` ? buyerFAQ : sellerFAQ;

  return (
    <div className={faqContent.styles.container} id="faq">
      <h2 className={faqContent.styles.title}>{faqContent.title}</h2>
      <div className={faqContent.styles.toggle}>
        <button
          className={`${faqContent.styles.toggleButton} ${
            userType === `buyer`
              ? faqContent.styles.activeToggle
              : faqContent.styles.inactiveToggle
          }`}
          onClick={() => toggleUserType(VisitorType.Buyer)}
        >
          Buyer FAQ
        </button>
        <button
          className={`${faqContent.styles.toggleButton} ${
            userType === `seller`
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
