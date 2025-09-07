<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import DOMPurify from 'isomorphic-dompurify';
	import type { PageProps } from './$types';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import { marked } from 'marked';

	let { data }: PageProps = $props();
	const { html, user } = data;
</script>

<svelte:head>
	<title>Home - {user.name}</title>
</svelte:head>

<Avatar.Root>
	<Avatar.Image src={user.avatar_url} alt={user.login} />
	<Avatar.Fallback>
		<Skeleton />
	</Avatar.Fallback>
</Avatar.Root>
<h1>{user.name}</h1>
<h2>{user.login}</h2>
<Card.Root>
	<Card.Content>
		{@html html}
	</Card.Content>
</Card.Root>
