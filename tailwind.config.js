/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'lg': { 'max': '1076px' },
      // => @media (max-width: 1076px) { ... }

      'md': { 'max': '840px' },
      // => @media (max-width: 840px) { ... }

      'sm': { 'max': '560px' },
      // => @media (max-width: 560px) { ... }
    }
},
  plugins: [],
}

