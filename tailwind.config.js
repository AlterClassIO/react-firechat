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
  plugins: [],
};
