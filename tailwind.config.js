/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#faf4f4",
        darkgray: "#9f9f9f",
        black: "#000",
        white: "#fff",
        gainsboro: "#d9d9d9",
        darkslategray: {
          "100": "#333",
          "200": "rgba(51, 51, 51, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        mini: "15px",
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      sm: "14px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "29xl": "48px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};