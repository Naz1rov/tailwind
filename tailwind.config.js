/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        boxShadow:{
            "custom": "0px 0px 20px 0px rgba(0,0,0,1)"
        },
      },
    },
    plugins: [],
  }