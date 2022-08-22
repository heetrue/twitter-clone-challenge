/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        68: '17.1875rem',
        '11/12': '90%',
      },
      height: {
        13: '3.125rem',
      },
      colors: {
        blue: '#1d9aee',
        'dark-blue': '#1a8dda',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
