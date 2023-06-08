/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue, js}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#888e95',
        green: '#459672',
        'dark-gray': '#4B535A',
        'lighter-gray': '#ADB4BB'
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))'
      }
    }
  },
  plugins: []
}
