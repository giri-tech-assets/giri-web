import { HeroMessage } from './hero-message/HeroMessage';


export const HeroBackground = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url('https://raw.githubusercontent.com/giri-tech-assets/web-images/f6655552e6d92f0a4ccf05d5c85be16d2eaffb53/african-pattern.svg')`,
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
                  <img src={'https://raw.githubusercontent.com/giri-tech-assets/web-images/f6655552e6d92f0a4ccf05d5c85be16d2eaffb53/home-Image.svg'} alt="home-hero" loading='lazy' />
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
