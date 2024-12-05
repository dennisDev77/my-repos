/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
      'color-white':'#FFFCF9',
      'color-red':'rgb(231, 66, 94)',
      'color-black':'#050303',
      'color-blue':'#7D4FE5',
      'color-green':'#A2F11B',
      }
    },
  },
  plugins: [],
}

