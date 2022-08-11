/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["'Poppins'", "sans-serif"],
      Rubik: ["'Rubik'", "sans-serif"],
      Roboto: ["'Roboto'", "sans-serif"],
      JakartaSans: ["'Plus Jakarta Sans'", "sans-serif"],
    },
    extend: {
      spacing: {
        68: "17rem",
        100: "30rem",
        110: "35rem",
        115: "40rem",
        128: "45rem",
        256: "50rem",
        screenLg: "120vh",
      },
      backgroundImage: {
        'LivingRoom': "url('./Attachments/Image/LivingRoom.png')",
      }
    },
    screens: {
      xs: "0px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1806px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
