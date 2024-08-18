/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        limmat: '#fd8e00',
      },
      perspective: {
        '1000': '1000px',
      },
      transform: {
        'rotate-y-180': 'rotateY(180deg)',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [],
};

export default config;
