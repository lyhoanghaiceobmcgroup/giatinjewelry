/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e6e3',
          200: '#c7ccc7',
          300: '#a4aba4',
          400: '#7d877d',
          500: '#616b61',
          600: '#4c554c',
          700: '#3e453e',
          800: '#343934',
          900: '#2e312e',
        },
      },
    },
  },
  plugins: [],
};