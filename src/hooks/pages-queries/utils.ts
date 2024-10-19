export function formatFAQData(originalData: any) {
  const result: {
    buyerFAQ: { question: string; answer: string }[];
    sellerFAQ: { question: string; answer: string }[];
  } = {
    buyerFAQ: [],
    sellerFAQ: []
  };

  originalData.forEach((group: any) => {
    const faqType = group.fieldValue + 'FAQ';

    const formattedFAQs = group.nodes.map((node: any) => ({
      question: node.frontmatter.question,
      answer: node.frontmatter.answer
    }));

    result[faqType as keyof typeof result] = formattedFAQs;
  });

  return result;
}
