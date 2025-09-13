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
        <main class="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
          <div class="flex items-center justify-between mb-4 w-full p-4">
            <div class="flex items-center gap-3">
              <a href="/" class="hover:text-blue-600 dark:hover:text-blue-400">Index</a>
              <a href="/about" class="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            </div>
            <ThemeToggle />
          </div>
          <Suspense>{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}