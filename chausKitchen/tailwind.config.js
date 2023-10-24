/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {

        brightBlue: 'text-[#ff7b00]',
        greenBluish: 'text-[#16B97A]',
      },
      fontFamily: {
        delicious: ['Delicious', 'sans'], 
      

      },

    },
  },
  plugins: [],
}

