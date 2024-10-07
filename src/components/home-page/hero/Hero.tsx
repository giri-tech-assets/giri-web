import { HeroMessage } from './hero-message/HeroMessage';
import Background from './african-pattern.svg';
import HomeImage from '@/assets/images/home-image.svg';

export const HeroBackground = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}
    />
  );
};

export const MainHeroSection = () => {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
      <section className="relative w-full overflow-hidden bg-[#020089] pb-20 pt-14 px-5">
        <HeroBackground />
        <div className="relative z-10 w-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch w-full">
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <HeroMessage />
              </div>
              <div className="w-full lg:w-1/2 flex-shrink-0 flex justify-center items-center">
                <div className="w-full max-w-[80vw] mx-auto lg:max-w-none">
                  <HomeImage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainHeroSection;
