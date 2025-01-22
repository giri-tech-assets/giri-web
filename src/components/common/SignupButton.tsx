import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from './Modal';
import { ArrowRight } from 'lucide-react';
import { SignupStatus, useWaitlistSignup } from '@/hooks/useWaitlistSignup';
import { ButtonProps } from './Button';

export interface UserIntent {
  type: 'shop' | 'sell' | null;
  category: string;
  description: string;
}

interface Category {
  id: string;
  label: string;
}

interface AnimatedEmailSignupProps {
  buttonText: string;
  inputPlaceholder?: string;
  submittedText?: string;
  shouldUseModal?: boolean;
  variant?: 'primary' | 'secondary' | 'accent' | 'countdown';
}

const categories: Category[] = [
  { id: `electronics`, label: `Electronics` },
  { id: `fashion`, label: `Fashion` },
  { id: `home_garden`, label: `Home & Garden` },
  { id: `sports_outdoors`, label: `Sports & Outdoors` },
  { id: `toys_games`, label: `Toys & Games` },
  { id: `books_media`, label: `Books & Media` },
  { id: `health_beauty`, label: `Health & Beauty` },
  { id: `automotive`, label: `Automotive` },
  { id: `jewelry_watches`, label: `Jewelry & Watches` },
  { id: `pet_supplies`, label: `Pet Supplies` },
  { id: `art_collectibles`, label: `Art & Collectibles` },
  { id: `other`, label: `Other` },
];

const FormStep = {
  INTENT: `INTENT`,
  DETAILS: `DETAILS`,
  EMAIL: `EMAIL`,
};

interface FormContentProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  inputPlaceholder: string;
  variant?: ButtonProps['variant'];
  userIntent: UserIntent;
  setUserIntent: (intent: UserIntent) => void;
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

