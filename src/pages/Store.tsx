import ContentLayout from "../layouts/ContentLayout";
import { motion } from "framer-motion";
import thorns_logo from "../assets/images/thorns_black.webp";
import { useTranslation } from "react-i18next";
import AnimatedSeparator from "../components/AnimatedSeparator";

type TranslationKeys = "store";

const Store = () => {
  const { t } = useTranslation<TranslationKeys>();
  return (
    <>
      <ContentLayout>
        <div className="text-center my-10 md:mb-16 lg:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-tns-ebony font-sans  ">
            {t("store")}
          </h1>
        </div>
        <main className=" min-h-screen w-full flex flex-col items-center justify-center ">
          <div className="flex items-center">
            <div className="max-w-[1600px] mx-auto flex flex-col justify-center gap-y-10  ">
              <div className="p-8 rounded-lg text-center  ">
                <img
                  src={thorns_logo}
                  alt="Thorns and Spines logo"
                  title="Thorns and Spines logo"
                  className="rounded-full w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] xl:w-[475px] xl:h-[475px] object-cover mx-auto"
                ></img>
              </div>
              <div className="flex justify-center">
                <p className="text-2xl text-center text-tns-ebony font-sans font-bold max-w-lg ">
                  Explore our exclusive collection of merchandise and artwork.
                  Click the button below to visit our Big Cartel store and shop
                  your favorites today!
                </p>
              </div>
              <motion.a
                href="https://thornsandspines.bigcartel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-10 py-3 bg-tns-ebony text-tns-mint-cream font-medium text-lg rounded-lg shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Our Store
              </motion.a>
            </div>
          </div>
          {/* <div className="flex flex-col items-center justify-center gap-y-10 min-h-screen pb-32 ">
          <img className="rounded-full w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] xl:w-[475px] xl:h-[475px] object-cover mx-auto bg-center  " src={thorns_logo} alt="" />
          <h1 className="text-3xl font-bold"></h1>
          <p className="text-2xl text-center text-tns-ebony font-sans font-bold max-w-lg ">
            Explore our exclusive collection of merchandise and artwork. Click
            the button below to visit our Big Cartel store and shop your
            favorites today!
          </p>
          <motion.a
           href="https://thornsandspines.bigcartel.com/"
           target="_blank"
           rel="noopener noreferrer"
           className="px-6 py-3 bg-tns-ebony text-tns-mint-cream font-medium text-lg rounded-lg shadow-md"
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
          >
            Visit Our Store
          </motion.a>
        </div> */}
        <AnimatedSeparator />
        </main>
      </ContentLayout>
    </>
  );
};

export default Store;
