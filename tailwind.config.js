/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAB528",
        color: "#999999",
        title: "#222222",
        footercolor: "#555",
        orange: "#FA582C",
        green: "#669900"
      }
    },
  },
  plugins: [],
}
