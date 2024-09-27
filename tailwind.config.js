const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        brand: {
          DEFAULT: '#23FFF3',
          50: '#DBFFFD',
          100: '#C6FFFC',
          200: '#9DFFFA',
          300: '#75FFF7',
          400: '#4CFFF5',
          500: '#23FFF3',
          600: '#00EADD',
          700: '#00B2A8',
          800: '#007A73',
          900: '#00423E',
          950: '#002624'
        },
        btw: {
          blue: '#171D29',
          cyan: '#23FFF3',
          'cyan-dark': '#009189',
          dark: '#1e2836',
        },
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),

  ],
}
