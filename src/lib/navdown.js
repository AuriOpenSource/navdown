const initialBottomValue = '0px';
const scrolledDownBottomValue = '80px';

let lastScrollTop = 0;
/**
 * The function updates the scroll position based on the direction of scrolling.
 * @param {CSSStyleDeclaration} style - An object representing the CSS style properties that will be updated.
 * @param {string} [scrolledHeight] - The `scrolledHeight` parameter represents the value to be set for the
 * `translate` property when the user is scrolling down.
 * @param {string} [initialHeight] - The initial height of the element before any scrolling occurs.
 * @param {number} scrollTop
 */
function updateScroll(style, scrollTop, scrolledHeight, initialHeight) {
	const isScrollingDown = scrollTop > lastScrollTop;

	style.transform = isScrollingDown
		? `translate3d(0, ${scrolledHeight ?? scrolledDownBottomValue}, 0)`
		: `translate3d(0, ${initialHeight ?? initialBottomValue}, 0)`;

	lastScrollTop = scrollTop;
}

/**
 * The function `handleScroll` updates the position of a nav element based on the
 * scroll direction.
 * @param {HTMLElement} node - The node parameter represents the DOM element that you want to adjust the position of
 * based on the scroll direction.
 * @param {import("./lib.js").Options} [options] - The "options" parameter is an object that contains additional configuration options
 * for the "handleScroll" function. It is optional and can be omitted if not needed.
 */
function handleScroll(node, { transition, initialHeight, scrolledHeight } = {}) {
	const style = node.style;
	style.willChange = 'transform';

	style.transitionDelay = transition?.transitionDelay ?? '0s';
	style.transitionDuration = transition?.transitionDuration ?? '300ms';
	style.transitionProperty = transition?.transitionProperty ?? 'transform';
	style.transitionTimingFunction =
		transition?.transitionTimingFunction ?? 'cubic-bezier(0.291, 0.281, 0, 1.2)';

	style.transform = `translate3d(0, ${initialHeight ?? initialBottomValue}, 0)`;

	function updateScrollWithRAF() {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		updateScroll(style, scrollTop, scrolledHeight, initialHeight);
	}
	
	function handleRAF() {
		requestAnimationFrame(updateScrollWithRAF);
	}

	addEventListener('scroll', handleRAF, { passive: true });
}

export default handleScroll;
