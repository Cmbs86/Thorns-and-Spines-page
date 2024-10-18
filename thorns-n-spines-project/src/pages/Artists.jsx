import React from "react";
import SeppTattoo from "../assets/images/sepp.webp";
import gabitattoo from "../assets/images/gabi.webp";
import maikontattoo from "../assets/images/maikon.webp";
import mariatattoo from "../assets/images/maria.webp";
import ArtistCard from "../components/ArtistCard.jsx";

const Artists = () => {
  return (
    <>
   
      <main className="min-h-screen w-full border border-red-500 flex flex-col items-center justify-center">
        {/* Text section */}
        <div className="text-center my-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-tns-ebony font-sans ">
            Resident Artists
          </h1>
        </div>

        {/* Wrapper for cards */}
        <div className="max-w-[1600px] border border-yellow-600  mx-auto flex flex-col md:flex-row flex-wrap justify-around gap-y-10  ">

     

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
      </main>
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
