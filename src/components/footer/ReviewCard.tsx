import React from 'react';

interface ReviewCardProps {
  platform: string;
  logo: string;
  rating: string;
  reviewCount: number;
  stars: string[];
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ platform, logo, rating, reviewCount, stars }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-4 py-3.5 rounded-xl min-w-[240px]">
      <div className="flex gap-3 items-center">
        <img loading="lazy" src={logo} alt={`${platform} logo`} className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square" />
        <div className="flex flex-col self-stretch my-auto">
          <div className="text-base font-extrabold tracking-wider leading-none text-gray-900 uppercase">
            {platform}
          </div>
          <div className="flex gap-2 justify-center items-center self-start mt-1.5">
            <div className="self-stretch my-auto text-base tracking-wider leading-none text-gray-900 uppercase">
              {rating}
            </div>
            <div className="flex gap-1 items-end self-stretch my-auto">
              {stars.map((star, index) => (
                <img key={index} loading="lazy" src={star} alt="" className="object-contain shrink-0 w-3.5 aspect-[0.93]" />
              ))}
            </div>
          </div>
          <div className="mt-1.5 text-base tracking-wider leading-none text-gray-900">
            Based on {reviewCount} reviews
          </div>
        </div>
      </div>
    </div>
  );
};

