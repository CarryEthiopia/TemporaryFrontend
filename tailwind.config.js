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
        "open-door-animation": "openDoorAnimation 7s ease-in-out infinite",
      },
      keyframes: {
        openDoorAnimation: {
          "0%": {
            width: "100%",
            left: "0%",
            right: "0%",
          },
          "50%": {
            width: "50%",
            left: "0%",
            right: "50%",
          },
          "75%": {
            width: "50%",
            left: "50%",
            right: "0%",
          },
          "100%": {
            width: "100%",
            left: "0%",
            right: "0%",
          },
        },
      },
    },
  },
  plugins: [],
};
