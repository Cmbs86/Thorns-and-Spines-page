import React from 'react'

const ArtistCard = ({img, name, socialMedia, booking}) => {
  return (

    // fix media queries.
   <>
    <div className="p-8 rounded-lg text-center">
            <img src={img} alt="" className="rounded-full w-64 h-64 md:w-52 md:h-52 lg:w-[475px] lg:h-[475px] object-cover mx-auto"  />
            <h3 className="mt-8 text-5xl font-bold font-sans text-tns-ebony">{name}</h3>
            <p className="text-xl text-tns-ebony">{socialMedia}</p>
            <a href={booking} className="mt-2 text-tns-ebony ">For bookings click here</a>
          </div>
   
   </>
  )
}

export default ArtistCard