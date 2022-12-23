module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        'pc-m': '40px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
