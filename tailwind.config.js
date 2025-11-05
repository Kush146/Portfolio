/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#0b0b0f' },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,0.25)' },
    },
  },
  plugins: [],
};