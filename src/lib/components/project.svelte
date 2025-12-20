<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import type { Project } from '$lib/portfolio';
	import Technology from './technology.svelte';
	import Github from './icons/github.svelte';

	const { project }: { project: Project } = $props();
</script>

<Card.Root class="transition-shadow hover:shadow-md">
	<Card.Header>
		<Card.Title>
			<h3 class="text-lg font-semibold">
				{#if project.demoUrl}
					<a
						href={project.demoUrl}
						target="_blank"
						class="flex w-fit items-center underline-offset-4 hover:underline"
					>
						{project.title}
						<ExternalLink class="ml-2 size-4 text-muted-foreground" />
					</a>
				{:else}
					{project.title}
				{/if}
			</h3>
		</Card.Title>
		<Card.Description>{project.description}</Card.Description>
		<Card.Action>
			<Button
				href={`https://github.com/natebabyak/${project.githubSlug}`}
				size="icon"
				target="_blank"
				variant="ghost"
				class="ml-auto"
			>
				<Github />
			</Button>
		</Card.Action>
	</Card.Header>
	<Card.Footer>
		<div class="flex flex-wrap gap-2">
			{#each project.technologies as technology}
				<Technology {technology} />
			{/each}
		</div>
	</Card.Footer>
</Card.Root>
