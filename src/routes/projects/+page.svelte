<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import type { PageProps } from './$types';
	import SquareArrowOutUpRight from '@lucide/svelte/icons/square-arrow-out-up-right';
	import Star from '@lucide/svelte/icons/star';
	import Eye from '@lucide/svelte/icons/eye';
	import GitFork from '@lucide/svelte/icons/git-fork';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Github from '$lib/components/icons/github.svelte';

	let { data }: PageProps = $props();
	const { repos, user } = data;

	const filteredRepos = repos.filter((repo) => repo.name !== user.login);

	filteredRepos.sort((a, b) => {
		if (
			a.stargazers_count !== undefined &&
			b.stargazers_count !== undefined &&
			a.stargazers_count !== b.stargazers_count
		) {
			return b.stargazers_count - a.stargazers_count;
		}

		if (
			a.forks_count !== undefined &&
			b.forks_count !== undefined &&
			a.forks_count !== b.forks_count
		) {
			return b.forks_count - a.forks_count;
		}

		if (
			a.watchers_count !== undefined &&
			b.watchers_count !== undefined &&
			a.watchers_count !== b.watchers_count
		) {
			return b.watchers_count - a.watchers_count;
		}

		if (a.homepage && !b.homepage) return -1;
		if (b.homepage && !a.homepage) return 1;

		if (a.updated_at && b.updated_at) {
			return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
		}

		return 0;
	});
</script>

<svelte:head>
	<title>Projects - {user.login}</title>
</svelte:head>

<div class="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 md:px-0">
	<h1>Projects</h1>
	<p>Description</p>
	{#each filteredRepos as repo}
		<Card.Root>
			<Card.Header>
				<Card.Title>{repo.name}</Card.Title>
				<Card.Description>{repo.description}</Card.Description>
				<div class="flex gap-2">
					{#if repo.watchers_count}
						<Badge variant="outline">
							<Eye />
							Watchers
							{repo.watchers_count}
						</Badge>
					{/if}
					{#if repo.forks_count}
						<Badge variant="outline">
							<GitFork />
							Forks
							{repo.forks_count}
						</Badge>
					{/if}
					{#if repo.stargazers_count}
						<Badge variant="outline">
							<Star />
							Stars
							{repo.stargazers_count}
						</Badge>
					{/if}
				</div>
			</Card.Header>
			<Card.Content>
				<div class="flex w-full gap-2">
					{#if repo.homepage}
						<Button href={repo.homepage} target="_blank">
							View Live
							<SquareArrowOutUpRight />
						</Button>
					{/if}
					<Button href={repo.html_url} target="_blank" variant="outline">
						<Github />
						View on GitHub
						<SquareArrowOutUpRight />
					</Button>
				</div>
				<Badge>
					<i class={`devicon-${repo.language?.toLowerCase()}-plain`}></i>
					{repo.language}
				</Badge>
			</Card.Content>
			<Card.Footer class="flex justify-end">
				<Button href={`/projects/${repo.name}`} variant="ghost">
					Learn More
					<ChevronRight />
				</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>
