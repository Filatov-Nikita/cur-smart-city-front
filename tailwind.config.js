/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'din': ['Din pro', 'sans-serif'],
    },
    colors: {
      'primary': '#003039',
      'blue': '#27D0F9',
      'white': '#F5FDFE'
    }
  },
  plugins: [],
}
