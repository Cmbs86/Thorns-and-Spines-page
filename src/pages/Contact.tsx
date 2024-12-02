//layout import
import ContentLayout from "../layouts/ContentLayout.js";
//separator component and contact form component import
import AnimatedSeparator from "../components/AnimatedSeparator.tsx";
import ContactForm from "../components/ContactForm.tsx";
//translation import
import { useTranslation } from "react-i18next";
//hook import
import useMediaQuery from "../hooks/useMediaQuery.ts";

type TranslationKeys =
  | "contact"
  | "our_address"
  | "contact_us"
  | "contact_us_message";

const Contact = () => {
  const { t } = useTranslation<TranslationKeys>();

  const isBelowLg = useMediaQuery("(max-width:1024px)");

  return (
    <>
      <ContentLayout>
        <main className="w-full flex flex-col items-center">
          <div className="text-center my-10 md:mb-16 lg:mb-24">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tns-ebony font-sans  ">
              {t("contact")}
            </h1>
          </div>
          {/* map container */}
          <div
            className={`flex ${
              isBelowLg ? "flex-col" : "flex-row"
            } gap-8 px-8  w-full justify-around items-center`}
          >
            <div className="flex w-[350px] h-[200px] sm:w-[450px] sm:h-[280px] md:w-[550px] md:h-[380px] lg:w-[650px] lg:h-[480px] border-tns-ebony border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.6304376548464!2d12.336780076811534!3d51.33631692318685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f7f3b8c9cf13%3A0x348b2585962a6112!2sThorns%20and%20Spines!5e0!3m2!1sen!2sde!4v1730383847564!5m2!1sen!2sde"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* Address info container */}
            <div className="flex flex-col flex-wrap font-sans text-tns-ebony font-bold">
              <section className="flex flex-col gap-y-10  justify-center items-center">
                <div className="w-full">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl  text-center lg:text-start">
                    {t("our_address")}
                  </h3>
                </div>
                {/* change mb-10 here for more if needed and check animated separator on media queries */}
                <h1 className="mb-12 text-3xl md:text-4xl lg:text-5xl ">
                  Dreilindenstraße 25,
                  <span className="block mt-1">04177</span>
                  <span className="block mt-1">Leipzig</span>
                </h1>
              </section>
            </div>
            {isBelowLg && <AnimatedSeparator />}
          </div>
          {/* Contact form container */}
          <div
            className={`flex ${
              isBelowLg ? "flex-col" : "flex-row"
            } my-20 gap-8 px-8  w-full justify-around items-center`}
          >
            <div className="flex flex-wrap  text-tns-ebony lg:w-[750px] lg:h-[500px]    ">
              <div className="w-full text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center  font-sans font-bold mb-10 lg:mb-0 mt-5">
                  {t("contact_us")}
                </h1>
              </div>
              {/* create little text this section */}
              <div className="">
                <p className="sm:text-base md:text-lg lg:text-xl py-2 pl-1 text-center lg:text-start font-sans font-bold">
                  {t("contact_us_message")}
                </p>
              </div>
            </div>
            <div className="max-w-[600px]flex flex-col flex-wrap font-sans text-tns-ebony-dark font-bold">
              <ContactForm />
            </div>
          </div>
          <AnimatedSeparator />
        </main>
      </ContentLayout>
    </>
  );
};

export default Contact;
