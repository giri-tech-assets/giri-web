import React, { useState, ReactNode, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from './Modal';
import { ArrowRight } from 'lucide-react';
import { SignupStatus, useWaitlistSignup } from '@/hooks/useWaitlistSignup';

interface AnimatedEmailSignupProps {
  buttonText: string;
  inputPlaceholder?: string;
  submittedText?: string;
  shouldUseModal?: boolean;
}

interface FormContentProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  inputPlaceholder: string;
}

const FormContent: React.FC<FormContentProps> = React.memo(
  ({ email, setEmail, handleSubmit, inputPlaceholder }) => (
    <form className="flex w-full" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={inputPlaceholder}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-900 text-blue-950"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 text-blue-950 bg-yellow-400 hover:bg-yellow-500 rounded-r font-semibold transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  ),
);

export const SignupButton: React.FC<AnimatedEmailSignupProps> = ({
  buttonText,
  inputPlaceholder = 'Email Address',
  submittedText = 'Thank you for signing up!',
  shouldUseModal = false,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { handleSignup, setEmail, email, signupStatus, setSignupStatus } =
    useWaitlistSignup();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleButtonClick = useCallback(() => {
    setIsFormVisible(true);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log('called');
      handleSignup();
      setIsSubmitted(true);
      setIsFormVisible(false);
    },
    [signupStatus],
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

  console.log('signupStatus', signupStatus, email);

  return (
    <div className="w-80">
      <AnimatePresence mode="wait">
        {!isFormVisible && !isSubmitted && (
          <div className="text-center">
            <motion.button
              key="signup-button"
              className="bg-yellow-400 hover:bg-blue-950 hover:text-white  text-blue-950 font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
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
            className="w-full px-4 py-2 text-center text-white bg-blue-950 rounded font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {submittedText}
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
