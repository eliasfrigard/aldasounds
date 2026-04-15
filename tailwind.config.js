const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['myriad-pro', ...fontFamily.sans],
        cursive: ['"Bad Script"', 'cursive'],
      },
      colors: {
        primary: {
          DEFAULT: '#042e42',
          50: '#e6f0f5',
          100: '#b3d1e0',
          200: '#80b2cc',
          300: '#4d93b7',
          400: '#2680a8',
          500: '#042e42',
          600: '#03263a',
          700: '#021e2e',
          800: '#011622',
          900: '#010e16',
        },
        accent: {
          DEFAULT: '#ec3c01',
          50: '#fef0e6',
          100: '#fdd1b3',
          200: '#fbb280',
          300: '#f9934d',
          400: '#f67426',
          500: '#ec3c01',
          600: '#c43201',
          700: '#9c2801',
          800: '#741e01',
          900: '#4c1400',
        },
        light: '#e6e6e6',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
