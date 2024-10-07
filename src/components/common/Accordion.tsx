import React, { createContext, useContext, useState, ReactNode } from 'react';

type AccordionContextType = {
  openItems: Set<string>;
  toggleItem: (itemValue: string) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

type AccordionProps = {
  children: ReactNode;
  type?: 'single' | 'multiple';
};

export const Accordion: React.FC<AccordionProps> = ({ children, type = "multiple" }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemValue: string) => {
    setOpenItems((prevOpenItems) => {
      const newOpenItems = new Set(prevOpenItems);
      if (type === "single") {
        newOpenItems.clear();
      }
      if (newOpenItems.has(itemValue)) {
        newOpenItems.delete(itemValue);
      } else {
        newOpenItems.add(itemValue);
      }
      return newOpenItems;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
};

type AccordionItemProps = {
  children: ReactNode;
  value: string;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, value }) => {
  return (
    <div className="border rounded-md">
      {children}
    </div>
  );
};

type AccordionTriggerProps = {
  children: ReactNode;
  value: string;
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, value }) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionTrigger must be used within an Accordion');
  }
  const { openItems, toggleItem } = context;
  const isOpen = openItems.has(value);

  return (
    <button
      className="flex justify-between w-full px-4 py-2 text-left font-medium focus:outline-none"
      onClick={() => toggleItem(value)}
    >
      {children}
      <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
  );
};

type AccordionContentProps = {
  children: ReactNode;
  value: string;
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, value }) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionContent must be used within an Accordion');
  }
  const { openItems } = context;
  const isOpen = openItems.has(value);

  if (!isOpen) return null;

  return (
    <div className="px-4 py-2">
      {children}
    </div>
  );
};
