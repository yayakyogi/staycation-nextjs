/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-extralight": ["Poppins-ExtraLight,sans-serif"],
        "poppins-light": ["Poppins-Light,sans-serif"],
        "poppins-regular": ["Poppins-Regular,sans-serif"],
        "poppins-medium": ["Poppins-Medium,sans-serif"],
        "poppins-semibold": ["Poppins-SemiBold,sans-serif"],
        "poppins-bold": ["Poppins-Bold,sans-serif"],
      },
      textColor: {
        primary: "#152C5B",
        secondary: "#B0B0B0",
        active: "#3252DF",
        green: "#1ABC9C",
      },
      backgroundColor: {
        primary: "#3252DF",
        secondary: "#F5F6F8",
        grey: "#E5E5E5",
        red: "#E74C3C",
        green: "#1ABC9C",
        pink: "#FF498B",
        dark: "#152C5B",
      },
      borderColor: {
        grey: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
