//laytout import
import ContentLayout from "../layouts/ContentLayout.js";
//translation import
import { useTranslation } from "react-i18next";
//components import
import ArtistCard from "../components/ArtistCard.tsx";
import AnimatedSeparator from "../components/AnimatedSeparator.tsx";
// Images imports
import NIsaac from "../assets/images/nisaacttt.webp";
import theAphotic from "../assets/images/the_aphotic.webp";
import Sofa from "../assets/images/sofa_oblina.webp";
import luhtsuki from "../assets/images/luhtsuki.webp";


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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tns-ebony font-sans ">
              {t("guest_artists")}
            </h1>
          </div>

          {/* Wrapper for cards */}
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row flex-wrap justify-around 2xl:justify-between gap-y-10  ">
            <ArtistCard
              img={NIsaac}
              alt={"n.isaac's photo"}
              title={"n.isaac's photo"}
              artist={"Isaac"}
              link={"https://www.instagram.com/n.isaac.ttt/"}
              socialMedia={"@n.isaac.ttt"}
              booking={"https://www.instagram.com/direct/t/100551108013622"}
              bookingText={t("dm_appointments")}
              dates="02.12.2024 - 07.12.2024"
            />

            <ArtistCard
              img={theAphotic}
              alt={"the aphotic's photo"}
              title={"the aphotic's photo"}
              artist={"The Aphotic"}
              link={"https://www.instagram.com/the_aphotic/"}
              socialMedia={"@the_aphotic"}
              booking={"https://www.instagram.com/direct/t/108136683920422"}
              bookingText={t("dm_appointments")}
              dates="05.12.2024 - 7.12.2024"
            />

            <ArtistCard
              img={Sofa}
              alt={"Sofa's photo"}
              title={"Sofa's photo"}
              artist={"Sofa"}
              link={"https://www.instagram.com/sofa_oblina/"}
              socialMedia={"@sofa_oblina"}
              booking={"mailto:sofa.oblina@gmx.de"}
              bookingText={t("email_appointments")}
              dates="09.12.2024 - 11.12.2024"
            />

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

            {/* <ArtistCard
              img={gabitattoo}
              alt={"Gabi's photo"}
              title={"Gabi's photo"}
              artist={"Gabriela Gaedke"}
              link={"https://www.instagram.com/thunderthestorm/"}
              socialMedia={"@thunderthestorm"}
              booking={"https://www.instagram.com/direct/t/104702077804895"}
              bookingText={"DM for appointments"}
            /> */}
            {/* <ArtistCard
              img={maikontattoo}
              alt={"Maikon's photo"}
              title={"Maikon's photo"}
              artist={"Maikon Basei"}
              link={"https://www.instagram.com/mknxbasei/"}
              socialMedia={"@mknxbasei"}
              booking={"mailto:mknxappointments@gmail.com"}
              bookingText={t("email_appointments")}
            /> */}

            {/* <ArtistCard
              img={mariatattoo}
              alt={"Maria's photo"}
              title={"Moonas's photo"}
              artist={"Moona Autumn"}
              link={"https://www.instagram.com/moona.autumn/"}
              socialMedia={"@moona.autumn"}
              booking={"https://wa.me/4916091701753"}
              bookingText={t("booking_whatsapp")}
            /> */}
            {/* <ArtistCard
              img={marczwg}
              alt={"Marc's photo"}
              title={"Marc's photo"}
              artist={"Marc Zwg"}
              link={"https://www.instagram.com/marc.zwg/"}
              socialMedia={"@marc.zwg"}
              booking={"mailto:zweiundzwanzig.tattoo@gmail.com"}
              bookingText={t("email_appointments")}
            /> */}
          </div>
          <AnimatedSeparator />
        </main>
      </ContentLayout>
    </>
  );
};

export default UpcomingGuests;
