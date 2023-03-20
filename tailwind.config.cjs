/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    
    extend: {

      colors : {
        darkBG : "rgb(73, 76, 145)",
        darkSlate : "rgba(73, 76, 145, 0.7)",
        lightSlate: "rgba(0, 0, 0, 0.87)",
        lightBG: "rgba(225, 225, 225, 0.7)",
        whiteBG: "#fffff",
        textFaint: "rgb(111, 113, 131)",
        textNormal: "#060828"
      },

      fontFamily: {
        inter: ["Poppins ", "sans-serif"]
      },

      animation: {
        'slide-in-left' : {
          '-webkit-animation' : 'slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
          'animation': 'slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        }
      },

      keyframes: {
        "slide-in-left" : {
          "0%" : {
            "-webkit-transform": "translateX(-1000px)",
            "transform" : "translateX(-1000px)",
            "opacity": "0",
          },

          "100%" : {
            "-webkit-transform" : "translateX(0)",
            "transform": "translateX(0)",
            "opacity": "1",
          }
        },
      }
  },

  }, 

  plugins: [],

}
