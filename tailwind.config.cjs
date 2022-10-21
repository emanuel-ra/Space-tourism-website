/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: theme => ({
        'barlow': ['Barlow', 'sans-serif'] ,
        'bellefair': ['Barlow', 'serif'] ,
      })
    },
  },
  plugins: [],
}
