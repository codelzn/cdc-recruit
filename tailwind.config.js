module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screen: {
      desktop: '1280px',
      laptop: '1024px',
      tablet: '640px',
    },
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
