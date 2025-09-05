<script lang="ts">
	const { class: className }: { class?: string } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" class={className}>
	<path
		d="M 0 500 C 0 500, 500 500, 500 0 C 500 0, 500 500, 1000 500 C 1000 500, 500 500, 500 1000 C 500 1000, 500 500, 0 500"
		fill="currentColor"
	/>
</svg>
