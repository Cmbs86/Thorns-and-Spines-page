/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tns-mint-cream": "#F0F5EB",
        "tns-ash-gray-light": "#CAD3C2",
        "tns-ash-gray": "#AFBCA1",
        "tns-ebony": "#606954",
        "tns-ebony-dark": "#485040",
      },
      boxShadow: {
        overlay: "0px 4px 20px rgba(72, 80, 64, 0.5)", // tns-ebony-dark color shadow
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },

      fontFamily: {
        sans: ['Quicksand', 'sans-serif'], 
      },

    },
  },
  plugins: [],
};
