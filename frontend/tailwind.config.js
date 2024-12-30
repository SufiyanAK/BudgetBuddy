/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F1F1F2',
        secondary: '#36454f',
        "secondary-hover": '#36455f',
      },
      height: {
        'full-viewport': '100vh', // Custom class if needed
      },
      minHeight: {
        'screen-90': '90vh', // Example for a partial screen height
      },
    },
  },
  plugins: [],
};
