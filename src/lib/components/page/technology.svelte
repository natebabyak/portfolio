<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { cn } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import type { Technology } from '$lib/portfolio';

	let { technology }: { technology: Technology } = $props();
</script>

<Badge variant={mode.current === 'dark' ? 'default' : 'outline'} class="rounded-full py-1">
	{#if technology.icon}
		<technology.icon height={14} width={14} />
	{/if}
	<span class={cn('font-mono text-xs font-medium', technology.icon && 'ml-1')}>
		{technology.name}
	</span>
</Badge>
