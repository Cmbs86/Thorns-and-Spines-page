//laytout import
import ContentLayout from "../layouts/ContentLayout.js";
//translation import
import { useTranslation } from "react-i18next";
//components import
import ArtistCard from "../components/ArtistCard.tsx";
import AnimatedSeparator from "../components/AnimatedSeparator.tsx";
// Images imports
import luhtsuki from "../assets/images/luhtsuki.webp";
import thorns_round from "../assets/images/thorns_round.webp";

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
        <main className="min-h-screen w-full  flex flex-col items-center justify-center">
          {/* Text section */}
          <div className="text-center my-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tns-ebony font-sans ">
              {t("guest_artists")}
            </h1>
          </div>

          {/* Wrapper for cards */}
          <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row flex-wrap justify-around 2xl:justify-between gap-y-10 md:gap-x-10   xl:gap-x-52 2xl:gap-x-96  ">
            <ArtistCard
              img={luhtsuki}
              alt={"luhtsuki's photo"}
              title={"luhtsuki's photo"}
              artist={"Luh Tsuki"}
              link={"https://www.instagram.com/luh.tsuki/"}
              socialMedia={"@luh.tsuki"}
              booking={"mailto:luh.tsuki@gmail.com"}
              bookingText={t("email_appointments")}
              dates="07.01.2025 - 10.01.2025"
            />
            <ArtistCard
              img={thorns_round}
              alt={"thorns_round's photo"}
              title={"thorns_round's photo"}
              artist={t("more_guests")}
              link={"https://www.instagram.com/thorns.and.spines/"}
              socialMedia={"@thorns.and.spines"}
              booking={"https://www.instagram.com/thorns.and.spines/"}
              bookingText={t("dm_appointments")}
              dates="Stay tuned!"
            />
          </div>
          <AnimatedSeparator />
        </main>
      </ContentLayout>
    </>
  );
};

export default UpcomingGuests;
