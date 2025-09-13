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
            localStorage.setItem("theme", next ? "dark": "light");
        } catch {}
        setIsDark(next);
    };

    return (
        <button
          type="button"
          aria-label="切换主题"
          onClick={toggle}
          class="inline-flex items-center justify-center rounded-md p-2 text-stone-600 hover:bg-stone-200/80 dark:text-stone-300 dark:hover:bg-slate-600/80 transition-all duration-200"
        >
          <span class={isDark() ? "i-carbon:moon w-5 h-5" : "i-carbon:sun w-5 h-5"} />
        </button>
      )
}