import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

// Extracted images object
const images = {
  integrate:
    'https://raw.githubusercontent.com/giri-tech-assets/web-images/f6655552e6d92f0a4ccf05d5c85be16d2eaffb53/Integrate.svg',
  sell: 'https://raw.githubusercontent.com/giri-tech-assets/web-images/f6655552e6d92f0a4ccf05d5c85be16d2eaffb53/sell.svg',
  deliver:
    'https://raw.githubusercontent.com/giri-tech-assets/web-images/f6655552e6d92f0a4ccf05d5c85be16d2eaffb53/deliver.svg',
  featuresIcon:
    'https://cdn.builder.io/api/v1/image/assets/TEMP/b5d7ab23f508c7b7dbf600b889d52134d0da53212998e591c8bb9593fc454cd5?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
};

interface Feature {
  imageSrc: string;
  title: string;
  description: string;
  steps: string[];
}

const features: Feature[] = [
  {
    imageSrc: images.integrate,
    title: 'INTEGRATE',
    description:
      'We set up online stores for our sellers with product catalogs, each product tailored to users experience ranging from handmade to personalized items.',
    steps: [
      'Create seller account',
      'Upload product catalog',
      'Customize store front',
    ],
  },
  {
    imageSrc: images.sell,
    title: 'SELL',
    description:
      'We promote your products to customers globally making sure our buyers are reached via various platforms, payment methods are simplified to ensure seamless user experience.',
    steps: [
      'Global product promotion',
      'Multiple payment options',
      'Customer support',
    ],
  },
  {
    imageSrc: images.deliver,
    title: 'DELIVER',
    description:
      'All product quality is strictly monitored and carefully packaged to ensure our buyers receive items in good condition.',
    steps: ['Quality control', 'Eco-friendly packaging', 'Worldwide shipping'],
  },
];

interface FeatureCardProps extends Feature {
  isActive: boolean;
  onClick: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
  steps,
  isActive,
  onClick,
}) => (
  <div
    className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 cursor-pointer ${
      isActive ? 'bg-blue-50 shadow-lg scale-105' : 'bg-white hover:shadow-md'
    }`}
    onClick={onClick}
  >
    <img src={imageSrc} alt={title} className="w-16 h-16 mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-center mb-4">{description}</p>
    {isActive && (
      <ul className="text-left w-full">
        {steps.map((step, index) => (
          <li key={index} className="flex items-center mb-2">
            <CheckCircle className="text-green-500 mr-2" size={16} />
            <span>{step}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export const HowItWorks: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex gap-5 items-center text-base font-medium leading-loose whitespace-nowrap text-neutral-900">
            <img
              loading="lazy"
              src={images.featuresIcon}
              alt="Features icon"
              className="object-contain shrink-0 self-stretch my-auto w-[65px]"
            />
            <div className="object-contain shrink-0 self-stretch my-auto w-[65px]">
              {'Features'}
            </div>
          </div>
          <h2 className="text-4xl font-bold mt-4 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the essence of Africa through our curated selection,
            authentic products, and seamless shopping experience with
            eco-friendly materials to promote sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isActive={activeFeature === index}
              onClick={() => setActiveFeature(index)}
            />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300">
            Start Selling
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
