
import React from "react";

const ArtistCard = ({ img, alt, artist, socialMedia, link ,  booking, bookingText }) => {
  return (
    
    <>
      <div className=" p-8 rounded-lg text-center  md:max-w-[50%] ">
        <img
          src={img}
          alt={alt}
          className="rounded-full w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] xl:w-[475px] xl:h-[475px] object-cover mx-auto"
        />
        <div className="mt-8">
          <div className="text-center ">
        <h3 className="mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-tns-ebony">
          {artist}
        </h3>
        </div>
        <a href={link} className="block text-lg sm:text-xl lg:text-2xl text-tns-ebony" target="_blank">
         <span className="underline-animation">{socialMedia}</span></a>
        <a href={booking} className="mt-2 text-lg sm:text-xl  lg:text-2xl text-tns-ebony " rel="noopener noreferrer" target="_blank">
        <span className="underline-animation-right">{bookingText}</span>
        </a>
        </div>
      </div>
    </>
  );
};

export default ArtistCard;
