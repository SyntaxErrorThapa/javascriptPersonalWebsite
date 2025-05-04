/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg-image": "url('/public/green-dust-and-scratches.png')",
        "custom-bg-profile": "url('/public/programmer.gif')",
      },
      colors: {
        "custom-bg": "#F4F4F4", // Dark background color
        "custom-text-darkGray": "#4A4A4A",
        "custom-text-softBlack": "#2E2E2E",
        "custom-text-navyBlue": "#1F3A93",
        "custom-text-warmBeige": "#D5C4A1",
        "custom-text-coolTeal": "#4CB3A5",
        "custom-text-pastelPink": "#E5A4B2",
        "custom-text-oliveGreen": "#7D8B6A",
        "custom-text-charcoal": "#333333",
        "custom-text-softCoral":"#E06C75",
      },
      fontFamily: {
        fira: ["Fira Code", "monospace"], // Your custom font
        courier: ["Courier New", "Courier", "monospace"], // Add vintage programming font
      },
    },
  },
  plugins: [],
};
