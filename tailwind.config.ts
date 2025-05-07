import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        periwinkle: {
          50: '#f5f6ff',
          100: '#ebedff',
          200: '#d6daff',
          300: '#b3baff',
          400: '#8a94ff',
          500: '#6b6eff',
          600: '#4d4dff',
          700: '#3d3de6',
          800: '#2f2fb3',
          900: '#252580',
        },
      },
    },
  },
  plugins: [],
};

export default config; 