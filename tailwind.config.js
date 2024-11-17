/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    fontFamily: {
      syne: "Syne",
      inter: "Inter",
      "sharp-grotesk": "Sharp Grotesk",
    },

    colors: {
      white: "#ffffff",
      black: "#1C1C1C",
      inherit: "inherit",
      transparent: "transparent",

      primary: {
        DEFAULT: "#1a4097",

        50: "#eef7ff",
        100: "#d9ecff",
        200: "#bcdeff",
        300: "#8ecaff",
        400: "#58abff",
        500: "#3289ff",
        600: "#1b69f5",
        700: "#1453e1",
        800: "#1743b6",
        900: "#1a4097",
        950: "#142657",
      },

      green: {
        DEFAULT: "#7bdfb1",

        50: "#edfcf4",
        100: "#d4f7e3",
        200: "#adedcc",
        300: "#7bdfb1",
        400: "#40c78d",
        500: "#1dac74",
        600: "#108b5d",
        700: "#0d6f4d",
        800: "#0d583e",
        900: "#0b4934",
        950: "#05291e",
      },

      pink: {
        DEFAULT: "#ffa8c6",

        50: "#fef1f5",
        100: "#fee5ee",
        200: "#feccde",
        300: "#ffa8c6",
        400: "#fe6898",
        500: "#f83c74",
        600: "#e81a4d",
        700: "#ca0c35",
        800: "#a70d2c",
        900: "#8b1029",
        950: "#550213",
      },

      lavender: {
        DEFAULT: "#be7cff",

        50: "#faf5ff",
        100: "#f3e7ff",
        200: "#e9d4ff",
        300: "#d8b2ff",
        400: "#be7cff",
        500: "#a951fb",
        600: "#942eef",
        700: "#7f1ed2",
        800: "#6c1eab",
        900: "#58198a",
        950: "#3b0566",
      },

      gray: {
        50: "#f4f4f4",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#525252",
        800: "#464646",
        900: "#3d3d3d",
        950: "#292929",
      },
    },

    extend: {
      aria: {
        current: "current='page'",
      },

      borderRadius: {
        xl: "10px",
        "3xl": "20px",
        "4xl": "28px",
        "9xl": "90px",
      },
    },
  },

  plugins: [
    require("preline/plugin"),
  ],
};
