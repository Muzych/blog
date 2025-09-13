// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

// 首屏加载前应用主题，避免闪烁
(() => {
  try {
    const t = localStorage.getItem('theme');
    const m = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const d = t ? t === 'dark' : m;
    document.documentElement.classList[d ? 'add' : 'remove']('dark');
  } catch {}
})();

mount(() => <StartClient />, document.getElementById("app")!);