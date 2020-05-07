module.exports = {
  purge: [],
  theme: {
    colors: {
      white: "#fafafa",
      black: "#050505",
      yellow: "#D88F3A",
      aqua: "#A0E2C3",
      red: "#D84F42",
      green: "#406973",
      pink: "#C47CD4",
      salmon: "#DD7D7C",
      blue: "#3F69EA",
      darkblue: '#120B39',
      orange: '#D88F3A',
    },

    fontFamily: {
      sans: ["rubik", 'system-ui', '-apple-system', "Open Sans", "arial", "sans-serif"]
    },
    extend: {
      flex: {
        "1": "1 1 0%",
        "140": "1 1 140px",
        "200": "1 1 200px",
        "300": "1 1 300px",
        "400": "1 1 400px",
        auto: "1 1 auto",
        none: "none",
        some: "1 2 40%",
        most: "2 1 50%",
        spacer: "0 0 24%",
        small: "1 1 200px",
        full: "0 0 100%",
        "1/3": "0 0 33%",
        "1/2": "0 0 50%",
      },
      zIndex: {
        '25': 25,
        '50': 50,
        '75': 75,
        '99': 99,
        '100': 100,
        '101': 101,
      },
      fontSize: {
        huge: 'calc(4rem + 1.5vw)'
      },
      maxWidth: {
        "3xs": '12rem',
        "2xs": '15rem',
      },
      translate: {
        "2px": '2px'
      },
      letterSpacing: {
        ultra: '0.2em'
      },
      opacity: {
        "90": "0.90"
      },
      inset: {
        full: "100%",
        clip: "calc(80px + 6vw)",
        half: "50%",
      },
    },
  },
  variants: {
    margin: ['first', 'last', 'odd', 'even']
  },
  plugins: []
};


