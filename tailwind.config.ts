import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A1C71',
        secondary: '#D76D77',
        tertiary: '#FFAD7B',
        neutral: '#CDCDCD',
        primaryGradient: {
          start: '#3A1C71',   // Warna pada langkah pertama
          center: '#D76D77',     // Warna pada langkah kedua
          end: '#FFAD7B',     // Warna pada langkah ketiga
        },
      },
      linearGradientColors: {
        '180': '180deg, #primaryGradient-start 0%, #primaryGradient-center 50%, #primaryGradient-end 100%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        serif: ['var(--font-metafiz)'],
        sans: ['var(--font-centra)'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      defaultExtendTheme: "light",
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          colors: {
            //   background: "#FFFFFF", // or DEFAULT
            //   foreground: "#11181C", // or 50 to 900 DEFAULT
            // primary: {
            //   //... 50 to 900
            //   // foreground: "#FFFFFF",
            //   // DEFAULT: "180deg, #primaryGradient-start 0%, #primaryGradient-center 50%, #primaryGradient-end 100%",
            // },
            //   // ... rest of the colors
          },
        },
      },
    })
  ],

}
export default config
