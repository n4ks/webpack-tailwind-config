const Palette = {
  COLOR_1: "#000000",
  COLOR_2: "#2B2B2B",
  COLOR_3: "#2F2F2F",
  COLOR_4: "#FFFFFF",
  COLOR_5: "#FE5F5F",
  COLOR_6: "#3865A7",
};

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      page: ["Open Sans", "Arial", "sans-serif"],
    },
    minWidth: {
      mobile: "20rem",
    },
    extend: {
      fontSize: {
        pageSm: ["0.875rem", "1.063rem"],
        page: ["1rem", "1.125rem"],
      },
      textColor: {
        color1: Palette.COLOR_1,
        color2: Palette.COLOR_2,
        color3: Palette.COLOR_5,
        color4: Palette.COLOR_4,
      },
      backgroundColor: {
        btnColor1: Palette.COLOR_5,
        btnColor2: Palette.COLOR_6,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
