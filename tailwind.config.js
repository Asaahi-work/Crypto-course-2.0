const plugin = require("tailwindcss/plugin") 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '1.1rem',
      'sm': '1.2rem',
      'tiny': '1.26rem',
      'base': '1.46rem',
      'lg': '1.64rem',
      'xl': '1.825rem',
      '2xl': '2.2rem',
      '3xl': '2.7rem',
      '4xl': '3.25rem',
      '5xl': '4.3rem',
      '6xl': '5.8rem',
      '7xl': '7.3rem',
    },
    extend: {colors: {
      primary: '#7FFFD4',
      widgetColor: '#0e1119',
      lineColor: '#eaeaea',
      blackColor: '#111',
      greenPrice: '#4a9178',
      bgColor: '#060709'
    }, transitionTimingFunction: {
      DEFAULT: 'ease-in-out',
    }, transitionDuration: {
      DEFAULT: '350ms'
    }
    },
  },
  plugins: [
    plugin(({addUtilities, addComponents}) => {
      addComponents({
        '.shadow-icon': {
          backgroundColor: '#ffffff', 
          fontSize: '2rem',
          borderRadius: '50%', 
          color: '#353538',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'box-shadow .4s ease in-out',
          padding: '0.4rem',
          boxShadow:' 0 3px 6px rgba(134, 77, 255, 0.1)'
        }
      }),
      addUtilities({
        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

        }, '.flex-center-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }, '.flex-column': {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        } 
      })
    })
  ],
}
