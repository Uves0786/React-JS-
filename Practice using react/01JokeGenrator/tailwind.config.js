/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textStroke: {
        "1px": "1px #000",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hover\\:text-stroke:hover": {
          "-webkit-text-stroke": "1px #000",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
