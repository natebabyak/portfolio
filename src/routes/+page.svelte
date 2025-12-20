<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
	import Download from '@lucide/svelte/icons/download';
	import Footer from '$lib/components/footer.svelte';
	import Github from '$lib/components/github.svelte';
	import Header from '$lib/components/header.svelte';
	import Linkedin from '$lib/components/linkedin.svelte';
</script>

<Header />
<main>
	<article>
		<h1 class="text-center text-5xl">Nate Babyak</h1>
		<p class="text-center text-lg">Software Engineer</p>
		<p class="">
			Hi, I'm Nate Babyak. I enjoy turning data into software others find genuinely useful.
		</p>
		<ButtonGroup.Root>
			<ButtonGroup.Root>
				<Button href="https://github.com/natebabyak" target="_blank" variant="outline">
					<Github />
					GitHub
				</Button>
				<Button href="https://www.linkedin.com/in/natebabyak/" target="_blank" variant="outline">
					<Linkedin />
					LinkedIn
				</Button>
			</ButtonGroup.Root>
			<ButtonGroup.Root>
				<Button>
					<Download />
					Resume
				</Button>
			</ButtonGroup.Root>
		</ButtonGroup.Root>
		<section>
			<h2 id="projects" class="font-serif text-3xl">Projects</h2>
		</section>
		<section>
			<h2 id="experience" class="font-serif text-3xl">Experience</h2>
		</section>
		<section>
			<h2 id="education" class="font-serif text-3xl">Education</h2>
		</section>
		<section>
			<h2 id="contact" class="font-serif text-3xl">Contact</h2>
		</section>
	</article>
</main>
<Footer />
