import React from "react";
import SeppTattoo from "../assets/images/sepp.webp";
import gabitattoo from "../assets/images/gabi.webp";
import maikontattoo from "../assets/images/maikon.webp";
import mariatattoo from "../assets/images/maria.webp";
import marczwg from "../assets/images/marc.webp";
import ArtistCard from "../components/ArtistCard.jsx";

const Artists = () => {
  return (
    <>
      <main className="min-h-screen w-full  flex flex-col items-center justify-center">
        {/* Text section */}
        <div className="text-center my-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-tns-ebony font-sans ">
            Resident Artists
          </h1>
        </div>

        {/* Wrapper for cards */}
        {/* adjust wrapper size on large screens/ 2 cards per row only */}
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row flex-wrap justify-around 2xl:justify-between gap-y-10  ">
          
          
          <ArtistCard
            img={SeppTattoo}
            alt={"Sepp's photo"}
            artist={"Sep"}
            link={"https://www.instagram.com/the_sepp_tattoo/"}
            socialMedia={"@the_sepp_tattoo"}
            booking={"mailto:thesepptattoo@gmail.com"}
            bookingText={"Email for appointments"}
          />

          <ArtistCard
            img={gabitattoo}
            alt={"Gabi's photo"}
            artist={"Gabriela Gaedke"}
            link={"https://www.instagram.com/thunderthestorm/"}
            socialMedia={"@thunderthestorm"}
            booking={"https://www.instagram.com/direct/t/104702077804895"}
            bookingText={"DM for appointments"}
          />
          <ArtistCard
            img={maikontattoo}
            alt={"Maikon's photo"}
            artist={"Maikon Basei"}
            link={"https://www.instagram.com/mknxbasei/"}
            socialMedia={"@mknxbasei"}
            booking={"mailto:mknxappointments@gmail.com"}
            bookingText={"Email for appointments"}
          />

          <ArtistCard
            img={mariatattoo}
            alt={"Maria's photo"}
            artist={"Moona Autumn"}
            link={"https://www.instagram.com/moona.autumn/"}
            socialMedia={"@moona.autumn"}
            booking={"https://wa.me/4916091701753"}
            bookingText={"Booking via WhatsApp"}
          />
          <ArtistCard
            img={marczwg}
            alt={"Marc's photo"}
            artist={"Marc Zwg"}
            link={"https://www.instagram.com/marc.zwg/"}
            socialMedia={"@marc.zwg"}
            boooking={"mailto:zweiundzwanzig.tattoo@gmail.com"}
            bookingText={"Email or DM for appointments"}
          />
          {/* <ArtistCard
            img={mariatattoo}
            alt={"Maria's photo"}
            name={"Maria"}
            socialMedia={"@marc.zwg"}
            booking={"Link here"}
          /> */}
        </div>
      </main>
    </>
  );
};

{
  /* card template */
}
{
  /* <ArtistCard
          img={}
          name={}
          socialMedia={}
          booking={}
          /> */
}

export default Artists;
