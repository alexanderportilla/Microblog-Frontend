/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Habilitar el modo Just-In-Time de Tailwind
  darkMode: 'class', // Habilitar el modo oscuro basado en clases
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}', // Rutas a los archivos de páginas
    './src/components/**/*.{js,ts,jsx,tsx}', // Rutas a los archivos de componentes
  ],
  theme: {
    extend: {}, // Espacio para extender configuraciones personalizadas
  },
  plugins: [], // Espacio para incluir plugins de Tailwind, si es necesario
};


