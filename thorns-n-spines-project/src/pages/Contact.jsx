import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className="min-h-screen w-full flex flex-col items-center">
        <div className="text-center my-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-tns-ebony font-sans  ">
            {t("contact")}
          </h1>
        </div>
        <div className="w-full mx-auto flex flex-col md:flex-row flex-wrap justify-around 2xl:justify-between gap-y-10"></div>
        <div className="flex gap-20 w-full justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.6304376548464!2d12.336780076811534!3d51.33631692318685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f7f3b8c9cf13%3A0x348b2585962a6112!2sThorns%20and%20Spines!5e0!3m2!1sen!2sde!4v1730383847564!5m2!1sen!2sde"
            width="800"
            height="450"
            style={{ border: "0", borderRadius: "5px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-col gap-y-10  font-sans text-tns-ebony font-bold flex-wrap">
            <div className="">
              <h3 className="text-6xl">Our Address</h3>
            </div>
            <div className="">
              <h1 className="text-4xl">
                Dreilindenstraße 25,
                <span className="block mt-1">04177</span>
                <span className="block mt-1">Leipzig</span>
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
