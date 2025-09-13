import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import 'virtual:uno.css';
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <Router
      root={props => (
        <div class="min-h-screen bg-stone-50 text-stone-800 dark:bg-slate-800 dark:text-stone-200 transition-colors duration-300">
          {/* 导航栏 - 莫兰迪风格 */}
          <header class="w-full bg-stone-100/80 dark:bg-slate-700/80 backdrop-blur-sm border-b border-stone-200/60 dark:border-slate-600/60">
            <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
              <nav class="flex items-center gap-6">
                <a href="/" class="hover:text-amber-700 dark:hover:text-amber-400 transition-colors font-medium">Index</a>
                <a href="/about" class="hover:text-amber-700 dark:hover:text-amber-400 transition-colors font-medium">About</a>
              </nav>
              <ThemeToggle />
            </div>
          </header>
          
          {/* 主内容区域 - 与导航栏完美对齐 */}
          <main class="max-w-5xl mx-auto px-4 py-8">
            <Suspense>{props.children}</Suspense>
          </main>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}