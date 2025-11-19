// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Rutas de tus archivos
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Añade daisyui
  daisyui: {
    themes: ["dark"], // Configura el tema
  },
}