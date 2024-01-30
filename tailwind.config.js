/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["emerald","forest"],
  },
  plugins: [require("daisyui")],
}

