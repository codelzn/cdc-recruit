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
        'cdc-white': '#f3f2ee',
        'cdc-blue': '#01A0E9',
        'cdc-gray': '#4B4E51',
        'gray-filter': 'rgba(0, 0, 0, 0.55)',
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
