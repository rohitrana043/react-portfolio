/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60A5FA', // blue-400
          DEFAULT: '#3B82F6', // blue-500
          dark: '#2563EB', // blue-600
        },
        background: {
          light: '#f8fafc', // slate-50
          dark: '#0f172a', // slate-900
        },
        card: {
          light: '#ffffff',
          dark: '#1e293b', // slate-800
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
