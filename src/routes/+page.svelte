<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { repos, user } = data;
</script>

<svelte:head>
	<title>Home - {user.name}</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
