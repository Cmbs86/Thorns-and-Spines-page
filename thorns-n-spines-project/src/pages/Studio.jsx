import ContentLayout from "../layouts/ContentLayout.jsx"
import { useTranslation } from "react-i18next";

import thorns1 from "../assets/images/thorns_1.webp"
import thorns2 from "../assets/images/thorns_2.webp";
import thorns3 from "../assets/images/thorns_3.webp";
import thorns4 from "../assets/images/thorns_4.webp";
import thorns5 from "../assets/images/thorns_5.webp";
import thorns6 from "../assets/images/thorns_6.webp";
import thorns7 from "../assets/images/thorns_7.webp";
import thorns8 from "../assets/images/thorns_8.webp";
import thorns9 from "../assets/images/thorns_9.webp";
import thorns10 from "../assets/images/thorns_10.webp";

// Then use these imports in your array
const images = [
  { src: thorns1, alt: "Studio Image 1" },
  { src: thorns2, alt: "Studio Image 2" },
  { src: thorns3, alt: "Studio Image 3" },
  { src: thorns4, alt: "Studio Image 4" },
  { src: thorns5, alt: "Studio Image 5" },
  { src: thorns6, alt: "Studio Image 6" },
  { src: thorns7, alt: "Studio Image 7" },
  { src: thorns8, alt: "Studio Image 8" },
  { src: thorns9, alt: "Studio Image 9" },
  { src: thorns10, alt: "Studio Image 10" },
];


const Studio = () => {
  const { t } = useTranslation();
  
  return (
    
      <main className="">
        <div className="flex justify-center text-center my-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-tns-ebony font-sans">
            {t("The studio")}
          </h1>
        </div>

        {/* Responsive grid for images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden ">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </main>
  
  );
};

export default Studio;