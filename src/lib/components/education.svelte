<script lang="ts">
	import type { Education } from '$lib/portfolio';
	import {
		TimelineConnector,
		TimelineContent,
		TimelineDot,
		TimelineItem,
		TimelineSeparator
	} from 'svelte-vertical-timeline';

	const { education }: { education: Education } = $props();
</script>

<TimelineItem>
	<TimelineSeparator>
		<TimelineDot style="background-color: transparent; border-color: var(--border)" />
		<TimelineConnector style="background-color: var(--border)" />
	</TimelineSeparator>
	<TimelineContent>
		<p class="font-mono text-xs text-muted-foreground">
			{education.startDate} - {education.endDate}
		</p>
		<h3 class="text-lg font-semibold">{education.institution}</h3>
		<h4 class="text-sm text-muted-foreground">{education.degree}</h4>
	</TimelineContent>
</TimelineItem>
