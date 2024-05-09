document.addEventListener("astro:page-load", function() {
    // 获取按钮元素
    var menuToggle = document.getElementById("menuToggle");

    // 当按钮被点击时，切换两个图标的显示和隐藏
    menuToggle.addEventListener("click", function() {
        var closeIcon = document.getElementById("closeIcon");
        var menuIcon = document.getElementById("menuIcon");
        // 判断哪个图标当前是隐藏的，并进行切换
        if (closeIcon.classList.contains("hidden")) {
            closeIcon.classList.remove("hidden");
            menuIcon.classList.add("hidden");
        } else {
            closeIcon.classList.add("hidden");
            menuIcon.classList.remove("hidden");
        }
    });
});
