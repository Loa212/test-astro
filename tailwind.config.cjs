/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        jade: {
          50: "#58948c",
          100: "#4e8a82",
          200: "#448078",
          300: "#3a766e",
          400: "#306c64",
          500: "#26625a",
          600: "#1c5850",
          700: "#124e46",
          800: "#08443c",
          900: "#003a32",
        },
      },
    },
  },
  plugins: [],
};
