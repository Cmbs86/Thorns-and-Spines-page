interface ArtistProps {
  img: string;
  alt: string;
  title: string;
  artist: string;
  link: string;
  socialMedia: string;
  booking: string;
  bookingText: string;
  dates: string;
}

const ArtistCard: React.FC<ArtistProps> = ({
  img,
  alt,
  title,
  artist,
  socialMedia,
  link,
  booking,
  bookingText,
  dates
}) => {
  return (
    <>
      <div className=" p-8 rounded-lg text-center  md:max-w-[50%] ">
        <img
          src={img}
          alt={alt}
          title={title}
          className="rounded-full w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[440px] xl:h-[440px] object-cover mx-auto"
        />
        <div className="mt-8">
          <div className="text-center ">
            <h3 className="mb-8 text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-tns-ebony">
              {artist}
            </h3>
          </div>
          <a
            href={link}
            className="block text-base sm:text-lg lg:text-xl text-tns-ebony"
            target="_blank"
          >
            <span className="underline-animation">{socialMedia}</span>
          </a>
          <a
            href={booking}
            className="mt-2 text-base sm:text-lg  lg:text-xl text-tns-ebony "
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="underline-animation-right">{bookingText}</span>
          </a>
        </div>
        <p className="mt-1 text-base sm:text-lg font-semibold lg:text-xl text-tns-ebony">{dates}</p>
      </div>
    </>
  );
};

export default ArtistCard;
