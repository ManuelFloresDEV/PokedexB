/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handjet: ["Handjet", "sans-serif"],
      },
      animation: {
        customPulse: "customPulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite", // Cambia la duración a 1s para que sea más rápida
      },
      keyframes: {
        customPulse: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.02)",
          },
        },
      },
    },
  },
  plugins: [],
};
