<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { cn } from '$lib/utils';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import { inview, type Options } from 'svelte-inview';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import type { Project } from '$lib/portfolio';
	import Technology from './technology.svelte';

	const { project }: { project: Project } = $props();

	let isInView = $state(false);
	const options: Options = {
		rootMargin: '-69px 0px 0px 0px',
		threshold: 0.5
	};
</script>

<a
	href={project.url}
	use:inview={options}
	oninview_change={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	rel="noopener noreferrer"
	target="_blank"
	class={cn(
		'group opacity-0 duration-700',
		isInView
			? 'animate-in opacity-100 fade-in-0 slide-in-from-bottom-10'
			: 'animate-out fade-out-0 slide-out-to-top-10'
	)}
>
	<Card.Root
		class="h-full transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_oklch(54.6%_0.245_262.881_/0.5)] dark:group-hover:shadow-[0_10px_40px_oklch(70.7%_0.165_254.624_/0.5)]"
	>
		<Card.Header>
			<Card.Title class="text-lg font-semibold">
				{project.name}
			</Card.Title>
			<Card.Description>{project.description}</Card.Description>
			<Card.Action>
				<Button size="icon-sm" variant="ghost" class="pointer-events-none hover:bg-inherit">
					<ExternalLink />
				</Button>
			</Card.Action>
		</Card.Header>
		<Separator class="mt-auto" />
		<Card.Footer>
			<div class="flex flex-wrap gap-2">
				{#each project.technologies as technology, i (i)}
					<Technology {technology} />
				{/each}
			</div>
		</Card.Footer>
	</Card.Root>
</a>
