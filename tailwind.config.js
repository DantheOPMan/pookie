/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        brown: {
          500: '#a52a2a', // Example brown color
        },
        pink: {
          // You could override the default pink if necessary
          500: '#ffc0cb',
        },
        // ... other colors or shades you want to add or override
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
  ],
};
