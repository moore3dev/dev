import type { Config } from "tailwindcss";
import { transferableAbortController } from "util";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#181C14",
        darkGrey: "#3C3D37",
        greenGrey: "#697565",
        cream: "#ECDFCC"
      },
      keyframes: {
        comeDown: {
          "0%":  {
            opacity: "0",
            "z-index": "-100",
          },
          "1%": { 
            opacity: "1",
          },
          "90%" : {
            "z-index": "-100",
          },
          "100%": {
            opacity : "1",
            "z-index": "40",
          }
        }
      },
      animation: {
        comeDown: "comeDown 2s linear"
      }
    },
  },
  plugins: [],
} satisfies Config;