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
      class="inline-flex items-center  justify-center rounded-md p-2 text-current hover:bg-gray-200 dark:hover:bg-gray-200 transition-colors"
    >
      <span class={isDark() ? "i-carbon-sun w-5 h-5" : "i-carbon-moon w-5 h-5"} />
    </button>
    )
}