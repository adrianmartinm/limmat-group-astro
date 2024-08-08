/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}', // Asegúrate de incluir los archivos de tu proyecto
  ],
  theme: {
    extend: {
      colors: {
        limmat: '#fd8e00', // Define tu color personalizado
      },
    },
  },
  plugins: [],
};
