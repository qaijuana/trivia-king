const plugin = require("tailwindcss/plugin");

module.exports = {
  enabled: process.env.NODE_ENV === "production",
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
    extend: {
      backgroundColor: ["label-checked"], // you need add new variant to a property you want to extend
      textColor: ["label-checked"], // you need add new variant to a property you want to extend
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(({ addVariant, e }) => {
      addVariant("label-checked", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-checked${separator}${className}`); // escape class
          const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
          return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
        });
      });
    }),
  ],
};
