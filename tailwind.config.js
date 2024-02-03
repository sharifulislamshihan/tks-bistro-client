/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Lato, sans-serif',
        paragraph: 'Merriweather, sans-serif',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
],
}

