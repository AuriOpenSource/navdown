<script lang="ts">
	import '../app.css';
	import { navdown } from '$lib/index.js';
</script>

<header>
	<nav
		use:navdown={{
			transition: {
				transitionDuration: '300ms',
				transitionTimingFunction: 'cubic-bezier(0.291, 0.281, 0, 1.2)'
			},
			initialHeight: '0 -80px',
			scrolledHeight: '0 0'
		}}
	>
		<a href="/">link 1</a>
		<a href="/">link 2</a>
		<a href="/">link 3</a>
	</nav>
</header>

<style>
	header {
		padding: 1rem;
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: black;
	}

	nav {
		display: flex;
		gap: 0.5rem;
	}

	a {
		color: white;
		background-color: red;
		padding: 0.7rem;
	}
</style>
