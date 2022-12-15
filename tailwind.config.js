/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': 'Dosis',
      'title': 'Rozha One',
    },
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/images/hero.jpg')",
      },
      /* animation: {
        fadeIn: 'fadeIn 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': {opacity: 1 },
        }
      }, */
    },
  },
  plugins: [],
}
