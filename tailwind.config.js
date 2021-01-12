module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'coolDark-400': '#40444B',
        'coolDark-500': '#36393f',
        'coolDark-600': '#32353b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
