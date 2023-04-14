/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar': '#5A8FCC',
        'footer': '#2A4C73'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
