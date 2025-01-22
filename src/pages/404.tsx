import { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          if (typeof window !== `undefined`) {
            window.location.href = `/`;
          }
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020089]">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md">
        <h1 className="text-6xl font-bold text-[#020089] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <p className="text-gray-600 mb-6">
          Redirecting to home page in{` `}
          <span className="font-bold text-[#FFA500]">{countdown}</span>
          {` `}
          seconds...
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#FFA500] text-white font-semibold rounded-lg shadow-md hover:bg-[#FF8C00] transition-colors duration-300"
        >
          Go Home Now
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
