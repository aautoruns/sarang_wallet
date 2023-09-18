/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html', './node_modules/flowbite/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: '24px',
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
