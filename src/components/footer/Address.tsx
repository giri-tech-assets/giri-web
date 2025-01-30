import React from 'react';

interface AddressProps {
  street: string;
  suite?: string;
  city: string;
  state: string;
  zipCode?: string;
  className?: string;
  country?: string;
}

export const Address: React.FC<AddressProps> = ({
  street,
  suite,
  city,
  state,
  zipCode,
  country = ``,
  className = ``,
}) => {
  return (
    <address className={`not-italic ${className} text-gray-500`}>
      <div className="text-gray-500">{street}</div>
      {suite && <div className="text-gray-500">{suite}</div>}
      <div className="text-gray-500">
        {city}, {state} {zipCode}
        <br />
        {country}
      </div>
    </address>
  );
};
