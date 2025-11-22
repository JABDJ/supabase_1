// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // ===> AÑADE O MODIFICA ESTA PARTE <===
  daisyui: {
    themes: ["dark"], // Aquí especificamos el tema oscuro
    // Si quieres tener un tema claro y oscuro, puedes poner:
    // themes: ["light", "dark"],
  },
};