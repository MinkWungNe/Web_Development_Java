// Tại lười nên hardcore luôn phần này cho section 5 luôn chứ ko thiết kế theo module truyền tham số
export function initCountUpEffect() {
    const section5 = document.querySelector('.section-5');
    if (!section5) {
        console.warn("Section 5 not found. Count-up effect will not be applied.");
        return;
    }

    const numberSpans = section5.querySelectorAll('.number');
    let hasAnimated = false; // Flag để đảm bảo animation chỉ chạy một lần

    const animateNumber = (element, duration = 3000) => {
        const text = element.textContent;
        // Regex để tách phần số và phần hậu tố (ví dụ: '+', 'k+')
        // ^(\d+): Bắt đầu với một hoặc nhiều chữ số (phần số)
        // ([k\+]?.*)$: Theo sau là một ký tự 'k' hoặc '+' tùy chọn, rồi đến bất kỳ ký tự nào khác (phần hậu tố)
        const match = text.match(/^(\d+)([k\+]?.*)$/i);
        if (!match) {
            console.warn(`Could not parse number from: ${text}`);
            return;
        }

        const targetNumber = parseInt(match[1], 10);
        const suffix = match[2] || ''; // Lấy phần hậu tố
        let currentNumber = 0;
        const startTime = performance.now();

        const updateCount = (timestamp) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            currentNumber = Math.floor(progress * targetNumber);

            element.textContent = currentNumber + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = targetNumber + suffix;
            }
        };

        requestAnimationFrame(updateCount);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting && !hasAnimated) {
            numberSpans.forEach(span => animateNumber(span));
            hasAnimated = true;
            observer.unobserve(entries[0].target); // Ngừng quan sát sau khi animation đã chạy
        }
    }, {
        threshold: 0.5 // Kích hoạt khi 50% của section hiển thị
    });

    observer.observe(section5);
}