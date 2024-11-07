import AnimatedSeparator from "../components/AnimatedSeparator.jsx";
import ContentLayout from "../layouts/ContentLayout.jsx";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <>
    <ContentLayout>
      <main className="min-h-screen w-full flex flex-col items-center">
        <div className="text-center mt-10 mb-10 md:mb-16   lg:mb-24">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-tns-ebony font-sans  ">
            {t("contact")}
          </h1>
        </div>
      
        <div className="flex flex-wrap gap-12  w-full justify-around items-center">
          <div className="flex  w-[450px] h-[280px] sm:w-[550px] sm:h-[380px]  md:w-[650px] md:h-[480px] lg:w-[750px] lg:h-[500px]  border-tns-ebony border  ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.6304376548464!2d12.336780076811534!3d51.33631692318685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f7f3b8c9cf13%3A0x348b2585962a6112!2sThorns%20and%20Spines!5e0!3m2!1sen!2sde!4v1730383847564!5m2!1sen!2sde"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>

          <div className="flex flex-col flex-wrap font-sans text-tns-ebony font-bold">
            <div className="flex flex-col gap-y-10  justify-center items-center">
            <div className="w-full">
              <h3 className="text-3xl md:text-4xl lg:text-6xl text-center lg:text-start">Our Address:</h3>
            </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl">
                Dreilindenstraße 25,
                <span className="block mt-1">04177</span>
                <span className="block mt-1">Leipzig</span>
              </h1>
              
                <div className="max-w-[600px]">
               <p className="lg:text-xl py-2 pl-1 text-center lg:text-start   ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatum commodi doloribus consequatur est quis, esse consequuntur suscipit voluptas adipisci placeat similique nam quaerat libero quod omnis tempora quia facilis provident nesciunt dolorem perferendis quae delectus. Nihil soluta, iusto pariatur voluptas ex animi recusandae aliquam. Rerum quos pariatur expedita cum?</p>
               </div>
             
            </div>
            
          </div>

        </div>
        <AnimatedSeparator />
      </main>
      </ContentLayout>
    </>
  );
};

export default Contact;
