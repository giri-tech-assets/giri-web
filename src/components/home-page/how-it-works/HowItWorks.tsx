import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SignupButton } from '@/components/common/SignupButton';

// Extracted images object
const images = {
  forSellersIcon:
    'https://cdn.builder.io/api/v1/image/assets/TEMP/7df039c68128b09ff22e0a53cc481ef468043ee18deddeb1323aa75202840228?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
};

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  steps: string[];
}

const howItWorksContent = {
  headerTag: 'Features',
  title: 'How It Works',
  description:
    'Start selling, shipping, and earning effortlessly with on Giri, the global marketplace for African goods. Tell your story, showcase your products, and reach customers worldwide.',
  features: [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-blue-500"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <path d="M2 7h20"></path>
          <path d="M16 3v4"></path>
          <path d="M8 3v4"></path>
        </svg>
      ),
      title: 'Integrate',
      description:
        'Create your customizable storefront for quick and seamless product listings, enhancing the shopping experience for your artisanal and bespoke items."',
      steps: [
        'Create seller account',
        'Upload product catalog',
        'Customize store front',
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-green-500"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          <path d="M15 8l-3 3"></path>
          <path d="M12 11l3 3"></path>
        </svg>
      ),
      title: 'Sell',
      description:
        'Sell More. Enjoy multiple sales and payment options and dedicated customer support, ensuring a seamless experience for you and your buyers.',
      steps: [
        'Global product promotion',
        'Multiple payment options',
        'Customer support',
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-yellow-500"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="8" x2="8" y2="8"></line>
          <line x1="16" y1="12" x2="8" y2="12"></line>
          <line x1="16" y1="16" x2="8" y2="16"></line>
          <line x1="3" y1="3" x2="21" y2="21"></line>
        </svg>
      ),
      title: 'Deliver',
      description:
        'Ship Faster. We partner with multiple shipping providers to ensure faster delivery, along with various payment options and dedicated customer support for a seamless experience.',
      steps: [
        'Quality control',
        'Eco-friendly packaging',
        'Worldwide shipping',
      ],
    },
  ],
  buttonText: 'Start Selling',
  styles: {
    section: 'py-16 bg-gradient-to-b from-white to-gray-100',
    container: 'container mx-auto px-4',
    header: 'text-center mb-12',
    headerTagContainer:
      'flex gap-5 items-center text-base font-medium leading-loose whitespace-nowrap text-neutral-900',
    headerTagIcon: 'object-contain shrink-0 self-stretch my-auto w-[65px]',
    headerTag: 'object-contain shrink-0 self-stretch my-auto w-[65px]',
    title: 'text-4xl font-bold mt-4 mb-6',
    description:
      'self-center mt-3.5 text-base leading-6 text-center text-gray-500 max-md:max-w-full',
    featuresContainer: 'grid grid-cols-1 md:grid-cols-3 gap-8 mb-12',
    buttonContainer: 'text-center',
    button:
      'bg-yellow-400 hover:bg-blue-950 hover:text-white  text-blue-950 font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300',
    buttonIcon: 'ml-2',
  },
};

const FeatureCard: React.FC<Feature> = ({
  icon,
  title,
  description,
  steps,
}) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      <ul className="text-left w-full">
        {steps.map((step, index) => (
          <li key={index} className="flex items-center mb-2">
            <CheckCircle className="text-green-500 mr-2" size={16} />
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const { styles, headerTag, title, description, features, buttonText } =
    howItWorksContent;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-5 text-base font-medium leading-loose whitespace-nowrap text-neutral-900">
              <img
                loading="lazy"
                src={images.forSellersIcon}
                alt="For Sellers Icon"
                className="object-contain w-[65px]"
              />
              <div className="px-4 py-1 bg-white border border-solid shadow border-zinc-200 rounded-[1000px]">
                For Sellers
              </div>
            </div>
          </div>

          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.featuresContainer}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="flex justify-center">
          <SignupButton buttonText={buttonText} />
        </div>
      </div>
    </section>
  );
};
