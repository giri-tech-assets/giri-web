import { HeroBackground } from "../home-page/hero/Hero";

export const CareersHeader: React.FC = () => {
  return (
    <header className="flex flex-col justify-center self-center max-w-full text-base w-full mb-12 mt-10">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-5xl font-bold leading-tight text-center text-gray-900 mb-4 max-md:text-4xl">
          Join Our Mission to Empower Africa
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
          Be part of the fastest-growing marketplace connecting Africa to the world.
        </p>
      </div>
    </header>
  );
};

export const AboutGiri: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Who We Are</h2>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">About Giri</h3>
        <p className="text-gray-600 mb-6">
          Giri is the fastest-growing marketplace connecting Africa to the world. We empower sellers from across Africa to showcase their unique products, crafts, and culture to a global audience, making it easier than ever for people around the world to discover and buy authentic African goods. From vibrant textiles to handcrafted art, Giri is building bridges between Africa and the rest of the world, celebrating our rich heritage.
        </p>
        <p className="text-gray-600 mb-6">
          Our mission is to bring the spirit of Africa to every corner of the globe. We are not just a marketplace; we are a movement that elevates African creativity, innovation, and entrepreneurship. Join us in shaping the future of global trade—where Africa is at the center, sharing its heart with the world.
        </p>
      </div>
    </section>
  );
};
