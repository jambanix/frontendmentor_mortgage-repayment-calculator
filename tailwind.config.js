/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Jakarta": ["Jakarta Sans", "sans-serif"]
      }
    },
    colors: {
      "lime": "#d8db2f",
      "slate-900": "#133041",
      "slate-700": "#4e6e7e",
      "slate-500": "#6b94a8",
      "slate-300": "#9abed5",
      "slate-100": "#e4f4fd",
      "red": "#d73328",
      "white": "#ffffff"
    }
  },
  plugins: [],
}