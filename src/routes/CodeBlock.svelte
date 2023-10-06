<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';
	export const storeHighlightJs: Writable<any> = writable(undefined);
</script>

<script lang="ts">
	import { clipboard } from './clipboard.js';
	import { createEventDispatcher } from 'svelte';

	// Event Dispatcher
	type CodeBlockEvent = {
		copy: never;
	};
	const dispatch = createEventDispatcher<CodeBlockEvent>();

	// Types
	type CssClasses = string;

	// Props
	/** Sets a language alias for Highlight.js syntax highlighting. */
	export let language = 'plaintext';
	/** Provide the code snippet to render. Be mindful to escape as needed! */
	export let code = '';

	/** Specify if line numbers should be added to the code block*/
	export let lineNumbers = false;

	// Props (styles)
	export let blur: CssClasses = '';
	/** Provide classes to set the text size. */
	export let text: CssClasses = 'text-sm';
	/** Provide classes to set the text color. */
	export let color: CssClasses = 'text-white';
	/** Provide classes to set the border radius. */
	export let rounded: CssClasses = 'rounded-container-token';
	/** Provide classes to set the box shadow. */
	export let shadow: CssClasses = 'shadow';
	/** Provide classes to set the button styles. */
	export let buttonLabel = 'Copy';
	/** Provide the button label text when copied. */
	export let buttonCopied = '👍';

	// Base Classes
	const cBase = 'overflow-hidden';
	

	// Local
	let formatted = false;
	let displayCode: string = code;
	let copyState = false;

	// Allow shorthand alias, but show full text in UI
	function languageFormatter(lang: string): string {
		if (lang === 'js') return 'javascript';
		if (lang === 'ts') return 'typescript';
		if (lang === 'shell') return 'terminal';
		return lang;
	}

	// Handle Copy Text
	function onCopyClick() {
		copyState = true;
		// prettier-ignore
		setTimeout(() => { copyState = false; }, 2000);
		/** @event {} copy - Fires when the Copy button is pressed.  */
		dispatch('copy');
	}

	// Trigger syntax highlighting if highlight.js is available
	$: if ($storeHighlightJs !== undefined) {
		displayCode = $storeHighlightJs.highlight(code, { language }).value.trim();
		formatted = true;
	}

	$: if (lineNumbers) {
		displayCode = displayCode.replace(/^/gm, () => {
			return '<span class="line"></span>\t';
		});
		formatted = true;
	}

	// Reactive
	$: classesBase = `${cBase} ${blur} ${text} ${color} ${rounded} ${shadow} ${
		$$props.class ?? ''
	}`;
</script>

<!-- prettier-ignore -->
{#if language && code}
<div class="card bg-base-300 rounded-lg {classesBase}" data-testid="codeblock">
	<div class="card-body">
		<!-- Header -->
		<header class="card-title text-xs uppercase justify-between">
			<!-- Language -->
			<span class="text-white/50">{languageFormatter(language)}</span>
			<!-- Copy Button -->
			<button class="btn btn-xs btn-primary" on:click={onCopyClick} use:clipboard={code}>
				{!copyState ? buttonLabel : buttonCopied}
			</button>
		</header>
		<!-- Pre/Code -->
		<pre><code class="language-{language} lineNumbers">{#if formatted}{@html displayCode}{:else}{code.trim()}{/if}</code></pre>
	</div>
</div>
{/if}
