/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#1a73e8',
        grey: '#444',
        greylight: '#fafafa',
      },
      fontFamily: {
        roboto: ["Roboto"],
        'product-sans-regular': ['Product Sans Regular', 'sans-serif'],
        'product-sans-thin-regular': ['Product Sans Thin Regular', 'sans-serif'],
        'product-sans-light-regular': ['Product Sans Light Regular', 'sans-serif'],
        'product-sans-medium-regular': ['Product Sans Medium Regular', 'sans-serif'],
        'product-sans-black-regular': ['Product Sans Black Regular', 'sans-serif'],
        'product-sans-bold': ['Product Sans Bold', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1400px",
    }
  },
  plugins: [],
}