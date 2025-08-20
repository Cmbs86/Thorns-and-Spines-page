//laytout import
import ContentLayout from "../layouts/ContentLayout.js";
//translation import
import { useTranslation } from "react-i18next";
//components import
import ArtistCard from "../components/ArtistCard.tsx";
import AnimatedSeparator from "../components/AnimatedSeparator.tsx";
// Images imports
import paulo_bocchi from "../assets/images/paulo_bocchi.webp";
import lou_akima from "../assets/images/lou-akima.webp";

type TranslationKeys =
  | "guest_artists"
  | "booking_closed"
  | "dm_appointments"
  | "email_appointments"
  | "booking_whatsapp"
  | "more_guests";

const UpcomingGuests = () => {
  const { t } = useTranslation<TranslationKeys>();
  return (
    <>
      <ContentLayout>
        <main className="w-full flex flex-col items-center justify-center">
          {/* Text section */}
          <div className="text-center my-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tns-ebony font-sans ">
              {t("guest_artists")}
            </h1>
          </div>

          {/* Wrapper for cards */}
          <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row flex-wrap justify-around gap-y-10 lg:gap-x-10 xl:gap-x-32 2xl:gap-x-56 py-16 ">
            <ArtistCard
              img={paulo_bocchi}
              alt={"Paulo Bocchi's photo"}
              title={"Paulo Bocchi's photo"}
              artist={"Paulo Bocchi"}
              link={"https://www.instagram.com/bocchink/"}
              socialMedia={"@bocchink"}
              booking={
                "https://docs.google.com/forms/d/e/1FAIpQLSfwdB_TRMr2Jv68ColfEsLDToIUUPYCjxLKx-e-8HluhTXYWQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAAacOPNHsYv1D_V3xALGvNxKYpGI3Axzear-QAHwEyLqc3uucvOa03tsA8PcKSQ_aem_gtmZcpzEiVTh0QNGTld-uA&pli=1"
              }
              bookingText={t("booking_form")}
              dates="29.09.2025 - 04-10-2025"
            />
            <ArtistCard
              img={lou_akima}
              alt={"Lou Akima's photo"}
              title={"Lou Akima's photo"}
              artist={"Lou Akima"}
              link={"https://www.instagram.com/lou___akima/"}
              socialMedia={"@lou___akima"}
              booking={"mailto:louakima@gmx.de"}
              bookingText={t("email_appointments")}
              dates="13.10.2025 - 15.10.2025"
            />
          </div>
        </main>
        <AnimatedSeparator />
      </ContentLayout>
    </>
  );
};

export default UpcomingGuests;

// for empty guests page:  <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row flex-wrap justify-around gap-y-10 lg:gap-x-10 xl:gap-x-32 2xl:gap-x-56 py-16 ">

// for regular/full guest page:   <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row flex-wrap justify-around 2xl:justify-between gap-y-10 ">