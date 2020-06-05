module.exports = {
  purge: [],
  theme: {
    colors: {
      "var-bg": "var(--color-background)",
      "var-bg-end": "var(--color-background-end)",
      "var-accent": "var(--color-accent)",
      "var-text": "var(--color-text)",
      "var-specialist": "var(--color-specialist)",
      "var-customer": "var(--color-customer)",
      white: "#ffffff",
      offwhite: "#f3f7fb",
      gray: "#cfcfcf",
      green: "#6bb680",
      blue: "#1c3773",
      bluegray: "#B3B6CD",
      darkgray: "#afafaf",
      darkergray: "#999999",
      black: "#4a4a4a",
      blacker: "#050505",
      darkblue: "#20386f",
      lightblue: "#3fafe1",
      lighterblue: "#7fcff1"
    },
    backdropFilter: {
      blur: "blur(8px)"
    },
    extend: {
      lineHeight: {
        neg: "0.8"
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
        "1/4": "0 0 25%",
        "1/3": "0 0 33%",
        "1/2": "0 0 50%"
      },
      zIndex: {
        "25": 25,
        "50": 50,
        "75": 75,
        "80": 80,
        "99": 99,
        "100": 100,
        "101": 101
      },
      fontSize: {
        huge: "calc(3rem + 1.5vw)"
      },
      minWidth: {
        "600x": "600px"
      },
      width: {
        "85p": "85%",
        "14" : "3.2rem",
        "line" : "10px"
      },
      height: {
        "line" : "10px"
      },
      minHeight: {
        "600x": "600px",
        wide: "56%",
        widescreen: "56vh",
        "90h": "90vh",
        "50h": "50vh",
        screen: "100vh"
      },
      boxShadow: {
        fun: "12px 12px 0px rgba(0,0,0,0.5)",
        bigfun: "24px 24px 0px rgba(0,0,0,0.5)"
      },
      maxWidth: {
        "4xs": "8rem",
        "3xs": "12rem",
        "2xs": "15rem",
        "7xl": "85rem"
      },
      translate: {
        "2px": "2px",
        full: "100%"
      },
      borderRadius: {
        xl: "25px",
        half: "5em"
      },
      letterSpacing: {
        ultra: "0.2em"
      },
      opacity: {
        "90": "0.90",
        "75": "0.75",
        "60": "0.60",
        "0": "0",
      },
      inset: {
        full: "100%",
        clip: "calc(80px + 6vw)",
        half: "50%"
      },
      padding: {
        full: "100%"
      }
    }
  },
  variants: {
    margin: ["first", "last", "odd", "even", "responsive"],
    width: ["first", "last", "responsive"]
  },
  plugins: [require("tailwindcss-filters")]
};


