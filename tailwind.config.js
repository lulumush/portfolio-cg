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
        'hero': "url('/src/assets/hero1.jpg')",
      },
    },
  },
  plugins: [],
}
