import { motion } from "framer-motion";
import ThornsHero from "../assets/images/hero.webp";

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] z-0 overflow-hidden ">
      {/* Background image container */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          backgroundImage: `url(${ThornsHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      {/* Container for the hero content */}
      <motion.div
        className="relative flex justify-center items-center h-full"
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold  text-tns-ash-gray-light font-sans">
          Welcome to Thorns and Spines
        </h1>
      </motion.div>
    </div>
    /* Work on the positioning here: Change absolute, fixed and relative. This might fix the problem with the footer, and the "hidden" on media queries. */
  );
};

export default Hero;
