/** Thử viết comment mô tả cho quen
 * Initializes a scroll reveal effect for specified elements.
 * Elements will start hidden and animate into view when they intersect the viewport.
 * @param {string} selector - CSS selector for the elements to observe.
 * @param {string} animationClass - CSS class to add when the element should animate.
 * @param {number} threshold - A number between 0 and 1, indicating the percentage of the target element which is visible to trigger the callback.
 */
export function initScrollRevealEffect(selector, animationClass, threshold = 0.5) {
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) {
        console.warn(`No elements found for selector: "${selector}". Scroll reveal effect will not be applied.`);
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: threshold
    });

    elements.forEach(element => {
        // Add a class to initially hide the element before observation starts
        // This class should define the initial hidden state (e.g., opacity: 0, transform: translateY(20px))
        element.classList.add('scroll-hidden');
        observer.observe(element);
    });
}

/**
 * Initializes a staggered scroll reveal effect for child elements within a specified container.
 * The container is observed, and when it intersects the viewport, its children will animate into view
 * one by one with a defined delay.
 * @param {string} containerSelector - CSS selector for the parent container to observe.
 * @param {string} childSelector - CSS selector for the child elements within the container to animate.
 * @param {string} animationClass - CSS class to add to children when they should animate.
 * @param {number} threshold - A number between 0 and 1, indicating the percentage of the target container which is visible to trigger the callback.
 * @param {number} staggerDelay - The delay in milliseconds between each child's animation.
 */
export function initStaggeredScrollRevealEffect(containerSelector, childSelector, animationClass, threshold = 0.5, staggerDelay = 0) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.warn(`Container not found for selector: "${containerSelector}". Staggered scroll reveal effect will not be applied.`);
        return;
    }

    const children = container.querySelectorAll(childSelector);
    if (children.length === 0) {
        console.warn(`No children found for selector: "${childSelector}" within container "${containerSelector}". Staggered scroll reveal effect will not be applied.`);
        return;
    }

    // Initially hide all children
    children.forEach(child => {
        child.classList.add('scroll-hidden');
    });

    const observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add(animationClass);
                }, index * staggerDelay);
            });
            observer.unobserve(entries[0].target); // Stop observing once animated
        }
    }, {
        threshold: threshold
    });

    observer.observe(container);
}