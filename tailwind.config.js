/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#F66F1E",
        "custom-blue": "#34B1FF",
      },
      animation: {
        "letter-change": "letterChange 8s linear infinite",
      },
      keyframes: {
        letterChange: {
          "0%": { opacity: "1", color: "#08094b	" },
          "25%": { opacity: "1", color: "#F66F1E" }, // Custom color change
          "50%": { opacity: "1", color: "#1a3c5e" }, // Custom color change
          "75%": { opacity: "1", color: "#727272	" }, // Custom color change
          "100%": { opacity: "1", color: "#dbe4ee	" },
        },
      },
    },
  },
  plugins: [],
};

