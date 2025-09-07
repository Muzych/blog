import { defineConfig } from "@solidjs/start/config";
import UnoCSS from 'unocss/vite';


/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;
export default defineConfig({
  extensions: ["mdx", "md"],
  ssr: false, // 禁用服务端渲染
  experimental: {
    islands: false
  },
  vite: {
    plugins: [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx"
      }),
      UnoCSS()
    ]
  }
});
