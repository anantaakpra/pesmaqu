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
        pesmaqu: {
          50: '#fdfbf2',
          100: '#fbf5e1',
          200: '#f6e9bc',
          300: '#edd88d',
          400: '#e1c258',
          500: '#bf9000',
          600: '#a37a00',
          700: '#7d5c00',
          800: '#5c4300',
          900: '#3d2b00',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config;
