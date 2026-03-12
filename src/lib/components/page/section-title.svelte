<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { cn } from '$lib/utils';

	let { id, children } = $props();

	let isInView = $state(false);
	const options: Options = {
		rootMargin: '-69px 0px 0px 0px',
		threshold: 0.5
	};
</script>

<h2
	{id}
	use:inview={options}
	oninview_change={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	class={cn(
		'text-xl font-medium duration-500',
		isInView
			? 'animate-in opacity-100 fade-in-0 slide-in-from-left-5'
			: 'animate-out opacity-0 fade-out-0 slide-out-to-left-5'
	)}
>
	{@render children?.()}
</h2>
