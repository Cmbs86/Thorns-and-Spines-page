import React from "react";

const ArtistCard = ({ img, name, socialMedia, booking }) => {
  return (
    // fix media queries.
    <>

      <div className="flex flex-col items-center justify-center p-8 rounded-lg text-center border border-blue-800">
        <img
          src={img}
          alt=""
          className="rounded-full w-[475px] h-[475px]  object-cover mx-auto"
        />
        <h3 className="mt-8 text-5xl font-bold font-sans text-tns-ebony">
          {name}
        </h3>
        <p className="text-xl text-tns-ebony">{socialMedia}</p>
        <a href={booking} className="mt-2 text-tns-ebony ">
          For bookings click here
        </a>
      </div>
    </>
  );
};

export default ArtistCard;
