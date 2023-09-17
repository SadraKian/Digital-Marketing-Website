import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AB55",
      },
      screens: {
        xsm: "420px",
        md2: "900px",
        tall: { raw: "(min-height: 720px)" },
        xtall: { raw: "(min-height: 900px)" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
