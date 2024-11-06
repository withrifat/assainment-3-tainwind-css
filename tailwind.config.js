/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        inter: ['"Inter"', 'serif'], // Added Inter font here
      },
    },
  },
  plugins: [],
}