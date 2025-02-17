/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "var(--mainColor)",
        secondary: "var(--secondary)",
        secondaryBox: "var(--secondaryBox)",
        mobileBgc: "var(--mobileBgc)",
        button : "rgba(var(--button))",
        textColor: "var(--text)",
        stroke : "var(--stroke)",
        mediumDark : "var(--mediumDark)",
        darkMain: "var(--darkMain)"
      }
    },
  },
  plugins: [],
}

