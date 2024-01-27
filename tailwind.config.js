/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Red-Hat-Display': ['Red Hat Display', 'sans-serif']
      },
      colors: {
        'pale-blue' : 'hsl(225, 100%, 94%)',
        'bright-blue' : 'hsl(245, 75%, 52%)',
        'very-pale-blue' : 'hsl(225, 100%, 98%)',
        'desaturated-blue' : 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
        'gray-l': 'hsl(228, 100%, 99%, 100%)'
      },
      boxShadow:{
        'bt': '0px 4px 4px 0px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}

