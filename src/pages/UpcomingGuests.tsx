//laytout import
import ContentLayout from "../layouts/ContentLayout.js";
//translation import
import { useTranslation } from "react-i18next";
//components import
import ArtistCard from "../components/ArtistCard.tsx";
import AnimatedSeparator from "../components/AnimatedSeparator.tsx";
// Images imports

import Lorena from "../assets/images/lorena_morato.webp";
import Rafaella from "../assets/images/raffaela_fabbri.webp";
import Cat from "../assets/images/cat_tattoing.webp";
import isaac from "../assets/images/isaac.webp";
import aminakat from "../assets/images/aminakat.webp";

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
              img={isaac}
              alt={"n.isaac.ttt's photo"}
              title={"n.isaac.ttt's photo"}
              artist={"Isaac"}
              link={"https://www.instagram.com/n.isaac.ttt/"}
              socialMedia={"@n.isaac.ttt"}
              booking={t("https://www.instagram.com/n.isaac.ttt/")}
              bookingText={t("dm_appointments")}
              dates="19.05.2025 - 24.05.2025"
            />

            <ArtistCard
              img={aminakat}
              alt={"Amina Kat's photo"}
              title={"Amina Kat's photo"}
              artist={"Amina Kat"}
              link={"https://www.instagram.com/aminakat/"}
              socialMedia={"@aminakat"}
              booking={"https://wa.me/34652697879"}
              bookingText={t("booking_whatsapp")}
              dates="1.06.2025 - 22.06.2025"
            />

            <ArtistCard
              img={Lorena}
              alt={"Lorena Morato's photo"}
              title={"Lorena Morato's photo"}
              artist={"Lorena Morato"}
              link={"https://www.instagram.com/lore.morato/"}
              socialMedia={"@lore.morato"}
              booking={t("https://www.instagram.com/lore.morato/")}
              bookingText={t("booking_fully")}
              dates="16.07.2025 - 18.07.2025"
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

        
          </div>
        </main>
        <AnimatedSeparator />
      </ContentLayout>
    </>
  );
};

export default UpcomingGuests;

// for empty guests page:  <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row flex-wrap justify-around gap-y-10 lg:gap-x-10 xl:gap-x-32 2xl:gap-x-56 py-16 ">


