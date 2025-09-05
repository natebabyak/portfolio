<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { repos, user } = data;
</script>

<svelte:head>
	<title>Projects - {user.name}</title>
</svelte:head>

{#each repos as repo}
	<Card.Root>
		<Card.Header>
			<Card.Title>{repo.name}</Card.Title>
			<Card.Description>{repo.description}</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>Card Content</p>
		</Card.Content>
		<Card.Footer>
			<p>Card Footer</p>
		</Card.Footer>
	</Card.Root>
{/each}
