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
      }),
      animation: theme => ({
        wiggle: 'wiggle 1s ease-in-out infinite',
        slideIn : 'slideIn  5s ease-in-out',
        brightness: 'brightness 1.5s infinite;' ,
      }),
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideIn:{
          '0%': { transform: 'scale-0' } ,          
          '50%': { transform: 'scale-50' } ,          
          '70%': { transform: 'scale-70' } ,          
          '100%': { transform: 'scale-100' } ,
        },
        brightness:{
          '0%, 100%': { filter: 'brightness(1);' },
          '50%': { filter: 'brightness(1.50);'},
        },    
      }
    },
  },
  plugins: [],
  future:{
    hoverOnlyWhenSupported:true
  }
}
