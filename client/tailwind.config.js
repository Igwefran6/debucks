/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        success: "#03B076",
        danger: "#D00114",
        warning: "F2B335",
        neutral: "#D9D9D9",
        lucky: "#AAAAAA",
        light: "#FFFFFF",
        dark: "#3E3E3E",
        background: "#EFEFEF",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".no-copy": {
            "user-select": "none",
            "-webkit-user-select": "none",
            "-moz-user-select": "none",
            "-ms-user-select": "none",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
