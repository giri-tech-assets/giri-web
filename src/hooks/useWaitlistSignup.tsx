import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { VisitorType, useGetVisitorType } from './useGetVisitorType'; // Assuming this hook exists

const SIGNUP_BUYER = gql`
  mutation SignupBuyer($email: String!) {
    insert_waitlist_buyer_signup_one(object: { email: $email }) {
      email
    }
  }
`;

const SIGNUP_SELLER = gql`
  mutation SignupSeller($email: String!) {
    insert_waitlist_seller_signup_one(object: { email: $email }) {
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

  const handleSignup = async () => {
    if (!email) {
      setSignupStatus(SignupStatus.Idle);
      return;
    }

    try {
      if (isBuyer) {
        await signupBuyer({ variables: { email } });
      } else if (visitorType === 'seller') {
        await signupSeller({ variables: { email } });
      }
      setSignupStatus(SignupStatus.Success);
      setEmail('');
    } catch (error: any) {
      if (error.message.includes('Uniqueness violation')) {
        setSignupStatus(SignupStatus.AlreadyExists);
        return;
      }
      console.error('Error signing up:', error.message);
      setSignupStatus(SignupStatus.Error);
    }
  };

  return {
    email,
    setEmail,
    handleSignup,
    signupStatus,
    visitorType,
  };
};
