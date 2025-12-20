<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Nate Babyak</title>
	<description>
		I'm Nate Babyak, a software engineer who builds data-driven software with performance and
		usability in mind.
	</description>
</svelte:head>
<ModeWatcher />
{@render children()}
