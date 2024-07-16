/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
    'Sans':['Roboto', 'sans-serif']
    },
    extend: {
     backgroundImage:{"home": "url('/asseds/bg.png')"
      }
    },
  },
  plugins: [],
}

