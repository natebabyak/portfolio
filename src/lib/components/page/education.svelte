<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Education } from '$lib/portfolio';
	import { inview, type Options } from 'svelte-inview';
	import {
		TimelineConnector,
		TimelineContent,
		TimelineDot,
		TimelineItem,
		TimelineSeparator
	} from 'svelte-vertical-timeline';

	const { education }: { education: Education } = $props();

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
				{education.startDate} - {education.endDate}
			</p>
			<h3 class="text-lg font-semibold">{education.institution}</h3>
			<h4 class="text-sm text-muted-foreground">{education.degree}</h4>
		</div>
	</TimelineContent>
</TimelineItem>
