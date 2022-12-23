module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        'pc-m': '40px',
      },
      colors: {
        'cdc-blue': '#01A0E9',
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
