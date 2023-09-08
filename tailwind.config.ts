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
        lg2: "900px",
        tall: { raw: "(min-height: 850px)" },
      },
    },
  },
  plugins: [],
};
export default config;
