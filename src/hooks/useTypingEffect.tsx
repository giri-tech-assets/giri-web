import { useEffect, useState } from 'react';

interface UseTypingEffectProps {
  text: string;
  typingSpeed?: number;
}

export const useTypingEffect = ({
  text,
  typingSpeed = 50,
}: UseTypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState(``);
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping && index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (index >= text.length) {
      setIsTyping(false);
    }
  }, [index, isTyping, text, typingSpeed]);

  const startTyping = () => {
    setDisplayedText(``);
    setIndex(0);
    setIsTyping(true);
  };

  return { displayedText, isTyping, startTyping };
};
