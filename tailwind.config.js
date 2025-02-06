/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
      'color-white':'#f8fafc',
      'color-black':'#020102',
      'color-blue':'#6b43ca',
      'color-green':'#A2F11B',
      }
    },
  },
  plugins: [],
}

