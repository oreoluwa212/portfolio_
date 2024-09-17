/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#008080",
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["quicksand", "sans-serif"],
        playfair: ["playfair", "sans"],
      },
    },
  },
  plugins: [],
};
