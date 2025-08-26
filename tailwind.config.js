/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables dark mode via class
  content: [
  "./index.html",
  "./src/App.jsx",
  "./src/main.jsx",
  "./src/components/*.{js,jsx}",
  "./src/pages/*.{js,jsx}",
  "./src/store/*.{js,jsx}",
  "./src/hooks/*.{js,jsx}",
  "./src/utils/*.{js,jsx}",
],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f9f9f9",
          dark: "#111827",
        },
        surface: {
          light: "#ffffff",
          dark: "#1f2937",
        },
        text: {
          light: "#111827",
          dark: "#f3f4f6",
        },
        accent: {
          DEFAULT: "#8b5cf6", // muted violet for modern accent
          hover: "#7c3aed",
        },
      },
    },
  },
  plugins: [],
};
