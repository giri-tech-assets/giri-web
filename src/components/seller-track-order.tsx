import React from 'react';
import { useGetAllImages } from '@/hooks/useGetAllImages';
import { ArrowRight } from 'lucide-react';
import { SignupButton } from './common/SignupButton';
import { ImagePopup } from './common/ImagePopUp';

export const TrackYourOrder: React.FC = () => {
  const allImages = useGetAllImages();
  const dashboard = allImages?.['track-your-order']?.url || '';

  const content = {
    title: 'Sell Globally with Ease',
    orderStatus: {
      title: 'Track Your Sales Effortlessly',
      description:
        'Expand your reach to a global audience with our platform. Using AI, we match you with buyers worldwide, and our partnerships with multiple shipping providers ensure fast delivery. Easily track your orders through every stage:',
      stages: [
        'Integrate',
        'Processing',
        'Shipped',
        'Out for Delivery',
        'Delivered',
      ],
      additionalInfo:
        'Talk to us today to start selling your products on Giri and reach a global audience.',
    },
    button: {
      text: 'Start Selling Now',
      className:
        'bg-yellow-400 hover:bg-blue-950 hover:text-white text-blue-950 font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300',
      buttonIcon: 'ml-2',
    },
    image: {
      src: dashboard,
      alt: 'Order Tracking Illustration',
      className: 'w-full h-auto rounded-lg shadow-lg',
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">{content.title}</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text Information Column */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold mb-4">
            {content.orderStatus.title}
          </h3>
          <p className="text-gray-700">{content.orderStatus.description}</p>
          <p className="text-gray-700 mt-4">
            {content.orderStatus.additionalInfo}
          </p>
          <div>
            <SignupButton buttonText={content.button.text} />
          </div>
        </div>

        {/* Image Column */}
        <div className="md:w-1/2">
          <ImagePopup>
            <img
              src={content.image.src}
              alt={content.image.alt}
              className={content.image.className}
            />
          </ImagePopup>
        </div>
      </div>
    </div>
  );
};
