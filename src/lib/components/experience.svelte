<script lang="ts">
	import type { Experience } from '$lib/portfolio';
	import {
		TimelineConnector,
		TimelineContent,
		TimelineDot,
		TimelineItem,
		TimelineSeparator
	} from 'svelte-vertical-timeline';

	const { experience }: { experience: Experience } = $props();
</script>

<TimelineItem>
	<TimelineSeparator>
		<TimelineDot style="background-color: transparent; border-color: var(--border)" />
		<TimelineConnector style="background-color: var(--border)" />
	</TimelineSeparator>
	<TimelineContent>
		<p class="font-mono text-xs text-muted-foreground">
			{experience.startDate} - {experience.endDate}
		</p>
		<h3 class="text-lg font-semibold">{experience.role}</h3>
		<h4 class="mt-1 text-sm text-muted-foreground">{experience.organization}</h4>
		<p class="mt-3 text-sm text-balance text-muted-foreground">
			{experience.summary}
		</p>
	</TimelineContent>
</TimelineItem>
