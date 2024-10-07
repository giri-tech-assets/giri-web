import { useState, useEffect } from 'react';

export const useCountryLocation = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        if (!("geolocation" in navigator)) {
          throw new Error("Geolocation is not supported by your browser");
        }

        // Get current position
        const position:any = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;

        // Use a geocoding service to get the country
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
        const data = await response.json();

        setCountry(data.countryName);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, []);

  return { country, loading, error, isNigeria: country === 'Nigeria' };
};
