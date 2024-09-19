/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-light': '#F5F5F5', // Light background color
        'bg-dark': '#333333',  // Dark background color
        'olive-green': '#4A5D23', // Olive green color
        'olive-green-dark': '#3A4D1A', // Darker olive green color
        'text-light': '#F9F9F9', // Light text color
        'text-dark': '#333333'   // Dark text color
      },
    },
  },
  plugins: [],
}
