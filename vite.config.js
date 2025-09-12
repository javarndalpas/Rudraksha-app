import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  theme: {
    extend: {
      bgColor: "#0a0a0a",
    },
  },
  darkMode: 'selector'
})


