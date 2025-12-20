<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import type { Technology } from '$lib/portfolio';
	import { cn } from '$lib/utils';

	let { technology }: { technology: Technology } = $props();
</script>

<Badge variant="outline" class="rounded-md py-1">
	{#if technology.icon}
		<technology.icon height={14} width={14} />
	{/if}
	<span class={cn('font-mono text-xs font-medium', technology.icon && 'ml-1')}>
		{technology.name}
	</span>
</Badge>
