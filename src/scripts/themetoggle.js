// 定义一个初始化函数来设置暗黑模式的初始状态
function initializeTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// 定义一个切换暗黑模式的函数
function toggleDarkMode() {
  // 切换HTML的class
  const isDarkMode = document.documentElement.classList.toggle('dark');

  // 保存当前主题到localStorage
  if (isDarkMode) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }

  // 切换图标的显示
  const sunIcon = document.querySelector('.sun');
  const moonIcon = document.querySelector('.moon');
  if (sunIcon && moonIcon) {
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
  }
}

// 当文档加载完成后执行初始化函数
document.addEventListener('DOMContentLoaded', () => {
  // 初始化暗黑模式的状态
  initializeTheme();

  // 获取切换按钮
  const themeToggleButton = document.getElementById('themeToggle');

  // 为按钮添加点击事件监听器
  themeToggleButton.addEventListener('click', toggleDarkMode);
});