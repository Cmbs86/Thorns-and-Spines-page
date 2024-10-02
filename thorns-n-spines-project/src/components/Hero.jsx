import ThornsHero from "../assets/images/hero.webp";

const Hero = () => {
  return (
    <div className="lg:block fixed w-full h-[90vh] z-0">
      {/* Background image container */}
      <div
        className="absolute w-full h-full bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{ backgroundImage: `url(${ThornsHero})` }}
      >
        {/* Container for the hero content */}
        <div className="relative w-full h-full flex flex-col justify-between">
          
          {/* Top animated heading */}
          <div className="absolute top-24 w-full">
            <h1 className="lg:text-8xl text-3xl font-bold animate-marquee w-full text-center text-tns-ash-gray-light font-sans">
              Welcome to Thorns and Spines
            </h1>
          </div>

          {/* Centered links/text */}
          {/* <div className="flex h-full items-center justify-center">
            <div className="text-center space-y-3">
              <a href="/upcoming-guests" className="block lg:text-4xl text-xl font-semibold text-white hover:text-neutral-300 transition-all">
                Upcoming Guests
              </a>
              <a href="/artists" className="block lg:text-3xl text-xl font-semibold text-white hover:text-neutral-300 transition-all">
                Meet Our Artists
              </a>
              <a href="/studio" className="block lg:text-3xl text-xl font-semibold text-white hover:text-neutral-300 transition-all">
                Tour the Studio
              </a>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default Hero;