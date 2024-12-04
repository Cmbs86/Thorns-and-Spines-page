import ContentLayout from "../layouts/ContentLayout";
import { motion } from "framer-motion";
// import thorns_logo from "../assets/images/thorns_black.webp";
import { useTranslation } from "react-i18next";
import AnimatedSeparator from "../components/AnimatedSeparator";
import thorns_round from "../assets/images/thorns_round.webp";
type TranslationKeys = "store" | "store_text"| "store_button";


const NotFound = () => {
  const { t } = useTranslation<TranslationKeys>();
  return (
    <>
     <ContentLayout>
  <main className="w-full flex flex-col items-center justify-between">
    <div className="text-center my-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tns-ebony font-sans">
        {t("not_found_header")}
      </h1>
    </div>

    <div className="max-w-[1600px] mx-auto flex flex-col justify-center gap-y-10 items-center">
      <div className=" rounded-lg text-center">
        <img
          src={thorns_round}
          alt="Thorns and Spines logo"
          title="Thorns and Spines logo"
          className="rounded-full w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[480px] lg:h-[480px] xl:w-[500px] xl:h-[500px] object-cover mx-auto"
        />
      </div>

      <div className="2xl:p-8 flex justify-center">
        <p className="sm:text-xl md:text-2xl lg:text-3xl  text-center text-tns-ebony font-sans font-bold max-w-lg">
          {t("not_found")}
        </p>
      </div>

      <motion.a
        href="/"
        rel="noopener noreferrer"
        className="text-center px-6 py-3 bg-tns-ebony text-tns-mint-cream font-medium sm:text-base md:text-lg lg:text-xl shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {t("back_to_home")}
      </motion.a>
    </div>

  </main>
    <AnimatedSeparator />
</ContentLayout>

    </>
  );
}

export default NotFound