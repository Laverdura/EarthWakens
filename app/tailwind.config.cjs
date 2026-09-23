/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
