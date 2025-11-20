import { createSignal, For, onMount } from "solid-js";

type ReactionType = {
  id: string;
  emoji: string;
  label: string;
};

const REACTIONS: ReactionType[] = [
  { id: "like", emoji: "👍", label: "有用" },
  { id: "mindblown", emoji: "🤯", label: "启发" },
  { id: "resonate", emoji: "🌿", label: "共鸣" },
  { id: "thanks", emoji: "☕", label: "感谢" },
];

export default function Reaction(props: { id: string }) { // props.id 是文章的唯一标识
  // 模拟数据库：存储每个表情的点击数
  const [counts, setCounts] = createSignal<Record<string, number>>({});
  // 记录用户是否已经点过（防止刷票，同时也用于高亮）
  const [userVoted, setUserVoted] = createSignal<string | null>(null);

  onMount(() => {
    // 1. 加载计数 (模拟从服务器获取)
    const savedCounts = localStorage.getItem(`reaction_counts_${props.id}`);
    if (savedCounts) {
      setCounts(JSON.parse(savedCounts));
    } else {
      // 初始化默认数据
      setCounts({ like: 12, mindblown: 5, resonate: 8, thanks: 3 });
    }

    // 2. 检查用户是否点过
    const voted = localStorage.getItem(`user_voted_${props.id}`);
    if (voted) setUserVoted(voted);
  });

  const handleVote = (typeId: string) => {
    if (userVoted() === typeId) return; // 如果已经点过这个，就不动了（或者可以做取消逻辑）

    // 更新计数
    const newCounts = { ...counts(), [typeId]: (counts()[typeId] || 0) + 1 };
    // 如果用户之前点过别的，把那个别的减掉（单选逻辑，可选改为多选）
    if (userVoted()) {
      newCounts[userVoted()!] = Math.max(0, newCounts[userVoted()!] - 1);
    }

    setCounts(newCounts);
    setUserVoted(typeId);

    // 保存到本地 (模拟存库)
    localStorage.setItem(`reaction_counts_${props.id}`, JSON.stringify(newCounts));
    localStorage.setItem(`user_voted_${props.id}`, typeId);
  };

  return (
    <div class="mt-16 mb-8">
      <div class="flex items-center justify-center gap-2 text-xs font-medium text-stone-400 mb-4 uppercase tracking-widest">
        Did this grow on you?
      </div>
      
      <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <For each={REACTIONS}>
          {(item) => (
            <button
              onClick={() => handleVote(item.id)}
              class={`
                group relative flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300
                ${
                  userVoted() === item.id
                    ? "bg-stone-100 border-stone-300 dark:bg-stone-800 dark:border-stone-600 scale-105 shadow-sm" 
                    : "bg-transparent border-transparent hover:bg-stone-50 hover:border-stone-200 dark:hover:bg-[#1c1917] dark:hover:border-stone-800"
                }
              `}
            >
              <span class={`text-xl transition-transform duration-300 group-hover:scale-125 ${userVoted() === item.id ? "scale-125" : ""}`}>
                {item.emoji}
              </span>
              <span class={`text-sm transition-colors ${userVoted() === item.id ? "text-stone-800 dark:text-stone-200" : "text-stone-500 dark:text-stone-500"}`}>
                {counts()[item.id] || 0}
              </span>
            </button>
          )}
        </For>
      </div>
    </div>
  );
}
