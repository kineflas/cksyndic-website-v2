/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7ff',
          300: '#a5bbff',
          400: '#8099ff',
          500: '#5b77ff',
          600: '#1e3a8a',
          700: '#1a3078',
          800: '#162660',
          900: '#111d4a',
        },
        accent: {
          50:  '#fefbf0',
          100: '#fef4d3',
          200: '#fde88a',
          300: '#fbd14d',
          400: '#f9ba1f',
          500: '#e8a40e',
          600: '#c9920a',
          700: '#a77409',
          800: '#855c08',
          900: '#634506',
        },
      },
    },
  },
  plugins: [],
};
