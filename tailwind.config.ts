import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import forms from "@tailwindcss/forms"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-bahnschrift)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: "#FF008A",
        accent: "#0082D8",
      },
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [forms],
}
export default config
