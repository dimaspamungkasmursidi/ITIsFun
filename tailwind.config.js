/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        londrina: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
        titillium: ["Montserrat", ...defaultTheme.fontFamily.sans],
        Timmana: ["Montserrat Light", ...defaultTheme.fontFamily.sans],
        Tillana: ["Jersey 10 Charted", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#4ABDAC",
        secondary: "#FC4A1A",
        tertiary: "#DFDCF3",
        quaternary: "#F7B733",
        dark: "#222831",
        light: "#EEEEEE",
        neutral: "#76ABAE",
      },
      fontSize: {
        0: "0.60rem",
        0.5: "0.625rem",
        1: "0.75rem",
        2: "0.9rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        14: "0.875rem",
        15: "0,9rem",
        20: "1.25rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        36: "2.25rem",
        40: "3rem",
      },
      spacing: {
        0.75: "0.1875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
      },
      screens: {
        xxs: "320px",
        xs: "390px",
        xs2: "400px",
        xsm: "480px",
        mobile: "580px",
        sm: "640px",
        smm: "700px",
        md: "770px",
        "2md": "840px",
        tablet: "960px",
        lg: "1120px",
        xl: "1200px",
        "xxl": "1300px",
        "3xl": "1440px",
      },
      backdropBlur: {
        sm: '4px',
        md: '12px',
      },
      backgroundColor: {
        'glass-light': 'rgba(255, 255, 255, 0.2)',
        'glass-dark': 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
};
