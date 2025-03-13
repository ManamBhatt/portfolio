/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0A192F',
        'navy': '#1E1E2E',
        'slate': '#8892B0',
        'light-slate': '#CCD6F6',
        'lightest-slate': '#E6F1FF',
        'accent': '#64FFDA'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(100, 255, 218, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(100, 255, 218, 0.4)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};