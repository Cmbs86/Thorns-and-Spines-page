//laytout import
import ContentLayout from "../layouts/ContentLayout.js";
//translation import
import { useTranslation } from "react-i18next";
//components import
import ArtistCard from "../components/ArtistCard.tsx";
import AnimatedSeparator from "../components/AnimatedSeparator.tsx";
// Images imports
import daniela from "../assets/images/daniela.webp";
import basti from "../assets/images/basti.webp";
import SeppTattoo from "../assets/images/sepp.webp";
import gabitattoo from "../assets/images/gabi.webp";
import maikontattoo from "../assets/images/maikon.webp";
import mariatattoo from "../assets/images/maria.webp";
import marczwg from "../assets/images/marc.webp";
import sausageMan from "../assets/images/sausageman.webp";

type TranslationKeys =
  | "guest_artists"
  | "booking_closed"
  | "dm_appointments"
  | "email_appointments"
  | "booking_whatsapp";

const UpcomingGuests = () => {
  const { t } = useTranslation<TranslationKeys>();
  return (
    <>
      <ContentLayout>
        <main className="min-h-screen w-full  flex flex-col items-center justify-center">
          {/* Text section */}
          <div className="text-center my-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-tns-ebony font-sans ">
              {t("guest_artists")}
            </h1>
          </div>

          {/* Wrapper for cards */}
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row flex-wrap justify-around 2xl:justify-between gap-y-10  ">
            <ArtistCard
              img={sausageMan}
              alt={"Sausage man's photo"}
              title={"Sausage man's photo"}
              artist={"Sausage Man"}
              link={"https://www.instagram.com/tiagoborgestattoos/"}
              socialMedia={"@sausageman"}
              booking={"https://www.instagram.com/direct/t/108115133917761"}
              bookingText={"DM for more sexy pics"}
            />

            <ArtistCard
              img={daniela}
              alt={"Daniela's photo"}
              title={"Daniela's photo"}
              artist={"Daniela"}
              link={"https://www.instagram.com/danielaspielberger/"}
              socialMedia={"@danielaspielberger"}
              booking={"https://www.instagram.com/direct/t/113920086666340"}
              bookingText={t("booking_closed")}
            />

            <ArtistCard
              img={basti}
              alt={"Basti's photo"}
              title={"Basti's photo"}
              artist={"Basti"}
              link={"https://www.instagram.com/bastidegroot/"}
              socialMedia={"@bastidegroot"}
              booking={"https://www.instagram.com/direct/t/108656357198639"}
              bookingText={t("dm_appointments")}
            />

            <ArtistCard
              img={SeppTattoo}
              alt={"Sepp's photo"}
              title={"Sepp's photo"}
              artist={"Sep"}
              link={"https://www.instagram.com/the_sepp_tattoo/"}
              socialMedia={"@the_sepp_tattoo"}
              booking={"mailto:thesepptattoo@gmail.com"}
              bookingText={t("email_appointments")}
            />

            <ArtistCard
              img={gabitattoo}
              alt={"Gabi's photo"}
              title={"Gabi's photo"}
              artist={"Gabriela Gaedke"}
              link={"https://www.instagram.com/thunderthestorm/"}
              socialMedia={"@thunderthestorm"}
              booking={"https://www.instagram.com/direct/t/104702077804895"}
              bookingText={"DM for appointments"}
            />
            <ArtistCard
              img={maikontattoo}
              alt={"Maikon's photo"}
              title={"Maikon's photo"}
              artist={"Maikon Basei"}
              link={"https://www.instagram.com/mknxbasei/"}
              socialMedia={"@mknxbasei"}
              booking={"mailto:mknxappointments@gmail.com"}
              bookingText={t("email_appointments")}
            />

            <ArtistCard
              img={mariatattoo}
              alt={"Maria's photo"}
              title={"Moonas's photo"}
              artist={"Moona Autumn"}
              link={"https://www.instagram.com/moona.autumn/"}
              socialMedia={"@moona.autumn"}
              booking={"https://wa.me/4916091701753"}
              bookingText={t("booking_whatsapp")}
            />
            <ArtistCard
              img={marczwg}
              alt={"Marc's photo"}
              title={"Marc's photo"}
              artist={"Marc Zwg"}
              link={"https://www.instagram.com/marc.zwg/"}
              socialMedia={"@marc.zwg"}
              booking={"mailto:zweiundzwanzig.tattoo@gmail.com"}
              bookingText={t("email_appointments")}
            />
          </div>
          <AnimatedSeparator />
        </main>
      </ContentLayout>
    </>
  );
};

export default UpcomingGuests;
