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
          {/* map container */}
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
            {/* Address info container */}
            <div className="flex flex-col flex-wrap font-sans text-tns-ebony font-bold">
              <section className="flex flex-col gap-y-10  justify-center items-center">
                <div className="w-full">
                  <h3 className="text-3xl md:text-4xl lg:text-6xl text-center lg:text-start">
                    Our Address:
                  </h3>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl">
                  Dreilindenstraße 25,
                  <span className="block mt-1">04177</span>
                  <span className="block mt-1">Leipzig</span>
                </h1>

                <div className="max-w-[600px]">
                  <p className="lg:text-xl py-2 pl-1 text-center lg:text-start   ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus voluptatum commodi doloribus consequatur est quis,
                    esse consequuntur suscipit voluptas adipisci placeat
                    similique nam quaerat libero quod omnis tempora quia facilis
                    provident nesciunt dolorem perferendis quae delectus. Nihil
                    soluta, iusto pariatur voluptas ex animi recusandae aliquam.
                    Rerum quos pariatur expedita cum?
                  </p>
                </div>
              </section>
            </div>
          </div>
          <AnimatedSeparator />
          {/* Contact form container */}
          <div className="flex flex-wrap gap-12  w-full justify-around items-center">
          <div className="text-6xl text-tns-ebony    border-tns-ebony border  ">
            <div className="">
              <h1 className="">Contact Us</h1>
              </div>
              <div className="max-w-[600px]">
                  <p className="lg:text-xl py-2 pl-1 text-center lg:text-start   ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus voluptatum commodi doloribus consequatur est quis,
                    esse consequuntur suscipit voluptas adipisci placeat
                    similique nam quaerat libero quod omnis tempora quia facilis
                    provident nesciunt dolorem perferendis quae delectus. Nihil
                    soluta, iusto pariatur voluptas ex animi recusandae aliquam.
                    Rerum quos pariatur expedita cum?
                  </p>
                </div>
            </div>
            <div className="flex flex-col flex-wrap font-sans text-tns-ebony font-bold">
              <section className="flex flex-col gap-y-10  justify-center items-center">
              <form className="w-full max-w-lg bg-tns-mint-cream p-8 rounded-lg shadow-lg">
        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-tns-ebony-dark text-lg font-medium mb-2">
            Name <span className="text-tns-ash-gray-light text-sm">(required)</span>
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-tns-ash-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-tns-ebony"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border border-tns-ash-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-tns-ebony"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-tns-ebony-dark text-lg font-medium mb-2">
            Email <span className="text-tns-ash-gray-light text-sm">(required)</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-tns-ash-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-tns-ebony"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-tns-ebony-dark text-lg font-medium mb-2">
            Message <span className="text-tns-ash-gray-light text-sm">(required)</span>
          </label>
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-3 border border-tns-ash-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-tns-ebony"
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 text-tns-ebony-dark border-2 border-tns-ebony rounded-full font-semibold hover:bg-tns-ebony-dark hover:text-tns-mint-cream transition-colors"
          >
            SEND
          </button>
        </div>
      </form>
                
              </section>
            </div>
          </div>
        </main>
      </ContentLayout>

      {/*   <div className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="name" className="text-tns-ebony font-bold">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border-tns-ebony border p-2"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="email" className="text-tns-ebony font-bold">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border-tns-ebony border p-2"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="message" className="text-tns-ebony font-bold">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="border-tns-ebony border p-2"
                  ></textarea>
                </div>
                <button className="bg-tns-ebony text-white font-bold p-2">
                  Send
                </button>
              </div> */}
    </>
  );
};

export default Contact;
