<script lang="ts">
	import navdown from '$lib/index.js';
	import hljs from 'highlight.js/lib/core';
	import css from 'highlight.js/lib/languages/css';
	import shell from 'highlight.js/lib/languages/shell';
	import typescript from 'highlight.js/lib/languages/typescript';
	import xml from 'highlight.js/lib/languages/xml';
	import 'highlight.js/styles/androidstudio.css';
	import '../app.css';
	import CodeBlock, { storeHighlightJs } from './CodeBlock.svelte';
	import type { Options } from '$lib/lib.js';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('shell', shell);

	storeHighlightJs.set(hljs);
</script>

<svelte:head>
	<title>Navdown Docs</title>
</svelte:head>

<main class="p-4 flex flex-col gap-4">
	<hgroup>
		<h1 class="text-4xl font-medium">Nav Down</h1>
		<h2>The best at hiding your navbar</h2>
	</hgroup>

	<div class="card bg-base-200 card-compact">
		<div class="card-body">
			<h1 class="card-title">It's simple to install</h1>
			<CodeBlock language="shell" code={`pnpm add -D navdown`} />
		</div>
	</div>

	<div class="card bg-base-200 card-compact">
		<div class="card-body gap-2">
			<h1 class="card-title">And even more simple to use</h1>

			<div>
				<h2 class="text-lg font-medium">First import it</h2>
				<CodeBlock language="typescript" code={`import navdown from 'navdown'`} />
			</div>
			<div>
				<h2 class="text-lg font-medium">Then 'use' it</h2>
				<CodeBlock
					language="html"
					code={`
					<nav use:navdown>
	<a href="/">Link 1</a>
	<a href="/">Link 2</a>
	<a href="/">Link 3</a>
</nav>`}
				/>
			</div>
		</div>
	</div>
	<div class="card bg-base-200 card-compact">
		<div class="card-body gap-2">
			<h1 class="card-title">There's default options to it</h1>
			<CodeBlock
				language="typescript"
				code={`
			const options = {
		initialHeight: '0px',
		scrolledHeight: '0px 80px',
		transition: {
			transitionDelay: '0s',
			transitionDuration: '300ms',
			transitionProperty: 'translate',
			transitionTimingFunction: 'cubic-bezier(0.291, 0.281, 0, 1.2)'
		}
	}
			`}
			/>

			<div>
				<h2 class="text-lg font-medium">But it's customizable</h2>
				<CodeBlock
					language="html"
					code={`
				   <nav use:navdown={{
    transition: {
      transitionDuration: '250ms',
    },
	initialHeight: '0px',
	scrolledHeight: '0px 80px'
  }}>
    <!-- some links -->
	</nav>`}
				/>
			</div>
			<CodeBlock
				language="typescript"
				code={`
				   export interface Options {
	transition?: TransitionOptions;
	initialHeight?: string;
	scrolledHeight?: string;
}`}
			/>
		</div>
	</div>
</main>

<header>
	<nav
		use:navdown={{
			transition: {
				transitionDuration: '250ms'
			}
		}}
		class="btm-nav"
	>
		<button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				/></svg
			>
		</button>
		<button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
		</button>
		<button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/></svg
			>
		</button>
	</nav>
</header>

<style>
	button {
		@apply bg-slate-700;
	}
</style>
