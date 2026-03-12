<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { cn } from '$lib/utils';

	let { children } = $props();

	let isInView = $state(false);
	const options: Options = {
		rootMargin: '-69px 0px 0px 0px',
		threshold: 0.5
	};
</script>

<p
	use:inview={options}
	oninview_change={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	class={cn(
		'leading-loose text-balance opacity-0 duration-700',
		isInView
			? 'animate-in opacity-100 fade-in-0 slide-in-from-bottom-10'
			: 'animate-out fade-out-0 slide-out-to-top-10'
	)}
>
	{@render children?.()}
</p>
