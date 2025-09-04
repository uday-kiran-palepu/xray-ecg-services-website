/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        'qpath-green': '#1E8449',
        'qpath-blue': '#2980B9',
        'qpath-text': '#34495E',
        'qpath-bg': '#F8F9F9',
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      lineHeight: {
        'relaxed': '1.6',
        'loose': '1.8',
      },
    },
  },
  plugins: [],
};