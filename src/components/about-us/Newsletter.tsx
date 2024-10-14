import React, { useState } from 'react';
import { SignupStatus, useWaitlistSignup } from '../../hooks/useWaitlistSignup';
import { Notification } from '../../components/common/Notification';

const newsletterConfig = {
  styles: {
    section:
      'flex overflow-hidden flex-col justify-center items-center px-16 py-20 w-full bg-amber-400 max-md:px-5 max-md:max-w-full',
    contentWrapper:
      'flex flex-col gap-10 justify-center items-center max-w-2xl text-center',
    textContainer:
      'flex flex-col justify-center items-center text-center min-w-[240px] text-slate-800',
    heading: 'text-3xl font-bold tracking-tight leading-none',
    paragraph: 'mt-1.5 text-base font-medium tracking-tight leading-loose',
    form: 'flex flex-col items-center w-full max-w-md',
    inputContainer:
      'flex flex-col sm:flex-row gap-5 justify-center w-full bg-white rounded-lg p-2',
    inputWrapper:
      'flex gap-2 items-center w-full text-base font-medium tracking-tight text-neutral-500',
    inputIcon: 'object-contain shrink-0 w-7 aspect-square',
    input: 'bg-transparent border-none focus:outline-none w-full',
    button:
      'px-7 py-4 text-sm font-bold tracking-tight leading-none text-white rounded bg-violet-950 w-full sm:w-auto min-w-[120px] hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-900',
  },
  content: {
    heading: 'Join the waitlist',
    paragraph:
      'Be the first to know when we launch the future of the African market place!',
    inputPlaceholder: 'Enter email address...',
    buttonText: 'Join Now',
  },
  icons: {
    email:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/9d7628973a3e6b543d87cbd46d4e5d847a2feb8d69b8feeb8acbfc3434a691dc?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
  },
};

export const Newsletter: React.FC = () => {
  const { handleSignup, setEmail, email, signupStatus, setSignupStatus } =
    useWaitlistSignup();
  const [showToast, setShowToast] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignupStatus(SignupStatus.Idle);
    handleSignup();
    setShowToast(true);
  };

  const messagesMap = {
    [SignupStatus.Error]: 'An error occurred. Please try again.',
    [SignupStatus.AlreadyExists]:
      'You are already on the waitlist. We`ll keep you updated!',
    [SignupStatus.Success]:
      'You are in! You will be the first to know when we are live.',
  };

  const message = messagesMap[signupStatus as keyof typeof messagesMap];
  const status =
    signupStatus === SignupStatus.Success
      ? 'success'
      : signupStatus === SignupStatus.Error
      ? 'error'
      : 'info';

  return (
    <section id={'newsletter'} className={newsletterConfig.styles.section}>
      {showToast && (
        <Notification
          key={signupStatus}
          type={status}
          message={message}
          onClose={() => setShowToast(false)}
        />
      )}
      <div className={newsletterConfig.styles.contentWrapper}>
        <div className={newsletterConfig.styles.textContainer}>
          <h2 className={newsletterConfig.styles.heading}>
            {newsletterConfig.content.heading}
          </h2>
          <p className={newsletterConfig.styles.paragraph}>
            {newsletterConfig.content.paragraph}
          </p>
        </div>
        <form className={newsletterConfig.styles.form} onSubmit={onSubmit}>
          <div className={newsletterConfig.styles.inputContainer}>
            <div className={newsletterConfig.styles.inputWrapper}>
              <img
                loading="lazy"
                src={newsletterConfig.icons.email}
                alt=""
                className={newsletterConfig.styles.inputIcon}
              />
              <label htmlFor="emailInput" className="sr-only">
                {newsletterConfig.content.inputPlaceholder}
              </label>
              <input
                type="email"
                id="emailInput"
                placeholder={newsletterConfig.content.inputPlaceholder}
                className={newsletterConfig.styles.input}
                aria-label={newsletterConfig.content.inputPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={newsletterConfig.styles.button}>
              {newsletterConfig.content.buttonText}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
