import { Match, Switch } from "solid-js";

type StatusType = "seed" | "evergreen";

export default function Status(props: { type: StatusType }) {
  return (
    <div class="flex items-center gap-2 text-sm font-medium mb-6 bg-stone-100 dark:bg-[#1c1917] w-fit px-3 py-1 rounded-full border border-stone-200 dark:border-stone-800 transition-colors">
      <Switch>
        <Match when={props.type === "seed"}>
          <span class="text-lg leading-none">🌱</span>
          <span class="text-stone-600 dark:text-stone-400">种子阶段 (Seeding)</span>
        </Match>
        <Match when={props.type === "evergreen"}>
          <span class="text-lg leading-none">🌲</span>
          <span class="text-emerald-600 dark:text-emerald-400">长青内容 (Evergreen)</span>
        </Match>
      </Switch>
    </div>
  );
}
