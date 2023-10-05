# Navdown

### Simple action to hide navbar on scroll

Simple to install
```shell
  pnpm add -D navdown
```

To use is even more simple
```svelte
  <nav use:navdown={{
    transition: {
      transitionDuration: '250ms',
      initialHeight: '0px',
      scrolledHeight: '0px 80px'
    }
  }}>
    <!-- some links -->
  </nav>
```
Now down is the interface of the options
```typescript
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
```

---
### Have some contribution to make?
Hand this repo an issue then.
