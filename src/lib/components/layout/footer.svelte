<script lang="ts">
	interface FooterProps {
		name: string | null;
	}

	const { name }: FooterProps = $props();

	const year = new Date().getFullYear();
</script>

<footer class="w-full p-4 text-center">
	&copy; {year}
	{name}. All rights reserved.
</footer>
