/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#1a73e8",
        greydark: "#444",
        grey: "#9c9c9c",
        greymd: "#ebebeb",
        greylight: "#fafafa",
      },
      fontFamily: {
        roboto: ["Roboto"],
        "product-sans-regular": ["Product Sans Regular", "sans-serif"],
        "product-sans-italic": ["Product Sans Italic", "sans-serif"],

        "product-sans-thin-regular": ["Product Sans Thin Regular", "sans-serif"],
        "product-sans-light-regular": ["Product Sans Light Regular", "sans-serif"],
        "product-sans-medium-regular": ["Product Sans Medium Regular", "sans-serif"],
        "product-sans-black-regular": ["Product Sans Black Regular", "sans-serif"],
        "product-sans-thin-italic": ["Product Sans Thin Italic", "sans-serif"],
        "product-sans-light-italic": ["Product Sans Light Italic", "sans-serif"],
        "product-sans-medium-italic": ["Product Sans Medium Italic", "sans-serif"],
        "product-sans-bold": ["Product Sans Bold", "sans-serif"],
        "product-sans-bold-italic": ["Product Sans Bold Italic", "sans-serif"],
        "product-sans-black-italic": ["Product Sans Black Italic", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      ssm: "810px",
      md: "1130px",
    }
  },
  plugins: [],
}