/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primaryBlack:'#222',
        primaryPurple: '#70198A',
  secondaryPurple: '#BB8FA9',
  secondaryGreen: '#C1EA9F',
 secondaryWhite:'#f7f7f7'
        
      },
      transitionProperty: {
        'height': 'height',
        'opacity':'opacity'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 8s linear infinite',
      },
      borderWidth: {
        DEFAULT: '0.5px',
        '0': '0.5px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      outlineWidth: {
        1: '0.5px',
      }
    },
  },
  plugins: [],
}