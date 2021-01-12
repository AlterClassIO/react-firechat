module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'coolDark-400': '#40444B',
        'coolDark-500': '#36393f',
        'coolDark-600': '#32353b',
        'primary-50': '#fbeff3',
        'primary-100': '#d96d91',
        'primary-200': '#d55d85',
        'primary-300': '#d14d79',
        'primary-400': '#cd3c6d',
        'primary-500': '#c33364',
        'primary-600': '#b22e5a',
        'primary-700': '#a22a52',
        'primary-800': '#92264a',
        'primary-900': '#822142',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
