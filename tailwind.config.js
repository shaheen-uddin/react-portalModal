/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      height: {
        'screen/50': '90vh',
      },
      width: {
        'screen/50': '50vw',
      }
    },
  },
  plugins: [],
}

