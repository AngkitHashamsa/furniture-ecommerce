module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        pink: '#FB2E86',
        red: '#F92545',
        blue: '#2E19C4',
        navyBlue: '#151875',
        offNavyBlue: '#2D3FA5',
        purple: '#7E33E0',
        offPurple: '#9F64B4',
        pantonePurple: '#E1D1F6',
        skyBlue: '#F2F5FF',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tw-elements/dist/plugin'), require('@tailwindcss/forms')],
};
