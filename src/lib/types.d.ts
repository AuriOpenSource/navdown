type DebounceFunction = (...args: unknown[]) => void;


type TimingFunction =
    | 'linear'
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out';

type SecondOrMilisecond = `${number}s` | `${number}ms`;

type Property =
    | 'all'
    | 'position'
    | 'translate';

interface TransitionOptions {
    /**
     * Used to set the transition duration.
     * 
     * Can be in seconds or miliseconds.
     * 
     * @example 
     * '0.3s' or '300ms'
     */
    transitionDuration?: SecondOrMilisecond;
    /**
     * Used to set the transition easing.
     * 
     * Can be linear, ease-in, ease-in-out or a cubic-bezier
     * 
     * @example
     * cubic-bezier(0.68, -0.55, 0.27, 1.55)
     */
    transitionTimingFunction?: TimingFunction | string;
    /**
     * Used to set the transition delay.
     * 
     * Just like duration, can be seconds or miliseconds.
     * 
     * @example 
     * '0.3s' or '300ms'
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

interface Options {
    /**
     * Transition option.
     * Can be string or an object
     * 
     * @example
     * 'all 300ms linear 0s'
     */   
    transition?: string | TransitionOptions;
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
     * '0px -80px'
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
     * '0px 80px'
     */
    scrolledHeight?: string;
}