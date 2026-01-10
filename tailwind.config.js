/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        primary: "#0f172a", // Slate 900 (Dark Mode BG)
        secondary: "#1e293b", // Slate 800 (Dark Mode Cards)
        
        // Brand Colors
        accent: "#38bdf8",    // Sky 400 (The main Blue)
        highlight: "#0ea5e9", // Sky 500 (Darker blue for hover)
        
        // We removed 'textMain' and 'textMuted' here.
        // Instead, we use 'text-slate-100' and 'text-slate-400' in the HTML.
        // This is much easier to switch to 'text-slate-900' for Light Mode later.
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeIn 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}