import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ThornsHero from "../assets/images/hero.webp";
import bannerNew from "../assets/images/bannerNew.webp";
import anotherBanner from "../assets/images/anotherBanner.webp";

const Hero = () => {
  const { t } = useTranslation();
 
  return (
    <div className="relative w-full h-[80vh] z-0 overflow-hidden ">
      {/* Background image container */}
      <motion.div
       
        className="absolute w-full h-full"
        style={{
         
          backgroundImage: `url(${anotherBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
     <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Container for the hero content */}
      <motion.div
        className="relative flex justify-center text-center items-end pb-14  sm:pb-28 h-full"
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold  text-tns-ash-gray-light font-sans">
         {t("welcome")}
        </h1>
      </motion.div>
    </div>
    /* Work on the positioning here: Change absolute, fixed and relative. This might fix the problem with the footer, and the "hidden" on media queries. */
  );
};

export default Hero;
