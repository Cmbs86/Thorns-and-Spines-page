import React from "react";
import SeppTattoo from "../assets/images/sepp.webp";
import gabitattoo from "../assets/images/gabi.webp";
import maikontattoo from "../assets/images/maikon.webp";
import mariatattoo from "../assets/images/maria.webp";
import ArtistCard from "../components/ArtistCard.jsx";

const Artists = () => {
  return (
    <>
      <div className=" min-h-screen fle flex-col items-center justify-center">
        {/* Text section */}
        <div className="text-center my-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-tns-ebony font-sans ">
            Resident Artists
          </h1>
        </div>

        {/* Wrapper for cards */}
        <div className="max-w-[1600px] w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

     

          <ArtistCard
            img={SeppTattoo}
            name={"Sep"}
            socialMedia={"@sep"}
            booking={"link here"}
          />

          <ArtistCard
            img={gabitattoo}
            name={"Gabi"}
            socialMedia={"@gabi"}
            booking={"Link here"}
          />
          <ArtistCard
            img={maikontattoo}
            name={"Maikon"}
            socialMedia={"@maikon"}
            booking={"Link here"}
          />

          <ArtistCard
            img={mariatattoo}
            name={"Maria"}
            socialMedia={"@maria"}
            booking={"Link here"}
          />
        </div>
      </div>
    </>
  );
};

     {/* card template */}
          {/* <ArtistCard
          img={}
          name={}
          socialMedia={}
          booking={}
          /> */}

export default Artists;
