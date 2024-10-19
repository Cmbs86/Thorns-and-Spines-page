import { link } from "framer-motion/client";
import React from "react";

const ArtistCard = ({ img, altTitle, name, socialMedia, link ,  booking, bookingText }) => {
  return (
    
    <>
      <div className="p-8 rounded-lg text-center ">
        <img
          src={img}
          alt={altTitle}
          className="rounded-full w-[280px] h-[280px] sm:w-[475px] sm:h-[475px]  object-cover mx-auto"
        />
        <div className="mt-8">
          <div className="text-center ">
        <h3 className="mb-8 text-5xl font-bold font-sans text-tns-ebony">
          {name}
        </h3>
        </div>
        <a href={link} className="block text-2xl text-tns-ebony" target="_blank">{socialMedia}</a>
        <a href={`https://wa.me/${booking}`} className="mt-2  text-2xl text-tns-ebony " target="_blank">
         {bookingText}
        </a>
        </div>
      </div>
    </>
  );
};

export default ArtistCard;
