var _ = require('lodash');
var flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
  .default;

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coolDark: {
          400: '#40444B',
          500: '#36393f',
          600: '#32353b',
        },
        primary: {
          50: '#fbeff3',
          100: '#d96d91',
          200: '#d55d85',
          300: '#d14d79',
          400: '#cd3c6d',
          500: '#c33364',
          600: '#b22e5a',
          700: '#a22a52',
          800: '#92264a',
          900: '#822142',
        },
      },
      boxShadow: {
        button: 'var(--shadow-button)',
        card: 'var(--shadow-card)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities, e, theme, variants }) {
      const colors = flattenColorPalette(theme('borderColor'));

      const utilities = _.flatMap(
        _.omit(colors, 'default'),
        (value, modifier) => ({
          [`.${e(`border-t-${modifier}`)}`]: { borderTopColor: `${value}` },
          [`.${e(`border-r-${modifier}`)}`]: { borderRightColor: `${value}` },
          [`.${e(`border-b-${modifier}`)}`]: { borderBottomColor: `${value}` },
          [`.${e(`border-l-${modifier}`)}`]: { borderLeftColor: `${value}` },
        })
      );

      addUtilities(utilities, variants('borderColor'));
    },
  ],
};
