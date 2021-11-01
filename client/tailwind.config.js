module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "Helvetica", "sans-serif"],
    },
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "80vh": "80vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
