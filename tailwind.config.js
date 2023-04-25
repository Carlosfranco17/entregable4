/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'purpe-p':'#55A88',
        'red-p':'#D85D5D'
      }
    },
  },
  plugins: [],
}

