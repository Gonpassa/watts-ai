/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        textColor: 'rgb(var(--color-text) / <alpha-value>)',
        primaryBtn: 'rgb(var(--primary-btn) / <alpha-value>)',
        secondaryBtn: 'rgb(var(--secondary-btn) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',

      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

/*     Primary: #d0f6fb (RGB: 208, 246, 251)
Secondary: #03191c (RGB: 3, 25, 28)
Primary Button: #60dff0 (RGB: 96, 223, 240)
Secondary Button: #052e33 (RGB: 5, 46, 51)
Accent: #49dbee (RGB: 73, 219, 238) */

