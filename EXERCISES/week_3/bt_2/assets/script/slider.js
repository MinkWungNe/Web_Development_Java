export function getScrollAmount(container, childSelector) {
    // Tìm phần tử con đầu tiên trong container dựa trên childSelector được truyền vào.
    const card = container.querySelector(childSelector);
    
    if (!card) {
        console.warn(`Could not find a slider item with selector "${childSelector}" in the container to calculate scroll amount.`);
        return 0; // Trả về 0 để tránh lỗi, nhưng thanh cuộn sẽ không hoạt động
    }
    const cardWidth = card.getBoundingClientRect().width;
    
    const style = window.getComputedStyle(container);
    const gap = parseFloat(style.gap) || 0;
    
    return cardWidth + gap;
}

export function updateButtonStatus(container, prevBtn, nextBtn) {
    // Kiểm tra nếu vị trí cuộn ở sát mép trái
    prevBtn.disabled = container.scrollLeft <= 5;
    
    // Kiểm tra nếu vị trí cuộn chạm mép phải (bằng tổng chiều rộng thực tế trừ đi chiều rộng khung nhìn)
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    nextBtn.disabled = container.scrollLeft >= maxScrollLeft - 5;

    // Cập nhật style cho nút Prev khi disabled
    if (prevBtn.disabled) {
        prevBtn.style.color = 'rgba(25, 43, 101, 0.3)'; // Màu chữ mờ (30% alpha)
        prevBtn.style.borderColor = 'rgba(226, 232, 240, 0.5)'; // Màu border mặc định mờ (50% alpha của #E2E8F0)
        prevBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Màu nền mặc định mờ (50% alpha của #ffffff)
    } else {
        // Xóa inline style để CSS mặc định (bao gồm cả hover) có hiệu lực
        prevBtn.style.color = '';
        prevBtn.style.borderColor = '';
        prevBtn.style.backgroundColor = '';
    }

    // Cập nhật style cho nút Next khi disabled
    if (nextBtn.disabled) {
        nextBtn.style.color = 'rgba(25, 43, 101, 0.3)';
        nextBtn.style.borderColor = 'rgba(226, 232, 240, 0.5)';
        nextBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    } else {
        nextBtn.style.color = '';
        nextBtn.style.borderColor = '';
        nextBtn.style.backgroundColor = '';
    }
}