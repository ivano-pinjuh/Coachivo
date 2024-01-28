/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto-slab': ['Roboto Slab', 'serif']
    },
    colors: {
      'milk': '#FAFBF6',
      'isabelline': '#F1F1EC',
      'grayish': '#E8E8E8',
      'azure': '#0C86FE',
      'brilliant-azure': '#3C9DFC',
      'midnight-green': '#0F3E59',
      'black': '#000000',
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}

