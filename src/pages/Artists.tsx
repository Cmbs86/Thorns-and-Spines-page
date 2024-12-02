//wrapper layout import
import ContentLayout from "../layouts/ContentLayout.js";
//component import
import ArtistCard from "../components/ArtistCard.tsx";
import AnimatedSeparator from "../components/AnimatedSeparator.tsx";
//translation import
import { useTranslation } from "react-i18next";
// Images imports
import tiago from "../assets/images/tiago.webp";
import daniela from "../assets/images/daniela.webp";
import basti from "../assets/images/basti.webp";
import SeppTattoo from "../assets/images/sepp.webp";
import gabitattoo from "../assets/images/gabi.webp";
import maikontattoo from "../assets/images/maikon.webp";
import mariatattoo from "../assets/images/maria.webp";
import marczwg from "../assets/images/marc.webp";

type TranslationKeys =
  | "resident_artists"
  | "dm_appointments"
  | "booking_closed"
  | "email_appointments"
  | "booking_whatsapp"
  | "booking_dm_or_email";

const Artists = () => {
  const { t } = useTranslation<TranslationKeys>();

  return (
    <>
      <ContentLayout>
        <main className="min-h-screen w-full flex flex-col items-center justify-center  ">
          {/* Text section */}
          <div className="text-center my-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tns-ebony font-sans  ">
              {t("resident_artists")}
            </h1>
          </div>

          {/* Wrapper for cards */}
          <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row flex-wrap justify-around 2xl:justify-between gap-y-10  ">
            <ArtistCard
              img={tiago}
              alt={"Tiago's photo"}
              title={"Tiago's photo"}
              artist={"Tiago"}
              link={"https://www.instagram.com/tiagoborgestattoos/"}
              socialMedia={"@tiagoborgestattoos"}
              booking={"https://www.instagram.com/tiagoborgestattoos/"}
              bookingText={t("dm_appointments")}
              dates=""
            />

            <ArtistCard
              img={daniela}
              alt={"Daniela's photo"}
              title={"Daniela's photo"}
              artist={"Daniela"}
              link={"https://www.instagram.com/danielaspielberger/"}
              socialMedia={"@danielaspielberger"}
              booking={"https://www.instagram.com/danielaspielberger/"}
              bookingText={t("booking_closed")}
              dates=""
            />

            <ArtistCard
              img={basti}
              alt={"Basti's photo"}
              title={"Basti's photo"}
              artist={"Basti"}
              link={"https://www.instagram.com/bastidegroot/"}
              socialMedia={"@bastidegroot"}
              booking={"https://www.instagram.com/bastidegroot/"}
              bookingText={t("dm_appointments")}
              dates=""
            />

            <ArtistCard
              img={SeppTattoo}
              alt={"Sepp's photo"}
              title={"Sepp's photo"}
              artist={"Sepp"}
              link={"https://www.instagram.com/the_sepp_tattoo/"}
              socialMedia={"@the_sepp_tattoo"}
              booking={"mailto:thesepptattoo@gmail.com"}
              bookingText={t("email_appointments")}
              dates=""
            />

            <ArtistCard
              img={gabitattoo}
              alt={"Gabi's photo"}
              title={"Gabi's photo"}
              artist={"Gabriela Gaedke"}
              link={"https://www.instagram.com/thunderthestorm/"}
              socialMedia={"@thunderthestorm"}
              booking={"https://www.instagram.com/thunderthestorm/"}
              bookingText={t("dm_appointments")}
              dates=""
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
              dates=""
            />

            <ArtistCard
              img={mariatattoo}
              alt={"Maria's photo"}
              title={"Moona's photo"}
              artist={"Moona Autumn"}
              link={"https://www.instagram.com/moona.autumn/"}
              socialMedia={"@moona.autumn"}
              booking={"https://wa.me/4916091701753"}
              bookingText={t("booking_whatsapp")}
              dates=""
            />
            <ArtistCard
              img={marczwg}
              alt={"Marc's photo"}
              title={"Marc's photo"}
              artist={"Marc Zwg"}
              link={"https://www.instagram.com/marc.zwg/"}
              socialMedia={"@marc.zwg"}
              booking={"mailto:zweiundzwanzig.tattoo@gmail.com"}
              bookingText={t("booking_dm_or_email")}
              dates=""
            />
          </div>

          <AnimatedSeparator />
        </main>
      </ContentLayout>
    </>
  );
};

export default Artists;
