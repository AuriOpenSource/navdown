type TimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
type SecondOrMilisecond = `${number}s` | `${number}ms`;
type Property = 'all' | 'position' | 'translate' | 'transform';

/**
 * An object that contains options for configuring a transition.
 *
 * @example
 *
 * const transitionOptions: TransitionOptions = {
 *   transitionDuration: '0.3s',
 *   transitionTimingFunction: 'ease-in-out',
 *   transitionDelay: '0s',
 *   transitionProperty: 'transform',
 * };
 */
export interface TransitionOptions {
	/**
	 * A unit of time that can be used to specify the duration or delay of a transition.
	 *
	 * The two most common units of time used for transitions are seconds and milliseconds. You can use either unit by appending the letter `s` for seconds or `ms` for milliseconds.
	 *
	 * @example
	 *
	 * // Seconds
	 * '0.3s'
	 *
	 * // Milliseconds
	 * '300ms'
	 */
	transitionDuration?: SecondOrMilisecond;
	/**
	 * A type of timing function that can be used to control the animation of a transition.
	 *
	 * The following timing functions are available:
	 *
	 * * `linear`: The animation will proceed at a constant speed.
	 * * `ease`: The animation will start slowly and then speed up.
	 * * `ease-in`: The animation will start slowly and then stay at a constant speed.
	 * * `ease-out`: The animation will start at a constant speed and then slow down.
	 * * `ease-in-out`: The animation will start slowly, speed up, and then slow down again.
	 */
	transitionTimingFunction?: TimingFunction | string;
	/**
	 * A unit of time that can be used to specify the duration or delay of a transition.
	 *
	 * The two most common units of time used for transitions are seconds and milliseconds. You can use either unit by appending the letter `s` for seconds or `ms` for milliseconds.
	 *
	 * @example
	 *
	 * // Seconds
	 * '0.3s'
	 *
	 * // Milliseconds
	 * '300ms'
	 */
	transitionDelay?: SecondOrMilisecond;
	/**
	 * Used to set the transition property.
	 * It's used translate, but you can use
	 * transform, all or other position related prop.
	 *
	 * @default
	 * 'translate'
	 */
	transitionProperty?: Property | string;
}

/**
 * An interface of options for the function.
 */
export interface Options {
	/**
	 * Transition option.
	 * Can be string or an object.
	 *
	 * @example
	 * // As an object, it contains options for configuring a transition.
	 * const transitionOptions: TransitionOptions = {
	 *   transitionDuration: '0.3s',
	 *   transitionTimingFunction: 'ease-in-out',
	 *   transitionDelay: '0s',
	 *   transitionProperty: 'transform',
	 * };
	 *
	 * // As a string, it's like the shorthand on CSS
	 * 'all 300ms linear 0s'
	 */
	transition?: TransitionOptions;
	/**
	 * Initial height of the navbar element.
	 *
	 * Is the initial position of the element on the page.
	 *
	 * Using by default `translate` shorthand
	 * first number is `x` axis and second number `y` axis.
	 *
	 * On the `y` axis positive numbers go down, negative go up.
	 *
	 * @example
	 * '-80px'
	 */
	initialHeight?: string;
	/**
	 * Scrolled height of the navbar element.
	 *
	 * Is the position of the element when the page
	 * is scrolled down.
	 *
	 * Using by default `translate` shorthand
	 * first number is `x` axis and second number `y` axis.
	 *
	 * On the `y` axis positive numbers go down, negative go up.
	 *
	 * @example
	 * '80px'
	 */
	scrolledHeight?: string;
}
