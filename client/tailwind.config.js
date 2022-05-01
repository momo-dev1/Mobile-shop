module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(330px, 1fr))',
      },
      boxShadow: {
        'pill': 'rgba(48, 49, 51, 0.1) 0px 2px 4px 0px',
        'card': 'rgba(187, 189, 192, 0.5) 0px 0px 5px 0px',
      },
      colors: {
        'blue-550': '#125c99',
      },
    },
  },
  plugins: [],
}
