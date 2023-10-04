const transitionTimingFunction = 'cubic-bezier(0.291, 0.281, 0, 1.2)';
const initialBottomValue = '0px';
const scrolledDownBottomValue = '0px 80px';

/**
 * The debounce function delays the execution of a function until a certain amount of time has passed
 * since the last time it was called.
 * @param {DebounceFunction} fn - The `fn` parameter is a function that you want to debounce. It is the function that will
 * be called after the debounce delay has passed without any further function calls.
 * @param {number} delay - The `delay` parameter is the amount of time in milliseconds that the function should
 * wait before executing the debounced function.
 * @returns The debounce function returns a new function that will execute the provided function (fn)
 * after a specified delay (delay) has passed.
 */
function debounce(fn, delay = 200) {
    /** @type {string | number | NodeJS.Timeout | undefined} */
    let timer;

    return (/** @type {any[]} */ ...args) => {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

/**
 * The function `handleScroll` updates the position of a node and a floating action button based on the
 * scroll direction.
 * @param {HTMLElement} node - The node parameter represents the DOM element that you want to adjust the position of
 * based on the scroll direction.
 * @param {Options} options - The "options" parameter is an object that contains additional configuration options
 * for the "handleScroll" function. It is optional and can be omitted if not needed.
 */
function handleScroll(node, options) {
    const style = node.style;
    let lastScrollTop = 0;

    if (typeof options.transition !== 'string') {
        const transition = options.transition;
        style.transitionDelay = transition?.transitionDelay ?? '0s';
        style.transitionDuration = transition?.transitionDuration ?? '300ms';
        style.transitionProperty = transition?.transitionProperty ?? 'translate';
        style.transitionTimingFunction = transition?.transitionTimingFunction ?? transitionTimingFunction;
    }

    if (typeof options.transition === 'string') style.transition = options.transition;

    style.translate = options.initialHeight ?? initialBottomValue;

    /**
     * The function updates the scroll position and adjusts the position of a node and a floating action
     * button based on the scroll direction.
     */
    function updateScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const isScrollingDown = scrollTop > lastScrollTop;
        style.translate = isScrollingDown ? options.scrolledHeight ?? scrolledDownBottomValue : options.initialHeight ?? initialBottomValue;

        lastScrollTop = scrollTop;
    }

    addEventListener('scroll', debounce(updateScroll, 100), { passive: true });
}

export default handleScroll