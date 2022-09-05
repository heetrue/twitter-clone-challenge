/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        68: '275px',
        '11/12': '90%',
      },
      height: {
        13: '52px',
      },
      colors: {
        blue: '#1d9aee',
        'dark-blue': '#1a8dda',
      },
      fontSize: {
        15: ['15px', '20px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
