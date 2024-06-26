/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#151515',
        'input-dark': '#FFD369',
        'output-dark': '#EEEEEE',
        note: '#FFD369',
      },
      fontSize: {
        xs: '0.5rem',
      },
    },
  },
  plugins: [],
}
