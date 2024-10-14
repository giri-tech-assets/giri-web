import { useCallback, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { VisitorType, useGetVisitorType } from './useGetVisitorType';

const SIGNUP_BUYER = gql`
  mutation SignupBuyer($email: String!) {
    insert_waitlist_buyer_signup_one(object: { email: $email }) {
      email
    }
  }
`;

const SIGNUP_SELLER = gql`
  mutation SignupSeller($email: String!) {
    insert_waitlist_signup_seller_one(object: { email: $email }) {
      email
    }
  }
`;

export enum SignupStatus {
  Success = 'success',
  Error = 'error',
  AlreadyExists = 'already_exists',
  Idle = 'idle',
}

export const useWaitlistSignup = () => {
  const [email, setEmail] = useState('');
  const [signupStatus, setSignupStatus] = useState<SignupStatus>(
    SignupStatus.Idle,
  );
  const { visitorType } = useGetVisitorType();

  const [signupBuyer] = useMutation(SIGNUP_BUYER);
  const [signupSeller] = useMutation(SIGNUP_SELLER);
  const isBuyer = visitorType === VisitorType.Buyer;

  const handleSignup = useCallback(
    async (emailToSignup: string) => {
      if (!emailToSignup) {
        console.log('emailo', { emailToSignup });
        setSignupStatus(SignupStatus.Idle);
        return;
      }

      try {
        if (isBuyer) {
          await signupBuyer({ variables: { email: emailToSignup } });
        } else if (visitorType === 'seller') {
          await signupSeller({ variables: { email: emailToSignup } });
        }
        setSignupStatus(SignupStatus.Success);
        // We're not resetting the email here anymore
      } catch (error: any) {
        if (error.message.includes('Uniqueness violation')) {
          setSignupStatus(SignupStatus.AlreadyExists);
          return;
        }
        console.error('Error signing up:', error.message);
        setSignupStatus(SignupStatus.Error);
      }
    },
    [isBuyer, visitorType, signupBuyer, signupSeller],
  );

  return {
    email,
    setEmail,
    handleSignup,
    signupStatus,
    visitorType,
    setSignupStatus,
  };
};
