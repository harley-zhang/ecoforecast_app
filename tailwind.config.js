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
        product: ["Product Sans"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}