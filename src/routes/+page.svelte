<script lang="ts">
	import Education from '$lib/components/page/education.svelte';
	import Experience from '$lib/components/page/experience.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';
	import Project from '$lib/components/page/project.svelte';
	import { educations, experiences, projects } from '$lib/portfolio';
	import { Timeline } from 'svelte-vertical-timeline';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import SectionTitle from '$lib/components/page/section-title.svelte';
	import SectionDescription from '$lib/components/page/section-description.svelte';
	import { cn } from '$lib/utils';

	let isAtTop = $state(true);

	function handleScroll() {
		isAtTop = window.scrollY <= 0;
	}
</script>

<svelte:window onscroll={handleScroll} />

<Header />
<main class="relative pt-17.25">
	<div
		class={cn(
			'pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[64px_64px] transition-opacity duration-500 dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)]',
			isAtTop ? 'opacity-0' : 'opacity-100'
		)}
	></div>
	<div
		class={cn(
			'pointer-events-none absolute inset-0 animate-[pulse-a_8s_ease-in-out_infinite] bg-[radial-gradient(ellipse_70%_50%_at_15%_30%,rgb(99_102_241/0.1),transparent_70%)] transition-opacity duration-500',
			isAtTop ? 'opacity-0' : 'opacity-100'
		)}
	></div>
	<div
		class={cn(
			'pointer-events-none absolute inset-0 animate-[pulse-b_11s_ease-in-out_infinite] bg-[radial-gradient(ellipse_60%_50%_at_85%_70%,rgb(20_184_166/0.08),transparent_70%)] transition-opacity duration-500',
			isAtTop ? 'opacity-0' : 'opacity-100'
		)}
	></div>
	<article
		class={cn(
			'relative mx-auto flex max-w-3xl flex-col gap-8 border-x bg-background px-4 py-8 transition-colors duration-500',
			isAtTop && 'border-transparent'
		)}
	>
		<section>
			<SectionTitle id="about">About</SectionTitle>
			<SectionDescription>
				I'm a curious problem-solver who loves learning new things and turning ideas into tools that
				people find genuinely useful
			</SectionDescription>
		</section>
		<Separator />
		<section>
			<SectionTitle id="projects">Projects</SectionTitle>
			<div class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each projects as project, i (i)}
					<Project {project} />
				{/each}
			</div>
		</section>
		<Separator />
		<section>
			<SectionTitle id="experience">Experience</SectionTitle>
			<div class="hidden sm:block">
				<Timeline position="alternate">
					{#each experiences as experience, i (i)}
						<Experience {experience} />
					{/each}
				</Timeline>
			</div>
			<div class="left-0 flex justify-start sm:hidden">
				<Timeline position="right" style="width: 200%; margin-left: -50%;">
					{#each experiences as experience, i (i)}
						<Experience {experience} />
					{/each}
				</Timeline>
			</div>
		</section>
		<Separator />
		<section>
			<SectionTitle id="education">Education</SectionTitle>
			<div class="hidden sm:block">
				<Timeline position="alternate">
					{#each educations as education, i (i)}
						<Education {education} />
					{/each}
				</Timeline>
			</div>
			<div class="left-0 flex justify-start sm:hidden">
				<Timeline position="right" style="width: 200%; margin-left: -50%;">
					{#each educations as education, i (i)}
						<Education {education} />
					{/each}
				</Timeline>
			</div>
		</section>
	</article>
</main>
<Footer />
