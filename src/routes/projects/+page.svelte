<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { SquareArrowOutUpRight, Star } from 'lucide-svelte';
	import type { PageProps } from './$types';
	import { Badge } from '$lib/components/ui/badge/index.js';

	let { data }: PageProps = $props();
	const { repos, user } = data;

	repos.sort((a, b) => {
		if (a.stargazers_count && b.stargazers_count && a.stargazers_count !== b.stargazers_count) {
			return b.stargazers_count - a.stargazers_count;
		}

		if (a.updated_at && b.updated_at) {
			return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
		}

		return -1;
	});
</script>

<svelte:head>
	<title>Projects - {user.name}</title>
</svelte:head>

<h1>Projects</h1>
<p>Description</p>
{#each repos as repo}
	<Card.Root>
		<Card.Header>
			<Card.Title>{repo.name}</Card.Title>
			{#if repo.description}
				<Card.Description>{repo.description}</Card.Description>
			{/if}
		</Card.Header>
		<Card.Content>
			<Button href={repo.url} target="_blank">
				Repository
				<SquareArrowOutUpRight />
			</Button>
			{#if repo.homepage}
				<Button href={repo.homepage} target="_blank" variant="outline">
					Preview
					<SquareArrowOutUpRight />
				</Button>
			{/if}
			<Badge>
				<i class={`devicon-${repo.language?.toLowerCase()}-plain`}></i>
				{repo.language}
			</Badge>
		</Card.Content>
		<Card.Footer>
			{#if repo.updated_at}
				<p>Last updated {repo.updated_at}</p>
			{/if}
		</Card.Footer>
	</Card.Root>
{/each}
