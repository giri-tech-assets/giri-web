import { useCallback, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { VisitorType, useGetVisitorType } from './useGetVisitorType';
import { UserIntent } from '@/components/common/SignupButton';

interface SignupResponse {
  success: boolean;
  message: string;
  error?: string;
}

const SIGNUP_BUYER = gql`
  mutation SignupBuyer(
    $email: String!
    $category: String
    $description: String
    $type: String
  ) {
    insert_waitlist_signup_one(
      object: {
        email: $email
        category: $category
        description: $description
        type: $type
      }
    ) {
      email
    }
  }
`;

export enum SignupStatus {
  Success = `success`,
  Error = `error`,
  AlreadyExists = `already_exists`,
  Idle = `idle`,
}

type SignupType = 'waitlist' | 'newsletter' | 'job';

interface SignupRequest {
  signupType?: SignupType;
}

export const useWaitlistSignup = ({
  signupType = `newsletter`,
}: SignupRequest) => {
  const [email, setEmail] = useState(``);
  const [signupStatus, setSignupStatus] = useState<SignupStatus>(
    SignupStatus.Idle,
  );
  const { visitorType } = useGetVisitorType();

  const [signupBuyer] = useMutation(SIGNUP_BUYER);
  const isBuyer = visitorType === VisitorType.Buyer;

  const handleSignup = useCallback(
    async (emailToSignup: string, userIntent: UserIntent) => {
      if (!emailToSignup) {
        setSignupStatus(SignupStatus.Idle);
        return;
      }

      try {
        if (isBuyer) {
          await signupBuyer({
            variables: { email: emailToSignup, ...userIntent },
          });
        }
        sendSignupRequest({
          email: emailToSignup,
          type: visitorType,
        });
        setSignupStatus(SignupStatus.Success);
        // We're not resetting the email here anymore
      } catch (error: any) {
        if (error.message.includes(`Uniqueness violation`)) {
          setSignupStatus(SignupStatus.AlreadyExists);
          return;
        }
        console.error(`Error signing up:`, error.message);
        setSignupStatus(SignupStatus.Error);
      }
    },
    [isBuyer, visitorType, signupBuyer],
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

export async function sendSignupRequest({
  email,
  type,
}: {
  email: string;
  type: VisitorType;
  coverLetter?: string;
  resume?: string;
  name?: string;
}): Promise<SignupResponse> {
  try {
    const response = await fetch(
      `${process.env.GATSBY_GCLOUD_MAILER_ENDPOINT}`,
      {
        method: `POST`,
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify({
          receiver_email: email,
          template_type: type,
          // TODO: fix for job application
          // name,
          // coverLetter,
          // resume,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: SignupResponse = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return {
      success: true,
      message: data.message || `Signup successful`,
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes(`Uniqueness violation`)) {
        return {
          success: false,
          message: `User already exists`,
          error: `ALREADY_EXISTS`,
        };
      }
      return {
        success: false,
        message: `Error during signup: ${error.message}`,
        error: `SIGNUP_FAILED`,
      };
    }
    return {
      success: false,
      message: `An unknown error occurred`,
      error: `UNKNOWN_ERROR`,
    };
  }
}
