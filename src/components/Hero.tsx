import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import newBanner from "../assets/images/banner.webp";

type TranslationKeys = "welcome";
const Hero = () => {
  const { t } = useTranslation<TranslationKeys>();

  return (
    <div className="relative w-full h-[calc(100vh-17.2rem)] z-0 overflow-hidden ">
      {/* Background image container */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          backgroundImage: `url(${newBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        aria-label="A scenic banner image showcasing a tattoo studio background"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Container for the hero content */}
      <motion.div
        className="relative flex justify-center text-center items-end pb-14  sm:pb-28 h-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4.2, delay: 0.7 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-bold  text-tns-ash-gray-light font-sans">
          {t("welcome")}
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;
