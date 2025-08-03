/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0f4',
          100: '#cce1e9',
          200: '#99c3d3',
          300: '#66a5bd',
          400: '#3387a7',
          500: '#006991', // petroleum blue
          600: '#005474',
          700: '#003f57',
          800: '#002a3a',
          900: '#00151d',
          950: '#000a0f', // deeper shade for gradients
        },
        gold: {
          50: '#faf8f0',
          100: '#f5f1e1',
          200: '#ebe3c3',
          300: '#e1d5a5',
          400: '#d7c787',
          500: '#cdb969', // discreet gold
          600: '#a49454',
          700: '#7b6f3f',
          800: '#524a2a',
          900: '#292515',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Lato', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'Georgia', 'serif'],
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      utilities: {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
