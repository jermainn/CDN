// disableContextMenu.js
function disableContextMenu(event) {
    event.preventDefault();
}

// 确保在DOM加载完成后绑定事件
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', disableContextMenu);
});