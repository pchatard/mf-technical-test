/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "rotateX(90deg)" }, // translateY(100%)
          "75%": { opacity: 0.75, transform: "rotateX(90deg)" },
          "100%": { opacity: 1, transform: "rotateX(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "75%": { opacity: 0.25, transform: "rotateX(0deg)" },
          "100%": { opacity: 0, transform: "rotateX(-90deg)" },
        },
      },
    },
  },
  plugins: [],
};
