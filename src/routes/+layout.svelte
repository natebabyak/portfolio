<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
	const { repos, user } = data;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<Header {repos} {user} />
<main class="pt-20">
	{@render children?.()}
</main>
<Footer />
