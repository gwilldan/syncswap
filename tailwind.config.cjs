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
        lightBG: "rgba(225, 225, 225, 0.7)",
        whiteBG: "#fffff",
        textFaint: "rgb(111, 113, 131)",
        textNormal: "#060828"
      },

      fontFamily: {
        inter: ["Poppins ", "sans-serif"]
      }

    },
  },
  plugins: [],
}
