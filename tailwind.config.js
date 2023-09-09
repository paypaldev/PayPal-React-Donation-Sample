/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{jsx,ts}"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
