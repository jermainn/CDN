const sliders = document.querySelectorAll('.slider');
const containers = document.querySelectorAll('.image-container');

sliders.forEach((slider, index) => {
    const container = containers[index];
    const beforeImage = container.querySelector('.image-before');
    const afterImage = container.querySelector('.image-after');
    let isDragging = false;
    
    // 处理鼠标按下事件
    slider.addEventListener('mousedown', (event) => {
        isDragging = true;
        updateSlider(event.pageX, slider, afterImage, container);
    });

    // 处理鼠标抬起事件
    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // 处理鼠标移动事件
    window.addEventListener('mousemove', (event) => {
        if (isDragging) {
            updateSlider(event.pageX, slider, afterImage, container);
        }
    });

    // 添加点击事件来移动 slider
    container.addEventListener('click', (event) => {
        updateSlider(event.pageX, slider, afterImage, container);
    });
});

function updateSlider(mouseX, slider, afterImage, container) {
    const { left, width } = container.getBoundingClientRect();
    let offsetX = mouseX - left;

    // 限制滑动范围
    offsetX = Math.max(0, Math.min(offsetX, width));

    slider.style.left = `${offsetX}px`;
    afterImage.style.clip = `rect(0, ${offsetX}px, ${container.offsetHeight}px, 0)`;
}