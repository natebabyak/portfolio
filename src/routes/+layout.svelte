<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	let { data, children }: LayoutProps = $props();
	const { repos, user } = data;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<Header {repos} />
<main class="mx-auto max-w-3xl px-0 pt-[69px] md:px-4">
	{@render children?.()}
</main>
<Footer name={user.name} />
