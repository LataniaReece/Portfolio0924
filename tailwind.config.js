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
        primaryColor: "#FF8F85",

        secondaryColor: "#68C3A3",
        secondaryColorLight: "#93D5C1",
        secondaryColorDark: "#50A081",
      },
      boxShadow: {
        white: "rgba(0, 0, 0, 0.2) 0px 3px 8px !important",
      },
    },
  },
  plugins: [],
};
