// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import presetMini from '@unocss/preset-mini'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetIcons({}),
    presetUno({}),
    presetAttributify({}),
    presetMini({})
  ],
})