/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "search-translate": {
          "0%": {
            transform: "translate(0,0)",
            width: "4rem",
          },  
          "100%": {
            transform: "translate(-30,0)",
            width:"54vw",
          },
        },
        "search-width": {
          "0%": {
            width: "4rem",
          },  
          "100%": {
            width:"54vw",
          },
        },
      },
      animation: {
        "search-translate" : "search-translate 3s ease forwards",
        "search-width" : "search-width 1s ease forwards",
      },
    },
  },
  plugins: [],
};
