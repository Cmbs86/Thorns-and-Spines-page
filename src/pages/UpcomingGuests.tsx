//laytout import
import ContentLayout from "../layouts/ContentLayout.js";
//translation import
import { useTranslation } from "react-i18next";
//components import
import ArtistCard from "../components/ArtistCard.tsx";
import AnimatedSeparator from "../components/AnimatedSeparator.tsx";
// Images imports

import lucasferreira from "../assets/images/lucas_ferreira.webp";
import milena from "../assets/images/milena_lauers.webp";
import velvet from "../assets/images/velvetviolence.webp";
import phil from "../assets/images/phil.webp";
import Aline from "../assets/images/aline.webp";
import aphotic from "../assets/images/the_aphotic.webp";
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
              img={velvet}
              alt={"levithetattooer's photo"}
              title={"levithetattooer's photo"}
              artist={"Levi the Tattooer"}
              link={"https://www.instagram.com/velvetviolencetattoo/"}
              socialMedia={"@velvetviolencetattoo"}
              booking={t("https://www.velvetviolencetattoo.co.uk/contact")}
              bookingText={t("booking_dm_or_website_contact_form")}
              dates="18.03.2025 - 19.03.2025"
            />
            <ArtistCard
              img={phil}
              alt={"phil_pig_grinder's photo"}
              title={"philpiggrinder_tattoo photo"}
              artist={"Phil"}
              link={"https://www.instagram.com/philpiggrinder_tattoo/"}
              socialMedia={"@philpiggrinder_tattoo"}
              booking={t("https://www.instagram.com/philpiggrinder_tattoo/")}
              bookingText={t("dm_appointments")}
              dates="2.04.2025 - 3.04.2025"
            />

            <ArtistCard
              img={Aline}
              alt={"inkmatos's photo"}
              title={"inkmatos's photo"}
              artist={"Aline Matos"}
              link={"https://www.instagram.com/inkmatos/"}
              socialMedia={"@inkmatos"}
              booking={t("https://www.instagram.com/inkmatos/")}
              bookingText={t("dm_appointments")}
              dates="11.04.2025 - 12.04.2025"
            />
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
              img={aphotic}
              alt={"The Aphotic's photo"}
              title={"The Aphotic's photo"}
              artist={"The Aphotic"}
              link={"https://www.instagram.com/the_aphotic/"}
              socialMedia={"@the_aphotic"}
              booking={"mailto:aphotictattoo@gmail.com"}
              bookingText={t("email_appointments")}
              dates="21.04.2025 - 23.04.2025"
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
          </div>
        </main>
        <AnimatedSeparator />
      </ContentLayout>
    </>
  );
};

export default UpcomingGuests;

// for empty guests page:  <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row flex-wrap justify-around gap-y-10 lg:gap-x-10 xl:gap-x-32 2xl:gap-x-56 py-16 ">
