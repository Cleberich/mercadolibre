/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {'amarillo': '#FEDC0D', 'verde': '#1CA64F', 'gris': '#f3f3f3', 'gris-2':'#ededed'}
    },
  },
  plugins: [],
}
