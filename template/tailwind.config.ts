import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:"#85CDC5",
        main: "#256E66",
        lighterMain: "#113934",
        alternate: "rgba(185, 156, 135, 0.83)",
        alternateDarker: "rgb(170, 141, 120)",
        alternateDark: "rgb(134, 111, 94)",
        text1: "rgb(255, 221, 188)",
        text2: "rgb(7, 47, 42)",
      },
    },
  },
  plugins: [],
} satisfies Config;
