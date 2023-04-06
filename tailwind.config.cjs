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

      keyframes: {
        'slide':  {
            '0%' : {
              '-webkit-transform': 'translateX(-224px)',
              'transform': 'translateX(-224px)',
            }, 
            '100%' : {
              '-webkit-transform': 'translateX(0)',
                      'transform': 'translateX(0)'
            } 
        },

        'reverse':  {
          '0%' : {
            '-webkit-transform': 'translateX(0)',
            'transform': 'translateX(0)',
          }, 
          '100%' : {
            '-webkit-transform': 'translateX(-224px)',
                    'transform': 'translateX(-224px)',
                    'display': 'hidden'
          } 
      },
      },

      animation: {
        'slide': 'slide 0.3s linear',
        'reverse': 'reverse 0.3s linear '
      },

    }

  },

  plugins: [],

}
