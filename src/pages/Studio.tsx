//hooks import
import { useState, useEffect } from "react";
//translation import
import { useTranslation } from "react-i18next";
// Images imports
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

interface Image {
  src: string;
  alt: string;
  colSpan: string;
  rowSpan: string;
}

const images: Image[] = [
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

type TranslationKeys = "the_studio";

const Studio = () => {
  const { t } = useTranslation<TranslationKeys>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = (): void => {
    setIsOpen(false);
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        showPrevImage();
      } else if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentImageIndex]);

  //stop scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex justify-center text-center my-10 md:mb-16 lg:mb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-tns-ebony font-sans">
          {t("the_studio")}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-2 flex-grow  ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden ${image.colSpan} ${image.rowSpan}`}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover  cursor-pointer"
            />
          </div>
        ))}
      </div>
      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 ">
          <div className="relative w-[95%] xl:w-[75%]  ">
            <button
              onClick={closeLightbox}
              className="absolute right-3 top-5 text-tns-ash-gray text-sm md:text-xl lg:text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-auto max-h-screen object-contain mx-auto pt-5 "
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (currentImageIndex - 1 + images.length) % images.length
                  )
                }
                className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 text-tns-ash-gray md:text-xl lg:text-2xl font-bold"
              >
                &#8592;
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex((currentImageIndex + 1) % images.length)
                }
                className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 text-tns-ash-gray  text-xl lg:text-2xl font-bold"
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
