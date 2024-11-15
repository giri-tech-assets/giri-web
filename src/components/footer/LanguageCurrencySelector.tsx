import React, { useState } from 'react';

const selectorConfig = {
  styles: {
    container:
      'flex items-start self-stretch my-auto whitespace-nowrap text-zinc-400',
    selectorWrapper: 'flex flex-col',
    selectorButton:
      'flex flex-col justify-center px-2.5 py-3.5 w-full bg-white rounded-xl',
    selectorContent: 'flex gap-1.5 items-start',
    selectorText: 'text-sm font-semibold tracking-normal',
  },
  languages: ['English'],
  currencies: ['USD',],
};

export const LanguageCurrencySelector: React.FC = () => {
  const [language, setLanguage] = useState(selectorConfig.languages[0]);
  const [currency, setCurrency] = useState(selectorConfig.currencies[0]);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const { styles } = selectorConfig;

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setIsLanguageOpen(false);
  };

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    setIsCurrencyOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.selectorWrapper} w-[98px] relative`}>
        <button
          className={styles.selectorButton}
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        >
          <div className={styles.selectorContent}>
            <div className={styles.selectorText}>{language}</div>
          </div>
        </button>
        {/* {isLanguageOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-xl shadow-lg">
            {selectorConfig.languages.map((lang) => (
              <button
                key={lang}
                className={`${styles.selectorText} w-full text-left px-2.5 py-2 hover:bg-gray-100`}
                onClick={() => handleLanguageChange(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        )} */}
      </div>
      {/* <div className={`${styles.selectorWrapper} w-[74px] relative ml-2`}>
        <button
          className={styles.selectorButton}
          onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
        >
          <div className={styles.selectorContent}>
            <div className={styles.selectorText}>{currency}</div>
          </div>
        </button>
        {isCurrencyOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-xl shadow-lg">
            {selectorConfig.currencies.map((curr) => (
              <button
                key={curr}
                className={`${styles.selectorText} w-full text-left px-2.5 py-2 hover:bg-gray-100`}
                onClick={() => handleCurrencyChange(curr)}
              >
                {curr}
              </button>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default LanguageCurrencySelector;
