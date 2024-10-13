import React from "react";
import SeppTattoo from "../assets/images/sepp.webp";
import gabitattoo from "../assets/images/gabi.webp";
import maikontattoo from "../assets/images/maikon.webp";


const Artists = () => {
  return (
    <>
      <div className=" min-h-screen fle flex-col items-center justify-center">
        {/* Text section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-tns-ebony font-sans ">Resident Artists</h1>
        
        </div>


        {/* Wrapper for cards */}
        <div className="max-w-[1200px] w-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Individual Cards */}
          <div className="p-6 rounded-lg text-center">
            <img src={SeppTattoo} alt="" className="rounded-full w-64 h-64 object-cover mx-auto"  />
            <h3 className="mt-8 text-5xl font-bold font-sans text-tns-ebony">Sep</h3>
            <p className="text-xl text-tns-ebony">@sep</p>
            <a href="#book-artist" className="mt-2 text-tns-ebony ">Book via link</a>
          </div>
          <div className="p-6 rounded-lg text-center">
            <img src={gabitattoo} alt="" className="rounded-full w-64 h-64 object-cover mx-auto" />
            <h3 className="mt-8 text-5xl font-bold font-sans text-tns-ebony">Gabi</h3>
            <p className="text-xl text-tns-ebony">@artistone</p>
            <a href="#book-artist" className="mt-2 text-tns-ebony">For bookings click here</a>
          </div>
          <div className="p-6 rounded-lg text-center">
            <img src={maikontattoo} alt="" className="rounded-full w-64 h-64 object-cover mx-auto" />
            <h3 className="mt-8 text-5xl font-bold font-sans text-tns-ebony">Artist1</h3>
            <p className="text-xl text-tns-ebony">@artistone</p>
            <a href="#book-artist" className="mt-2 text-tns-ebony">Book via link</a>
          </div>
          <div className="p-6 rounded-lg text-center">
            <img src="" alt="" className="rounded-full w-64 h-64 object-cover mx-auto" />
            <h3 className="mt-4 text-xl font-bold font-sans">Artist1</h3>
            <p className="text-sm">@artistone</p>
            <a href="#book-artist" className="mt-2 text-blue-500 underline">Book via link</a>
          </div>
          <div className="p-6 rounded-lg text-center">
            <img src="" alt="" className="rounded-full w-64 h-64 object-cover mx-auto" />
            <h3 className="mt-4 text-xl font-bold font-sans">Artist1</h3>
            <p className="text-sm">@artistone</p>
            <a href="#book-artist" className="mt-2 text-blue-500 underline">Book via link</a>
          </div>
          <div className="p-6 rounded-lg text-center">
            <img src="" alt="" className="rounded-full w-64 h-64 object-cover mx-auto" />
            <h3 className="mt-4 text-xl font-bold font-sans">Artist1</h3>
            <p className="text-sm">@artistone</p>
            <a href="#book-artist" className="mt-2 text-blue-500 underline">Book via link</a>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Artists;
