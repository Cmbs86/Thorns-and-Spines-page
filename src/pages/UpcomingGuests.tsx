//laytout import
import ContentLayout from "../layouts/ContentLayout.js";
//translation import
import { useTranslation } from "react-i18next";
//components import
import ArtistCard from "../components/ArtistCard.tsx";
import AnimatedSeparator from "../components/AnimatedSeparator.tsx";
// Images imports

import Rafaella from "../assets/images/raffaela_fabbri.webp";
import Cat from "../assets/images/cat_tattoing.webp";
import bruno_santos from "../assets/images/bruno_santos.webp";
import the_aphotic from "../assets/images/the_aphotic.webp";
import pedro_inou from "../assets/images/pedro_inou.webp";
import paulo_bocchi from "../assets/images/paulo_bocchi.webp";

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
          <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row flex-wrap justify-around 2xl:justify-between gap-y-10 ">
        
            <ArtistCard
              img={bruno_santos}
              alt={"Bruno Santos's photo"}
              title={"Bruno Santos's photo"}
              artist={"Bruno Santos"}
              link={"https://www.instagram.com/brunosantostattoo/"}
              socialMedia={"@brunosantostattoo"}
              booking={(
                "https://sanctorumtattoo.com/get-booked-in?fbclid=PAZXh0bgNhZW0CMTEAAafTsAoUD4P2KnRFVgEj_rDwfTMG1yI2YBQqdxYBfjTa6MDKctysS375ZmLsPw_aem_pWjR9TC2s5LcrpWkvr4lig"
              )}
              bookingText={t("booking_form")}
              dates="21.07.2025 - 23.07.2025"
            />
         

            <ArtistCard
              img={Cat}
              alt={"Cat Tattoing's photo"}
              title={"Cat Tattoing's photo"}
              artist={"Cat Tattoing"}
              link={"https://www.instagram.com/cattattooing/"}
              socialMedia={"@cat_tattoing"}
              booking={"https://www.instagram.com/cattattooing/"}
              bookingText={t("booking_fully")}
              dates="24.07.2025 - 26.07.2025"
            />
            <ArtistCard
              img={Rafaella}
              alt={"Raffaella Fabbri's photo"}
              title={"Raffaella Fabbri's photo"}
              artist={"Raffaella Fabbri"}
              link={"https://www.instagram.com/raffaellafabbri.ttt/"}
              socialMedia={"@raffaellafabbri.ttt"}
              booking={"mailto:raffaellafabbri.ttt@gmail.com"}
              bookingText={t("email_appointments")}
              dates="24.07.2025 - 26.07.2025"
            />
            <ArtistCard
              img={the_aphotic}
              alt={"The Aphotic's photo"}
              title={"The Aphotic's photo"}
              artist={"The Aphotic"}
              link={"https://www.instagram.com/the_aphotic/"}
              socialMedia={"@the_aphotic"}
              booking={"mailto:aphotictattoo@gmail.com"}
              bookingText={t("email_appointments")}
              dates="27.08.2025 - 29.08.2025"
            />

            <ArtistCard
              img={pedro_inou}
              alt={"Pedro Inou's photo"}
              title={"Pedro Inou's photo"}
              artist={"Pedro Inou"}
              link={"https://www.instagram.com/inoutattoo/"}
              socialMedia={"@inoutattoo"}
              booking={"mailto:inoutattoo.europe@gmail.com"}
              bookingText={t("email_appointments")}
              dates="22.09.2025 - 12.10.2025"
            />
            <ArtistCard
              img={paulo_bocchi}
              alt={"Paulo Bocchi's photo"}
              title={"Paulo Bocchi's photo"}
              artist={"Paulo Bocchi"}
              link={"https://www.instagram.com/bocchink/"}
              socialMedia={"@bocchink"}
              booking={(
               "https://docs.google.com/forms/d/e/1FAIpQLSfwdB_TRMr2Jv68ColfEsLDToIUUPYCjxLKx-e-8HluhTXYWQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAAacOPNHsYv1D_V3xALGvNxKYpGI3Axzear-QAHwEyLqc3uucvOa03tsA8PcKSQ_aem_gtmZcpzEiVTh0QNGTld-uA&pli=1"
              )}
              bookingText={t("booking_form")}
              dates="29.09.2025 - 04-10-2025"
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
