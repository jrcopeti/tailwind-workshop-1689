/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lima: {
          50: "#f5ffe6",
          500: "#77d111",
          900: "#0f4d00",
        },
      },
    },
  },
  plugins: [],
};
