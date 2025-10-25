/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'naftal-blue': '#0047AB',
        'naftal-yellow': '#FFD700',
      },
    },
  },
  plugins: [],
}