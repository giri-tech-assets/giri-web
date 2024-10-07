import React from 'react';
import {PrivacyLinks} from './PrivacyLinks';
import {ReviewCard} from './ReviewCard';
import {LanguageCurrencySelector} from './LanguageCurrencySelector';

export const Footer: React.FC = () => {
  const reviewData = [
    {
      platform: 'Google',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dc5f8189720888926630a1f7f40eaa0da637feef91e534a1053886cfd93dbbf2?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
      rating: '4,9',
      reviewCount: 28,
      stars: [
        'https://cdn.builder.io/api/v1/image/assets/TEMP/caac742ca21c39a026427100581e4a6382888ae8e7d6006bdee0b46dd95733bc?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/954937aff05a37eeb54361026c28c08db3c3922588a3b76f1a4b2ebd8bb1a4dd?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/a766ca904c06ca4781f2804f125624972750bc5a748310bc53ce094dac713682?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/a6052f6a5be9455572e4c179acbc23509631ae730961c8d724933eca77820ba9?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/3cdc93abfa00bfb3e2ff02e1077bf21b683d8791930479e267cd40f244abde95?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e'
      ]
    },
    {
      platform: 'Facebook',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d85010e2c5f9c05418aac8313ccc2ea3486ae0cbd3bc568fb4bbe95a9e958d8?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
      rating: '5',
      reviewCount: 17,
      stars: [
        'https://cdn.builder.io/api/v1/image/assets/TEMP/8f40770081d3ec96a678a4ba8deaceb6f9dc636738c89030dc2d78307755891a?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/954937aff05a37eeb54361026c28c08db3c3922588a3b76f1a4b2ebd8bb1a4dd?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/a766ca904c06ca4781f2804f125624972750bc5a748310bc53ce094dac713682?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/a6052f6a5be9455572e4c179acbc23509631ae730961c8d724933eca77820ba9?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/c2feca837d3649f58cc969d42237ef5b74049d326b3317723147e94569fc8253?placeholderIfAbsent=true&apiKey=f547751f91f54b6a805677abc411ee2e'
      ]
    }
  ];

  return (
    <footer className="flex flex-wrap gap-10 justify-between items-center px-8 py-1.5 bg-white rounded-2xl shadow-[33px_39px_52px_rgba(179,176,201,0.1)] max-md:px-5">
      <PrivacyLinks />
      <div className="flex flex-wrap gap-4 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
        {reviewData.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <LanguageCurrencySelector />
    </footer>
  );
};


