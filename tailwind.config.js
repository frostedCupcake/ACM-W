/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
        '11xl': '1100px',
        '12xl': '1200px',
        '13xl': '1300px',
        '14xl': '1400px',
        '8xl': '800px',
        '5xl': '500px',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
};
