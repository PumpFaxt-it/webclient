/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#D4D0C8",
        tertiary: "#3465A4",
        background: "#080808",
        foreground: "#EDEFEF",
        front: "#EDEDEF",
        back: "#101011",
      },
      borderRadius: {
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        inter: '"Inter", sans-serif',
        raleway: '"Raleway", sans-serif',
        comicNeue: '"Comic Neue", sans-serif',
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [],
};
