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
        300: "#78c6f7",
      },
      twdarkblue:"#0c81ca",
      twgrey:{
        50: "#F7F7F7",
        100: "#F5F8FA",
        150: "#F7F9F9",
        200: "#EFF1F1",
        300: "#AAB8C2",
        400: "#657786"
      },
      twblue:"#1DA1F2",
      twgreen:"#42E6A4",
      twred:"#E60965",
      twblack:{
        100: "#282e34",
        200: "#14171A"
      },
      twcomment:"#e7f5fe",
    
      
    },
      fontFamily:{
        'montserrat':['Roboto', 'sans-serif']
      },
      width:{
        '128':'32rem',
        '136':'35rem',
        '144':'36rem',
        '150':'37rem',
        '152':'38rem',
        '160':'40rem',
        '176':'44rem',
        '192':'48rem',
        '208':'52rem',
        '224':'56rem',
        '240':'60rem',
        '256':'64rem',
        '272':'68rem',
      }
      
    },
    
  },
  plugins: [],
}
