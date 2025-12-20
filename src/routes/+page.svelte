<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	interface ProjectProps {
		title: string;
		description: string;
		content: string;
	}

	const projects: ProjectProps[] = [];
</script>

{#snippet project(projectProps: ProjectProps)}
	<Card.Root>
		<Card.Header>
			<Card.Title>{projectProps.title}</Card.Title>
			<Card.Description>{projectProps.description}</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>{projectProps.content}</p>
		</Card.Content>
		<Card.Footer>
			<p>Card Footer</p>
		</Card.Footer>
	</Card.Root>
{/snippet}

<Header />
<main>
	<article>
		<p class="text-lg">
			I'm Nate Babyak, a software engineer who enjoys turning data into software others find
			genuinely useful.
		</p>
		<section>
			<h2 id="projects" class="text-3xl">Projects</h2>
			<ul>
				{#each projects as projectProps}
					<li>
						{@render project(projectProps)}
					</li>
				{/each}
			</ul>
		</section>
		<section>
			<h2 id="contact" class="text-3xl">Contact</h2>
		</section>
	</article>
</main>
<Footer />
