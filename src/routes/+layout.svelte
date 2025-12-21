<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Nate Babyak</title>
	<meta name="description" content="Nate Babyak's personal portfolio website." />
</svelte:head>
<ModeWatcher />
{@render children()}
