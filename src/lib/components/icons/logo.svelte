<script lang="ts">
	const { class: className }: { class?: string } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class={className}>
	<path
		d="M 0 10 C 0 10, 10 10, 10 0 C 10 0, 10 10, 20 10 C 20 10, 10 10, 10 20 C 10 20, 10 10, 0 10"
		fill="#fff"
	/>
</svg>
