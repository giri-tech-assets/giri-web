import React from 'react';

interface ReviewCardProps {
  platform: string;
  logo: string;
  rating: string;
  reviewCount: number;
  stars: string[];
}

const reviewCardConfig = {
  styles: {
    container: "flex overflow-hidden flex-col justify-center px-4 py-3.5 rounded-xl min-w-[240px]",
    content: "flex gap-3 items-center",
    logo: "object-contain shrink-0 self-stretch my-auto w-16 aspect-square",
    infoContainer: "flex flex-col self-stretch my-auto",
    platformName: "text-base font-extrabold tracking-wider leading-none text-gray-900 uppercase",
    ratingContainer: "flex gap-2 justify-center items-center self-start mt-1.5",
    ratingText: "self-stretch my-auto text-base tracking-wider leading-none text-gray-900 uppercase",
    starsContainer: "flex gap-1 items-end self-stretch my-auto",
    star: "object-contain shrink-0 w-3.5 aspect-[0.93]",
    reviewCount: "mt-1.5 text-base tracking-wider leading-none text-gray-900",
  },
  defaultAltText: {
    logo: "Platform logo",
    star: "Rating star",
  },
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ platform, logo, rating, reviewCount, stars }) => {
  const { styles, defaultAltText } = reviewCardConfig;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img loading="lazy" src={logo} alt={`${platform} ${defaultAltText.logo}`} className={styles.logo} />
        <div className={styles.infoContainer}>
          <div className={styles.platformName}>
            {platform}
          </div>
          <div className={styles.ratingContainer}>
            <div className={styles.ratingText}>
              {rating}
            </div>
            <div className={styles.starsContainer}>
              {stars.map((star, index) => (
                <img key={index} loading="lazy" src={star} alt={defaultAltText.star} className={styles.star} />
              ))}
            </div>
          </div>
          <div className={styles.reviewCount}>
            Based on {reviewCount} reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
