import { defineConfig } from 'unocss'
import presetAttributify from '@unocss/preset-attributify';
import presetWind3 from '@unocss/preset-wind3';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
  // ...UnoCSS options
  shortcuts:[
    {logo:'i-logos-solidjs-icon w-6em h-6em transform transition-800 hover:rotate-360'}
  ],
  presets:[
    presetWind3(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  rules:[
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ]
})