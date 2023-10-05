const DEFAULT_DEBOUNCE_DELAY = 100; 
const initialBottomValue = '0px';
const scrolledDownBottomValue = '0px 80px';

/**
 * The debounce function delays the execution of a function until a certain amount of time has passed
 * since the last time it was called.
 * @param {import("./lib.js").DebounceFunction} fn - The `fn` parameter is a function that you want to debounce. It is the function that will
 * be called after the debounce delay has passed without any further function calls.
 * @param {number} delay - The `delay` parameter is the amount of time in milliseconds that the function should
 * wait before executing the debounced function.
 * @returns The debounce function returns a new function that will execute the provided function (fn)
 * after a specified delay (delay) has passed.
 */
function debounce(fn, delay = DEFAULT_DEBOUNCE_DELAY) {
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
 * The function updates the scroll position based on the direction of scrolling.
 * @param {CSSStyleDeclaration} style - An object representing the CSS style properties that will be updated.
 * @param {number} lastScrollTop - The last recorded scroll position. It is used to determine if the user is
 * scrolling up or down.
 * @param {string} [scrolledHeight] - The `scrolledHeight` parameter represents the value to be set for the
 * `translate` property when the user is scrolling down.
 * @param {string} [initialHeight] - The initial height of the element before any scrolling occurs.
 */
function updateScroll(style, lastScrollTop, scrolledHeight, initialHeight) {
	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	const isScrollingDown = scrollTop > lastScrollTop;

	style.translate = isScrollingDown
		? scrolledHeight ?? scrolledDownBottomValue
		: initialHeight ?? initialBottomValue;

	lastScrollTop = scrollTop;
}

/**
 * The function `handleScroll` updates the position of a nav element based on the
 * scroll direction.
 * @param {HTMLElement} node - The node parameter represents the DOM element that you want to adjust the position of
 * based on the scroll direction.
 * @param {import("./lib.js").Options} options - The "options" parameter is an object that contains additional configuration options
 * for the "handleScroll" function. It is optional and can be omitted if not needed.
 */
function handleScroll(node, { transition, initialHeight, scrolledHeight }) {
	let lastScrollTop = 0;

	
	const style = node.style;
	style.willChange = 'translate';

	style.transitionDelay = transition?.transitionDelay ?? '0s';
	style.transitionDuration = transition?.transitionDuration ?? '300ms';
	style.transitionProperty = transition?.transitionProperty ?? 'translate';
	style.transitionTimingFunction = transition?.transitionTimingFunction ?? 'cubic-bezier(0.291, 0.281, 0, 1.2)';


	console.log(transition);
	style.translate = initialHeight ?? initialBottomValue;

	addEventListener(
		'scroll',
		debounce(() => updateScroll(style, lastScrollTop, scrolledHeight, initialHeight), DEFAULT_DEBOUNCE_DELAY),
		{ passive: true }
	);
}

export default handleScroll;