const FormContent: React.FC<FormContentProps> = ({
  email,
  setEmail,
  handleSubmit,
  inputPlaceholder,
  userIntent,
  setUserIntent,
  currentStep,
  setCurrentStep,
}) => {
  const handleNext = () => {
    if (currentStep === FormStep.INTENT && userIntent.type) {
      setCurrentStep(FormStep.DETAILS);
    } else if (currentStep === FormStep.DETAILS && userIntent.category) {
      setCurrentStep(FormStep.EMAIL);
    }
  };

  const handleBack = () => {
    if (currentStep === FormStep.DETAILS) {
      setCurrentStep(FormStep.INTENT);
    } else if (currentStep === FormStep.EMAIL) {
      setCurrentStep(FormStep.DETAILS);
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {currentStep === FormStep.INTENT && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-4 text-blue-950"
          >
            <h3 className="text-lg font-semibold text-blue-950">
              What brings you to GiriToday?
            </h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="intent"
                  value="shop"
                  checked={userIntent.type === `shop`}
                  onChange={() =>
                    setUserIntent({ ...userIntent, type: `shop` })
                  }
                  className="text-blue-950"
                />
                <span className="text-blue-950">Shop on Giri</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="intent"
                  value="sell"
                  checked={userIntent.type === `sell`}
                  // eslint-disable-next-line react-hooks/exhaustive-deps
                  onChange={() =>
                    setUserIntent({ ...userIntent, type: `sell` })
                  }
                  className="text-blue-950"
                />
                <span className="text-blue-950">Sell on Giri Marketplace</span>
              </label>
            </div>
            <button
              onClick={handleNext}
              disabled={!userIntent.type}
              className="w-full px-4 py-2 bg-blue-950 text-white rounded-full disabled:opacity-50"
            >
              Next
            </button>
          </motion.div>
        )}

        {currentStep === FormStep.DETAILS && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold text-blue-950">
              What are you interested in{` `}
              {userIntent.type === `shop` ? `shopping for` : `selling`}?
            </h3>
            <select
              value={userIntent.category}
              onChange={(e) =>
                setUserIntent({ ...userIntent, category: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 text-blue-950"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
            <textarea
              value={userIntent.description}
              onChange={(e) =>
                setUserIntent({ ...userIntent, description: e.target.value })
              }
              placeholder={`Tell us more about what you're looking to ${userIntent.type}...`}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 h-24 text-blue-950"
            />
            <div className="flex gap-2">
              <button
                onClick={handleBack}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-full"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!userIntent.category}
                className="flex-1 px-4 py-2 bg-blue-950 text-white rounded-full disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}

        {currentStep === FormStep.EMAIL && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold text-blue-950">
              Almost there!
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={inputPlaceholder}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 text-blue-950"
                required
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-full"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-950 text-white rounded-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SignupButton: React.FC<AnimatedEmailSignupProps> = ({
  buttonText,
  inputPlaceholder = `Email Address`,
  shouldUseModal = false,
  variant = `accent`,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { handleSignup, setEmail, email, signupStatus, setSignupStatus } =
    useWaitlistSignup({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(FormStep.INTENT);
  const [userIntent, setUserIntent] = useState<UserIntent>({
    type: null,
    category: ``,
    description: ``,
  });

  const handleButtonClick = useCallback(() => {
    setIsFormVisible(true);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await handleSignup(email, userIntent);
        setIsSubmitted(true);
        setIsFormVisible(false);
        setEmail(``);
        setUserIntent({ type: null, category: ``, description: `` });
        setCurrentStep(FormStep.INTENT);
      } catch (error) {
        console.error(`Signup error:`, error);
        setSignupStatus(SignupStatus.Error);
      }
    },
    [email, handleSignup, setSignupStatus, setEmail, userIntent],
  );

  const handleClose = useCallback(() => {
    setIsFormVisible(false);
    setUserIntent({ type: null, category: ``, description: `` });
    setCurrentStep(FormStep.INTENT);
  }, []);

  const messagesMap = {
    [SignupStatus.Error]: `An error occurred. Please try again.`,
    [SignupStatus.AlreadyExists]: `We already have your email. We'll keep in touch!`,
    [SignupStatus.Success]: `Thank you for signing up! We'll keep you updated!`,
  };

  const message = messagesMap[signupStatus as keyof typeof messagesMap];

  const textColor =
    variant === `countdown`
      ? `text-[#F3BC33]`
      : variant === `primary`
      ? `text-white`
      : `text-gray-900`;

  const color: Record<ButtonProps['variant'], string> = {
    primary: `bg-blue-950`,
    secondary: `bg-gray-900`,
    accent: `bg-yellow-400`,
    countdown: `text-[#F3BC33] border border-white text-[15px] rounded-3xl py-2 px-5 lg:py-2 lg:px-3`,
  };

  const baseButtonClasses = `${color[variant]} ${textColor}`.trim();

  return (
    <div className="w-full max-w-xs">
      <AnimatePresence mode="wait">
        {!isFormVisible && !isSubmitted && (
          <div className="text-center">
            <motion.button
              key="signup-button"
              className={`${baseButtonClasses} font-medium py-3 px-6 rounded-full inline-flex items-center transition duration-300`}
              onClick={handleButtonClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {buttonText}
              {variant !== `countdown` && (
                <ArrowRight className="ml-4" size={20} />
              )}
            </motion.button>
          </div>
        )}

        {isFormVisible && !shouldUseModal && (
          <motion.div
            key="signup-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FormContent
              email={email}
              setEmail={setEmail}
              handleSubmit={handleSubmit}
              inputPlaceholder={inputPlaceholder}
              userIntent={userIntent}
              setUserIntent={setUserIntent}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </motion.div>
        )}

        {isSubmitted && (
          <motion.div
            key="submitted-text"
            className="w-full px-4 py-2 text-white bg-blue-950 rounded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      {shouldUseModal && (
        <Modal isOpen={isFormVisible} onClose={handleClose} title="Sign Up">
          <FormContent
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
            inputPlaceholder={inputPlaceholder}
            userIntent={userIntent}
            setUserIntent={setUserIntent}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </Modal>
      )}
    </div>
  );
};
