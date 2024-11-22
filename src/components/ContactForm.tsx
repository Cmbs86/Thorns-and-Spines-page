import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type TranslationKeys =
  | "first_name"
  | "last_name"
  | "message"
  | "send"
  | "sending"
  | "sent";

const ContactForm = () => {
  const { t } = useTranslation<TranslationKeys>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean | null>(false);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_PUBLIC_KEY
        // console.log(import.meta.env.VITE_SERVICE_ID)
      )
      .then(
        () => {
          setIsSent(true);
          setIsSubmitting(false);
          setTimeout(() => {
            setIsSent(null);
          }, 7000); // hide message after 7 seconds
        },
        (error) => {
          console.error("Failed to send email. Error: ", error);
          setIsSubmitting(false);
        }
      );

    // Clears the form after sending the email
    (e.target as HTMLFormElement).reset();
  };
  return (
    <form className="md:w-[600px]" onSubmit={sendEmail}>
      {/* Name field */}
      <label className="block text-tns-ebony-dark text-lg  font-medium mb-2">
        Name
      </label>
      <div className="flex space-x-4">
        <input
          type="text"
          name="first_name"
          placeholder={t("first_name")}
          required
          className="w-full p-3 bg-tns-mint-cream border border-tns-ash-gray-light  focus:outline-none focus:ring-2 focus:ring-tns-ebony"
        />
        <input
          type="text"
          name="last_name"
          placeholder={t("last_name")}
          required
          className="w-full p-3  bg-tns-mint-cream  border border-tns-ash-gray-light  focus:outline-none focus:ring-2 focus:ring-tns-ebony"
        />
      </div>
      {/* Email field */}
      <div className="mb-6">
        <label className="block text-tns-ebony-dark text-lg  font-medium mt-1 mb-2">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className="w-full p-3  bg-tns-mint-cream  border border-tns-ash-gray-light  focus:outline-none focus:ring-2 focus:ring-tns-ebony"
        />
      </div>
      <div className="mb-6">
        {/* Message field */}
        <label className="block text-tns-ebony-dark text-lg font-medium mb-2">
          Message
        </label>
        <textarea
          name="message"
          placeholder={t("message")}
          required
          rows={5}
          className="w-full p-3 border bg-tns-mint-cream border-tns-ash-gray-light  focus:outline-none focus:ring-2 focus:ring-tns-ebony resize-none"
        />
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value={isSent ? t("sent") : isSubmitting ? t("sending") : t("send")}
          disabled={isSubmitting}
          className={`px-6 py-3 text-tns-ebony-dark border-2 border-tns-ebony font-semibold transition-colors ${
            isSent
              ? "bg-tns-ebony-dark text-tns-mint-cream"
              : "hover:bg-tns-ebony hover:text-tns-mint-cream"
          }`}
        />
      </div>
    </form>
  );
};

export default ContactForm;
