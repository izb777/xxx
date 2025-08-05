/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#0A2463', // primary dark blue
          800: '#1E3A8A',
          700: '#2563EB',
          600: '#3B82F6',
          500: '#60A5FA',
          400: '#93C5FD',
          300: '#BFDBFE',
          200: '#DBEAFE',
          100: '#EFF6FF',
          50: '#F8FAFC',
        },
        teal: {
          400: '#00F5FF', // accent teal
          300: '#5EEAD4',
        },
        gold: {
          500: '#D4AF37', // accent gold
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
      },
      spacing: {
        '88': '22rem', // 352px (320px * 1.1)
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'orbit': 'orbit 25s linear infinite',
        'orbit-reverse': 'orbit-reverse 30s linear infinite',
        'orbit-slow': 'orbit-slow 40s linear infinite',
        'orbit-fast': 'orbit-fast 15s linear infinite',
      },
    },
  },
  plugins: [],
};