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
        <main>
          <div class="flex items-center justify-between mb-4 w-full">
            <div class="flex items-center gap-3">
              <a href="/">Index</a>
              <a href="/about">About</a>
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