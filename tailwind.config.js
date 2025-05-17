/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], safelist: [
    'lemon-yellow-bg', // ✅ keep your custom class
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

