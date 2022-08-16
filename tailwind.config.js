/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-light": ["Poppins-Light,sans-serif"],
        "poppins-regular": ["Poppins-Regular,sans-serif"],
        "poppins-medium": ["Poppins-Medium,sans-serif"],
        "poppins-bold": ["Poppins-Bold,sans-serif"],
      },
      textColor: {
        primary: "#152C5B",
        secondary: "#B0B0B0",
        active: "#3252DF",
      },
      backgroundColor: {
        primary: "#3252DF",
        secondary: "#F5F6F8",
        red: "#E74C3C",
        green: "#1ABC9C",
        pink: "#FF498B",
      },
    },
  },
  plugins: [],
};
