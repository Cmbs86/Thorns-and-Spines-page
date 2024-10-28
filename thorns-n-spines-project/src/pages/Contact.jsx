import { useTranslation } from "react-i18next";


const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="text-center my-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-tns-ebony font-sans  ">
            {t("contact")}
          </h1>
        </div>
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row flex-wrap justify-around 2xl:justify-between gap-y-10">


        </div>
      </main>
    </>
  );
};

export default Contact;
