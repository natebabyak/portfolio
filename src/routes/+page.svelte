<script lang="ts">
	import Education from '$lib/components/education.svelte';
	import Experience from '$lib/components/experience.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import Project from '$lib/components/project.svelte';
	import { educations, experiences, projects } from '$lib/portfolio';
	import { onMount } from 'svelte';
	import { Timeline } from 'svelte-vertical-timeline';

	let sm = $state(false);

	onMount(() => {
		const handleResize = () => {
			sm = window.innerWidth >= 640;
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<Header />
<main class="pt-17">
	<article class="mx-auto max-w-3xl px-4">
		<p class="mt-8 leading-loose text-balance">
			I'm Nate Babyak, a software engineer who builds data-driven software with performance and
			usability in mind.
		</p>
		<section>
			<h2 id="projects" class="mt-8 text-xl font-medium">Projects</h2>
			<div class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each projects as project}
					<Project {project} />
				{/each}
			</div>
		</section>
		<section>
			<h2 id="experience" class="mt-8 text-xl font-medium">Experience</h2>
			<div class="hidden sm:block">
				<Timeline position="alternate">
					{#each experiences as experience}
						<Experience {experience} />
					{/each}
				</Timeline>
			</div>
			<div class="left-0 flex justify-start sm:hidden">
				<Timeline position="right" style="width: 200%; margin-left: -50%; ">
					{#each experiences as experience}
						<Experience {experience} />
					{/each}
				</Timeline>
			</div>
		</section>
		<section>
			<h2 id="education" class="mt-8 text-xl font-medium">Education</h2>
			<div class="hidden sm:block">
				<Timeline position="alternate">
					{#each educations as education}
						<Education {education} />
					{/each}
				</Timeline>
			</div>
			<div class="left-0 flex justify-start sm:hidden">
				<Timeline position="right" style="width: 200%; margin-left: -50%; ">
					{#each educations as education}
						<Education {education} />
					{/each}
				</Timeline>
			</div>
		</section>
	</article>
</main>
<Footer />
