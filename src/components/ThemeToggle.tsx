import { createSignal, onMount } from "solid-js";

export default function ThemeToggle() {
  const [isDark, setIsDark] = createSignal(false);

  onMount(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  })

  const toggle = () => {
    const next = !isDark();
    document.documentElement.classList[next ? "add" : "remove"]("dark");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch { }
    setIsDark(next);
  };

  return (
    <button
      type="button"
      aria-label="切换主题"
      onClick={toggle}
      // 调整大小：w-9 -> w-12, h-9 -> h-12
      class="w-12 h-12 flex items-center justify-center rounded-full transition-colors focus:outline-none hover:bg-transparent border-none bg-transparent cursor-pointer p-0"
    >
      {/* 调整图标大小：w-5 -> w-6, h-5 -> h-6 */}
      <span class={`w-6 h-6 transition-colors ${isDark() ? "i-carbon:moon text-stone-500 hover:text-stone-200" : "i-carbon:sun text-stone-400 hover:text-stone-600"}`} />
    </button>
  )
}