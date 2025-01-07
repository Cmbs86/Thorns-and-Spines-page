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
import lucasferreira from "../assets/images/lucas_ferreira.webp";
import milena from "../assets/images/milena_lauers.webp";

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
          <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row flex-wrap justify-around 2xl:justify-between gap-y-10 lg:gap-x-10 xl:gap-x-32 2xl:gap-x-56 py-16 ">
      
            <ArtistCard
              img={lucasferreira}
              alt={"lucasferreira's photo"}
              title={"lucasferreira's photo"}
              artist={"Lucas Ferreira"}
              link={"https://www.instagram.com/lucasferreiratattoo/"}
              socialMedia={"@lucasferreiratattoo"}
              booking={"mailto:lucasferreiratattoo@gmail.com"}
              bookingText={t("email_appointments")}
              dates="16.04.2025 - 21.04.2025"
            />
            <ArtistCard
              img={milena}
              alt={"milena's photo"}
              title={"milena's photo"}
              artist={"Milena Lauers"}
              link={"https://www.instagram.com/milenalauers/"}
              socialMedia={"@milenalauers"}
              booking={"mailto:m.lauers@gmail.com"}
              bookingText={t("email_appointments")}
              dates="16.04.2025 - 21.04.2025"
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
          
          
        </main>
          <AnimatedSeparator />
      </ContentLayout>
    </>
  );
};

export default UpcomingGuests;


