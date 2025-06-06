import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

type TranslationKeys = "location" | "contact";

const Footer = () => {
  const { t } = useTranslation<TranslationKeys>();
  return (
    <footer className="w-full ">
      <div className=" font-sans text-xl flex flex-wrap w-full py-8 md:max-w-[1600px] gap-4 md:gap-0  mx-auto justify-center  h-full  text-tns-ebony">
        <div className=" flex flex-col flex-wrap w-1/2 gap-4  justify-center items-center  ">
          <div className="flex items-start">
            <h3 className="text-base md:text-lg font-bold border-b-2 border-tns-ebony ">
              {t("location")}
            </h3>
          </div>
          <div className="flex text-center  text-xs md:text-sm ">
            <p>Dreilindenstraße 25, 04177 Leipzig</p>
          </div>
        </div>
        <div className=" flex flex-col w-1/2 flex-wrap gap-4  justify-center items-center  ">
          <div className="flex items-start">
            <h3 className="text-base md:text-lg font-bold border-b-2 border-tns-ebony ">
              {t("contact")}
            </h3>
          </div>
          <div className="flex text-center text-xs md:text-sm break-all ">
            <p>thornsandspinestattoo@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex text-center text-tns-ebony font-sans border-t border-tns-ebony text-xs ">
        <LanguageSwitcher />
        <p className="flex md:pr-3 py-2 md:py-4 w-full justify-center md:justify-end">
          &copy; 2020–{new Date().getFullYear()} Thorns and Spines. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
