/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "Poppins" : ["Poppins"]
      },
      maxWidth : {
        "screen" : "100vw"
      }
    },
  },
  plugins: [],
}

