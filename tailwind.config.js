/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "desktop": "1440px"
      },
      colors: {
        "green-400": "var(--green-400)",
        "green-300": "var(--green-300)",
        "green-900": "var(--green-900)",
        "grey-500": "var(--grey-500)",
        "grey-400": "var(--grey-400)",
        "grey-200": "var(--grey-200)",
        "grey-50": "var(--grey-50)",
        "white": "var(--white)",
        "error": "var(--error)"
      },
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"]
      }
    },
  },
  plugins: [],
}

