/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeBounce: {
          "0%": { opacity: "0", transform: "translateY(24px) scale(0.96)" },
          "60%": { opacity: "1", transform: "translateY(-8px) scale(1.02)" },
          "80%": { transform: "translateY(2px) scale(1)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.9)" },
          "55%": { opacity: "1", transform: "translateY(-8px) scale(1.04)" },
          "78%": { transform: "translateY(2px) scale(0.99)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "fade-bounce": "fadeBounce 700ms ease-out forwards",
        "bounce-in": "bounceIn 620ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};