import ThornsHero from "../assets/images/hero.webp";

const Hero = () => {
  return (
    <div className="fixed w-full h-[87vh] ">
      {/* Background image container */}
      <div
        className="absolute w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${ThornsHero})` }}
      >
        {/* Container for the hero content */}
        <div className="relative w-full h-full flex flex-col justify-between  ">
          
          {/* Top animated heading */}
          <div className="absolute bottom-10 w-full">
            <h1 className="text-5xl md:text-6xl font-bold animate-marquee w-full text-center text-tns-ash-gray-light font-sans">
              Welcome to Thorns and Spines
            </h1>
          </div>
          
        </div>
      </div>
    </div>
    /* Work on the positioning here: Change absolute, fixed and relative. This might fix the problem with the footer, and the "hidden" on media queries. */
  );
};

export default Hero;