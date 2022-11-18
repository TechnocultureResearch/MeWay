/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      RobotoSerif: ["Roboto Serif", "serif"],
      Bodoni: ["Libre Bodoni", "serif"],
    },
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
// module.exports = require('config/tailwind.config');