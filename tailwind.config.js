const Palette = {
  COLOR_1: "#000000",
  COLOR_2: "#2B2B2B",
  COLOR_3: "#2F2F2F",
  COLOR_4: "#FFFFFF",
  COLOR_5: {
    lighten: "#FE8080",
    base: "#FE5F5F",
    darken: "#FE4D4D",
  },
  COLOR_6: {
    lighten: "#4073BF",
    base: "#3865A7",
    darken: "#335C99",
  },
};

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html"],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      page: ["Open Sans", "Arial", "sans-serif"],
    },

    minWidth: {
      mobile: "20rem",
    },
    extend: {
      colors: {
        color1: Palette.COLOR_1,
        color2: Palette.COLOR_2,
        color3: Palette.COLOR_3,
        color4: Palette.COLOR_4,
        color5: Palette.COLOR_5,
        color6: Palette.COLOR_6,
      },
      backgroundImage: {
        onlineHelperIcon: "url('/src/assets/images/icon-online-helper.svg')",
        pageBg: "url('/src/assets/images/background.svg')",
      },
      width: {
        104: "26rem",
        202: "50.5rem",
        230: "57.5rem",
        255: "63.75rem",
        "fit-content": "fit-content",
        tablet: "720px",
      },
      margin: {
        141: "35.25rem",
      },
      screens: {
        tablet: "720px",
        desktop: "1150px",
      },
      fontSize: {
        "4.5xl": ["2.5rem", "3.063rem"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["hover", "focus", "active"],
    },
  },
  plugins: [],
};
