import { useState, useEffect } from 'react';

export const useCountryLocation = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const countryResponse = await fetch(`/.netlify/functions/getCountry`);
        const countryData = await countryResponse.json();
        console.log({ countryData });
        setCountry(countryData.country);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, []);

  return { country, loading, error, isNigeria: country === `Nigeria` };
};
