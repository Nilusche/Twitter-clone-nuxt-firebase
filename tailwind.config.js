/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ], 
  theme: {
    extend: {colors:{
      twblue:{
        100: "#1DA1F2",
        200: "#0d8bd9",
      },
      twdarkblue:"#0c81ca",
      twgrey:{
        100: "#F5F8FA",
        150: "#eef3f6",
        200: "#E1E8ED",
        300: "#AAB8C2",
        400: "#657786"
      },
      twblue:"#1DA1F2",
      twgreen:"#42E6A4",
      twred:"#E60965",
      twblack:{
        100: "#282e34",
        200: "#14171A"
      }
      
    },
      fontFamily:{
        'montserrat':['Roboto', 'sans-serif']
      }
      
    }
  },
  plugins: [],
}
