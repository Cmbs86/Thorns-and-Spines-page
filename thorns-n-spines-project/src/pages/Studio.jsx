import { useState } from "react";
import { useTranslation } from "react-i18next";

import thorns1 from "../assets/images/thorns_1.webp";
import thorns2 from "../assets/images/thorns_2.webp";
import thorns3 from "../assets/images/thorns_3.webp";
import thorns4 from "../assets/images/thorns_4.webp";
import thorns5 from "../assets/images/thorns_5.webp";
import thorns6 from "../assets/images/thorns_6.webp";
import thorns7 from "../assets/images/thorns_7.webp";
import thorns8 from "../assets/images/thorns_8.webp";
import thorns9 from "../assets/images/thorns_9.webp";
import thorns10 from "../assets/images/thorns_10.webp";

const images = [
  {
    src: thorns1,
    alt: "Studio Image 1",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: thorns5,
    alt: "Studio Image 5",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: thorns4,
    alt: "Studio Image 4",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  }, // This spans 2 rows
  {
    src: thorns8,
    alt: "Studio Image 8",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: thorns10,
    alt: "Studio Image 10",
    colSpan: "col-span-1",
    rowSpan: "sm:row-span-2",
  }, // Tall image spanning 2 rows and 2 columns
  {
    src: thorns7,
    alt: "Studio Image 7",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: thorns6,
    alt: "Studio Image 6",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: thorns2,
    alt: "Studio Image 2",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: thorns3,
    alt: "Studio Image 3",
    colSpan: "sm:col-span-2",
    rowSpan: "row-span-1",
  },
  {
    src: thorns9,
    alt: "Studio Image 9",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
];


const Studio = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  }
  
  const closeLightbox = () => {
    setIsOpen(false);
  }


  const { t } = useTranslation();

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex justify-center text-center my-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-tns-ebony font-sans">
          {t("The studio")}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-2 flex-grow place-content-center ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden ${image.colSpan} ${image.rowSpan}`}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 ">
          <div className="relative w-[95%] xl:w-[75%] 2xl:w-[70%] xl:py-20  max-h-screen">
            <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
              </button>
              <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-auto max-h-screen object-contain"
              
              />
              <div className="flex justify-between mt-4">
                <button
                onClick={() =>
                  setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)
                }
                className= "absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-gray-700 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
                >
                &#8592;
                </button>
                <button
                
                onClick={() =>
                  setCurrentImageIndex((currentImageIndex + 1) % images.length)
                }
                className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-gray-700 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
                
                >
                 &#8594;
                </button>
              </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Studio;
