/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '40-r': '40rem',
        '35-r': '30rem',
        '25-r': '15rem',
      },
      height: {
        '40-r': '40rem',
        '35-r': '30rem',
        '25-r': '15rem',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}