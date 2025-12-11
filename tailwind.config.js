/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'amy-morado': '#5B2C6F', // Color fuerte
        'amy-vainilla': '#FFFDD0',
        'amy-crema': '#fff7ed', // Color suave para fondos principales
        'amy-lila': '#F4E7F8',   // Color claro para fondos secundarios
        'amy-rosa': '#E91E63',   // Color de acento (botones, etc.)
        'amy-texto': '#3E2723',  // Un marrón oscuro para texto (más suave que el negro puro)
      }
    },
  },
  plugins: [],
};