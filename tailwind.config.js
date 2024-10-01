/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        defaultBg: "#282C34",
        defaultBgDark: "#1B1D23",
        defaultBgDarker: "#121317",
        primaryColor: "#FF8F85",
        primaryColorLight: "#FFDAD6",
        primaryColorDark: "#FF695C",

        secondaryColor: "#68C3A3",
        secondaryColorLight: "#93D5C1",
        secondaryColorDark: "#50A081",
      },
      boxShadow: {
        white: "rgba(255, 255, 255, 0.1) 0px 3px 5px !important",
        whiteLight: "rgba(255, 255, 255, 0.1) 0px 3px 5px !important",
      },
    },
  },
  plugins: [],
};
