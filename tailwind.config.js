/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  
    extend: {
      colors: {
      blue:"#3b54f3",
      background :"#D4D9F6",
      lightBlue: "#D6E8FB",
      },
      fontFamily: {
        main: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
  
}
