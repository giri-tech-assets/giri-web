import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from './Modal';
import { ArrowRight } from 'lucide-react';
import { SignupStatus, useWaitlistSignup } from '@/hooks/useWaitlistSignup';
import { ButtonProps } from './Button';

interface AnimatedEmailSignupProps {
  buttonText: string;
  inputPlaceholder?: string;
  submittedText?: string;
  shouldUseModal?: boolean;
  variant?: 'primary' | 'secondary' | 'accent';
}

interface FormContentProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  inputPlaceholder: string;
  variant?: ButtonProps['variant'];
}

const FormContent: React.FC<FormContentProps> = ({
  email,
  setEmail,
  handleSubmit,
  inputPlaceholder,
  variant = 'accent',
}) => {
  return (
    <form className="flex flex-col sm:flex-row w-full" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={inputPlaceholder}
        className="flex-grow min-w-[200px] px-4 py-2 border border-gray-300 rounded-t sm:rounded-l sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-blue-900 text-blue-950"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 mt-2 sm:mt-0 text-blue-950 bg-yellow-400 hover:bg-yellow-500 rounded-b sm:rounded-r sm:rounded-b-none font-semibold transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export const SignupButton: React.FC<AnimatedEmailSignupProps> = ({
  buttonText,
  inputPlaceholder = 'Email Address',
  shouldUseModal = false,
  variant = 'accent',
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { handleSignup, setEmail, email, signupStatus, setSignupStatus } =
    useWaitlistSignup();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleButtonClick = useCallback(() => {
    setIsFormVisible(true);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await handleSignup(email);
        setIsSubmitted(true);
        setIsFormVisible(false);
        setEmail('');
      } catch (error) {
        console.error('Signup error:', error);
        setSignupStatus(SignupStatus.Error);
      }
    },
    [email, handleSignup, setSignupStatus, setEmail],
  );

  const handleClose = useCallback(() => {
    setIsFormVisible(false);
  }, []);

  const messagesMap = {
    [SignupStatus.Error]: 'An error occurred. Please try again.',
    [SignupStatus.AlreadyExists]:
      'You are already on the waitlist. We`ll keep you updated!',
    [SignupStatus.Success]: "Thank you for signing up! We'll keep you updated!",
  };

  const message = messagesMap[signupStatus as keyof typeof messagesMap];

  const textColor = variant === 'primary' ? 'text-white' : 'text-gray-900';
  const color: Record<ButtonProps['variant'], string> = {
    primary: 'bg-blue-950',
    secondary: 'bg-gray-900',
    accent: 'bg-yellow-400',
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
              <ArrowRight className={'ml-4'} size={20} />
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
          />
        </Modal>
      )}
    </div>
  );
};
