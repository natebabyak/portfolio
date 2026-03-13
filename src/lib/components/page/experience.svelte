<script lang="ts">
	import type { Experience } from '$lib/portfolio';
	import {
		TimelineConnector,
		TimelineContent,
		TimelineDot,
		TimelineItem,
		TimelineSeparator
	} from 'svelte-vertical-timeline';
	import { inview, type Options } from 'svelte-inview';
	import { cn } from '$lib/utils';

	const { experience }: { experience: Experience } = $props();

	let isInView = $state(false);
	const options: Options = {
		rootMargin: '-69px 0px 0px 0px',
		threshold: 0.5
	};
</script>

<TimelineItem>
	<TimelineSeparator>
		<TimelineDot style="background-color: transparent; border-color: var(--border)" />
		<TimelineConnector style="background-color: var(--border)" />
	</TimelineSeparator>
	<TimelineContent>
		<div
			use:inview={options}
			oninview_change={(event) => {
				const { inView } = event.detail;
				isInView = inView;
			}}
			class={cn(
				'opacity-0 duration-700',
				isInView
					? 'animate-in opacity-100 fade-in-0 slide-in-from-bottom-10'
					: 'animate-out fade-out-0 slide-out-to-top-10'
			)}
		>
			<p class="font-mono text-xs text-muted-foreground">
				{experience.startDate} - {experience.endDate}
			</p>
			<h3 class="text-lg font-semibold">{experience.position}</h3>
			<h4 class="mt-1 text-sm text-muted-foreground">{experience.name}</h4>
			{#if experience.summary}
				<p class="mt-3 text-sm text-balance text-muted-foreground">
					{experience.summary}
				</p>
			{/if}
		</div>
	</TimelineContent>
</TimelineItem>
