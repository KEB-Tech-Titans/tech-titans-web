import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{html,js,jsx,ts,tsx,css}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {},
  plugins: [tailwindScrollbarHide],
};
