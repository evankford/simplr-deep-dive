module.exports = {
  purge: [],
  theme: {
    colors: {
      white: "#fafafa",
      gray: "#cfcfcf",
      black: "#2a2a2a",
      blacker: "#050505",
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
      lineHeight: {
        "neg" : '0.8'
      },
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
        full: "0 1 100%",
        "1/3": "0 0 33%",
        "1/2": "0 0 50%",
      },
      zIndex: {
        '25': 25,
        '50': 50,
        '75': 75,
        '80': 80,
        '99': 99,
        '100': 100,
        '101': 101,
      },
      fontSize: {
        huge: 'calc(4rem + 1.5vw)'
      },
      minHeight:  {
        '600x': "600px",
        'wide' : '56%',
        'widescreen' : '56vh',
        '90h' : '90vh',
        '50h': '50vh'
      },
      boxShadow: {
        fun: '12px 12px 0px rgba(0,0,0,0.5)',
        bigfun: '24px 24px 0px rgba(0,0,0,0.5)',
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
        "90": "0.90",
        "75": "0.75",
        "60": "0.60",
      },
      inset: {
        full: "100%",
        clip: "calc(80px + 6vw)",
        half: "50%",
      },
      padding: {
        'full': '100%'
      }
    },
  },
  variants: {
    margin: ['first', 'last', 'odd', 'even', 'responsive']
  },
  plugins: []
};


