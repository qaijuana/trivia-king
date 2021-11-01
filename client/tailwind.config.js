module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "Helvetica", "sans-serif"],
    },
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/5": "60%",
      "3/4": "75%",
      "4/5": "80%",
      full: "100%",
      "80vh": "80vh",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
