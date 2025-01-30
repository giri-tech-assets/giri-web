import { useState, useEffect } from 'react';
import { useCountryLocation } from './useGetLocation';

export const enum VisitorType {
  Seller = `seller`,
  Buyer = `buyer`,
}

export const useGetVisitorType = () => {
  const [visitorType, setVisitorType] = useState<VisitorType>(
    VisitorType.Buyer,
  );
  const { country, loading, error } = useCountryLocation();

  useEffect(() => {
    const determineVisitorType = () => {
      const url = window.location.pathname;

      if (url.includes(`/sell`)) {
        setVisitorType(VisitorType.Seller);
      } else if (url.includes(`/shop`)) {
        setVisitorType(VisitorType.Buyer);
      } else {
        if (!loading && !error) {
          if (country === `Nigeria` || country === `Ghana`) {
            setVisitorType(VisitorType.Seller);
          } else {
            setVisitorType(VisitorType.Buyer);
          }
        }
      }
    };

    determineVisitorType();
  }, [country, loading, error]);

  return { visitorType, loading, error };
};

export default useGetVisitorType;
