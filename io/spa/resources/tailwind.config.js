const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./**/*.html',
    './**/*.css',
    './**/*.js',
    './*.css',
  './*.html'],
  darkMode: false,// or 'media' or 'class'
  mode: 'jit', 
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      accent: '#FAAD00',
      black: '#000000',
      white: '#FFFFFF',
      gray: colors.coolGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
