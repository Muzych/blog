// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetIcons({}),
    presetUno({}),
    presetAttributify({}),
  ],
  theme: {
    extend: {
        colors: {
            // Define custom colors if necessary
        }
    }
  },
  rules: [
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ],
  darkMode: 'class', // Use class-based dark mode
})