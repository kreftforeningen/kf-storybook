import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/kf-react-components/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
