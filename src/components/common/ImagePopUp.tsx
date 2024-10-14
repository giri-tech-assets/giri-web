import React, { useState, ReactElement, cloneElement } from 'react';

interface ImagePopupProps {
  children: ReactElement;
  className?: string;
}

export const ImagePopup: React.FC<ImagePopupProps> = ({
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopup = (): void => setIsOpen(!isOpen);

  const childWithClick = cloneElement(children, {
    onClick: togglePopup,
    style: { ...children.props.style, cursor: 'pointer' },
  });

  return (
    <>
      {childWithClick}
      {isOpen && (
        <div
          className={className}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={togglePopup}
        >
          <div
            style={{
              maxWidth: '90vv',
              maxHeight: '90vh',
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
