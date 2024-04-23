import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-icon-active': 'linear-gradient(180deg, rgb(var(--sea-blue)) 0%, rgb(var(--sea-blue)) 50%, rgb(var(--dark-sea-blue)) 50%, rgb(var(--sea-blue)) 100%)',
        'gradient-icon-inactive': 'linear-gradient(180deg, rgba(82,82,82,1) 0%, rgba(82,82,82,1) 50%, rgba(56,56,56,1) 50%, rgba(82,82,82,1) 100%)',
      },
      colors: {
        "gray-titan": 'rgb(var(--gray-titan) / <alpha-value>)',
        "sea-blue": 'rgb(var(--sea-blue) / <alpha-value>)',
        "dark-sea-blue": 'rgb(var(--dark-sea-blue) / <alpha-value>)',
      },
      boxShadow: {
        'glow': '0px 0px 8px 0px rgba(255, 255, 255, 0.5)'
      }
    },
  },
  plugins: [],
};
export default config;
