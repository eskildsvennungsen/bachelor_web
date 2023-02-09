/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%, 100%': {transform: 'rotate(-3deg)'},
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        grow: 'grow',
      }
    },
  },
  plugins: [],
};
