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
        // 1. 父容器：限制高度为 h-screen，隐藏整体溢出
        <div class="h-screen overflow-hidden flex flex-col md:flex-row">
          
          {/* --- 侧边栏 (20%-30%) --- */}
          {/* 侧边栏保持原样，已经是 h-screen */}
          <aside class="w-full md:w-72 shrink-0 md:h-full bg-[#fbfbf9] dark:bg-[#0a0a0a] border-b md:border-b-0 md:border-r border-stone-100 dark:border-[#1c1917] flex flex-col p-6 md:p-8 z-10 transition-colors duration-300">
            
            {/* 1. 身份区域 */}
            <div class="mb-8 flex items-center gap-4 md:block">
               <div class="w-12 h-12 md:w-16 md:h-16 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden shrink-0 flex items-center justify-center text-2xl">
                  {/* 这里可以用 img 标签换成你的真实头像 */}
                  👨‍🌾
               </div>
               <div class="md:mt-4">
                 <h1 class="!text-lg !md:text-xl !m-0 !font-bold tracking-tight text-stone-800 dark:text-stone-100">Woodson's Garden</h1>
                 <p class="!text-sm !text-stone-500 !dark:text-stone-400 !mt-1 !mb-0">数字花园建设中...</p>
               </div>
            </div>

            {/* 2. 核心导航 */}
            <nav class="flex md:flex-col gap-2 md:gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
              <a href="/" class="px-3 py-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-sm font-medium block whitespace-nowrap">
                🏠 首页 (Home)
              </a>
              <a href="/now" class="px-3 py-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-sm font-medium block whitespace-nowrap">
                📍 当下 (Now)
              </a>
              <a href="/meta" class="px-3 py-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-sm font-medium block whitespace-nowrap">
                🧠 关于 (Meta)
              </a>
            </nav>

            {/* 3. 分类索引 (占位) */}
            <div class="mt-8 hidden md:block">
              <h3 class="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3 px-3">分类索引</h3>
              <ul class="space-y-1">
                 <li>
                    <span class="px-3 py-1 text-stone-400 text-sm cursor-not-allowed flex justify-between group">
                       <span>📥 输入 (Input)</span>
                       <span class="text-xs opacity-50 group-hover:opacity-100">空</span>
                    </span>
                 </li>
                 <li>
                    <span class="px-3 py-1 text-stone-400 text-sm cursor-not-allowed flex justify-between group">
                       <span>📤 输出 (Output)</span>
                       <span class="text-xs opacity-50 group-hover:opacity-100">空</span>
                    </span>
                 </li>
              </ul>
            </div>

            {/* 底部工具栏 - 移除了 ThemeToggle */}
            <div class="mt-auto pt-6 border-t border-stone-100 dark:border-[#1c1917] flex items-center justify-between">
               <span class="text-xs text-stone-400">© 2025</span>
               {/* <ThemeToggle />  <-- 移除 */}
            </div>
          </aside>
          
          {/* --- 正文区域 (70%-80%) --- */}
          {/* 2. 主内容区：允许垂直滚动 overflow-y-auto */}
          <main class="flex-1 h-full overflow-y-auto transition-colors duration-300 relative scroll-smooth">
            {/* 新增：右上角主题切换按钮 */}
            <div class="absolute top-4 right-4 md:top-8 md:right-8 z-20">
              <ThemeToggle />
            </div>

            <div class="max-w-3xl mx-auto px-6 py-12 md:px-12 md:py-20 animate-fade-in">
              <Suspense>{props.children}</Suspense>
            </div>
          </main>

        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}