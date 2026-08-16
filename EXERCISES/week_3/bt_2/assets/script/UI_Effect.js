import { getScrollAmount, updateButtonStatus } from "./slider.js";
import { initCountUpEffect } from "./count_up_effect.js"; // Import the new function
import { initScrollRevealEffect, initStaggeredScrollRevealEffect } from "./scroll_reveal_effect.js"; // Import both scroll reveal functions
 
document.addEventListener('DOMContentLoaded', () => {
    //============== Section 2 Slider & Reveal Effect =============//
    let sect_2_container = document.getElementById('section-2-bottom-slider-container');
    let sect_2_prevBtn = document.getElementById('section-2-bottom-slider-prev');
    let sect_2_nextBtn = document.getElementById('section-2-bottom-slider-next');

    // Check if elements exist before adding event listeners
    if (sect_2_container && sect_2_prevBtn && sect_2_nextBtn) {
        // Xử lý sự kiện bấm nút Next
        sect_2_nextBtn.addEventListener('click', () => {
            sect_2_container.scrollBy({
                left: getScrollAmount(sect_2_container, '.news-bottom-item'),
                behavior: 'smooth'
            });
        });

        // Xử lý sự kiện bấm nút Prev
        sect_2_prevBtn.addEventListener('click', () => {
            sect_2_container.scrollBy({
                left: -getScrollAmount(sect_2_container, '.news-bottom-item'),
                behavior: 'smooth'
            });
        });

        // Lắng nghe sự kiện cuộn để cập nhật trạng thái nút
        const updateSect2Buttons = () => updateButtonStatus(sect_2_container, sect_2_prevBtn, sect_2_nextBtn);

        sect_2_container.addEventListener('scroll', updateSect2Buttons);
        window.addEventListener('load', updateSect2Buttons);
        window.addEventListener('resize', updateSect2Buttons);

        // Initial update
        updateSect2Buttons();
    } else {
        console.warn("Section 2 slider elements not found. Slider functionality might be impaired.");
    }

    //== TOP NEWS REVEAL EFFECT ==// (big news hiển thị khi 10%, small news hiển thị khi 50% của container hiển thị)
    initScrollRevealEffect('.news-top .big-wrap', 'fade-in-up', 0.2);
    initScrollRevealEffect('.news-top .small-wrap', 'fade-in-up', 0.5); 

    //== BOTTOM NEWS REVEAL EFFECT ==//
    initStaggeredScrollRevealEffect(
        '.news-bottom-wrapper', // Container để quan sát
        '.news-bottom-item',    // Các phần tử con sẽ được animate
        'zoom-in',              // Class animation
        0.5,                    // Ngưỡng kích hoạt: 50% của container hiển thị
        300                     // Độ trễ giữa các phần tử con: 300ms (0.3s)
    );

    //============== Section 3 Scroll Reveal Effect =============//
    initScrollRevealEffect('.section-3__desc', 'fade-in-up', 0.3);
    initScrollRevealEffect('.section-3 .bg-img', 'fade-in-up', 0.3);
    initScrollRevealEffect('.section-3__main-img', 'fade-in-up', 0.3);

    //============== Section 5 Count-up Effect & Mascot moving =============//
    initCountUpEffect();
    initScrollRevealEffect('.sign-info', 'rotate-board-in', 0.5);

    const section5 = document.querySelector('.section-5');
    const mascot = document.querySelector('.section-5-runway .mascot');

    if (section5 && mascot) {
        mascot.style.left = '10%';

        let mascotAnimated = false; // Cờ để đảm bảo animation chỉ chạy một lần

        const mascotObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !mascotAnimated) {
                mascot.style.left = '80%';
                mascotAnimated = true;
                mascotObserver.unobserve(entries[0].target);
            }
        }, {
            threshold: 0.8
        });

        mascotObserver.observe(section5);
    } else {
        if (!mascot) console.warn("Không tìm thấy phần tử Mascot. Hiệu ứng di chuyển của Mascot sẽ không được áp dụng.");
        if (!section5) console.warn("Không tìm thấy Section 5. Hiệu ứng di chuyển của Mascot sẽ không được áp dụng.");
    }


    //============== Section 6 Scroll Reveal Effect =============//
    // Áp dụng hiệu ứng fade-in-up cho nút "Xem thêm" trong Section 6
    initScrollRevealEffect('.section-6 .wrap .btn', 'fade-in-up', 0.5);

    //============== Section 7 Scroll Reveal Effect =============//
    let sect_7_container = document.getElementById('section-7-bottom-slider-container');
    let sect_7_prevBtn = document.getElementById('section-7-bottom-slider-prev');
    let sect_7_nextBtn = document.getElementById('section-7-bottom-slider-next');

    // Check if elements exist before adding event listeners
    if (sect_7_container && sect_7_prevBtn && sect_7_nextBtn) {
        // Xử lý sự kiện bấm nút Next
        sect_7_nextBtn.addEventListener('click', () => {
            sect_7_container.scrollBy({
                left: getScrollAmount(sect_7_container, '.news-slider-item'),
                behavior: 'smooth'
            });
        });

        // Xử lý sự kiện bấm nút Prev
        sect_7_prevBtn.addEventListener('click', () => {
            sect_7_container.scrollBy({
                left: -getScrollAmount(sect_7_container, '.news-slider-item'),
                behavior: 'smooth'
            });
        });

        // Lắng nghe sự kiện cuộn để cập nhật trạng thái nút
        const updateSect7Buttons = () => updateButtonStatus(sect_7_container, sect_7_prevBtn, sect_7_nextBtn);

        sect_7_container.addEventListener('scroll', updateSect7Buttons);
        window.addEventListener('load', updateSect7Buttons);
        window.addEventListener('resize', updateSect7Buttons);
        updateSect7Buttons(); // Initial update
    }

    initScrollRevealEffect('.section-7 .news-layout', 'fade-in-up', 0.3);
    initStaggeredScrollRevealEffect('.news-slider-container', '.news-slider-item', 'fade-in-up', 0.5, 300); 

    //============== Section 9 Scroll Reveal Effect =============//
    initScrollRevealEffect('.partner .item', 'zoom-in', 0.5);

    //============== Section 10 Scroll Reveal Effect =============//
    initStaggeredScrollRevealEffect('.boxes', '.box', 'fade-in-up', 0.8, 500);
    initScrollRevealEffect('.image-main', 'fade-in-right', 0.5);

    //============== Global Section Title Reveal Effect =============//
    initScrollRevealEffect('.section-title', 'fade-in-up', 0.8);
});
