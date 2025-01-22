import { useState, useEffect, useCallback } from 'react';
import { SignupButton } from './common/SignupButton';

const LAUNCH_DATE = new Date(`February 10, 2025 00:00:00`).getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountDownProps = {
  targetDate?: string;
  liveText?: string;
};

const CountDown = ({
  targetDate = new Date(LAUNCH_DATE).toISOString(),
  liveText,
}: CountDownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLive, setIsLive] = useState(false);

  const calculateTimeLeft = useCallback(() => {
    const targetDateTime = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = targetDateTime - now;

    if (difference <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setIsLive(true);
      return;
    }

    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    });
  }, [targetDate]);

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex items-center">
      <span>{value}</span>
      <p className="text-[#9D9DD1]">{label}</p>
    </div>
  );

  const backgroundPattern = `https://raw.githubusercontent.com/giri-tech-assets/web-images/f6655552e6d92f0a4ccf05d5c85be16d2eaffb53/african-pattern.svg`;

  return (
    <div
      className="w-full bg-[#020089] sticky -top-0.5 z-40 -my-0.5"
      style={{
        backgroundImage: `url('${backgroundPattern}')`,
      }}
    >
      <div
        className={`${
          isLive ? `max-w-[496px]` : `max-w-7xl`
        } mx-auto flex flex-col lg:flex-row gap-2 justify-between items-center lg:text-xl py-3 font-semibold text-white`}
      >
        {isLive ? (
          liveText ? (
            <p className="text-2xl">{liveText}</p>
          ) : (
            <p className="text-2xl">
              We are
              <span className="text-[#F26868]"> LIVE </span>!!!!!
            </p>
          )
        ) : (
          <>
            <p>
              Going <span className="text-[#F26868]">Live</span>
              <span className="text-[13px] lg:text-[15px] ml-5">in</span>
            </p>
            <div className="flex items-center gap-5 lg:gap-[60px]">
              <TimeUnit value={timeLeft.days} label="days" />
              <div className="flex items-center gap-5">
                <TimeUnit value={timeLeft.hours} label="hr" />
                <p className="text-xl">:</p>
                <TimeUnit value={timeLeft.minutes} label="min" />
                <p className="text-xl">:</p>
                <TimeUnit value={timeLeft.seconds} label="sec" />
              </div>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 min-w-[200px] text-[15px]">
          <SignupButton
            buttonText="Join the waitlist"
            variant="countdown"
            shouldUseModal={true}
            inputPlaceholder={`Email Address`}
            submittedText="Thank you for signing up!"
          />
        </div>
      </div>
    </div>
  );
};

export default CountDown;
