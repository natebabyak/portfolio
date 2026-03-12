<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils';
	import Github from '$lib/components/icons/github.svelte';
	import Linkedin from '$lib/components/icons/linkedin.svelte';
	import Moon from '@lucide/svelte/icons/moon';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Sun from '@lucide/svelte/icons/sun';
	import { toggleMode } from 'mode-watcher';

	let isAtTop = $state(true);

	function handleScroll() {
		isAtTop = window.scrollY <= 0;
	}
</script>

<svelte:window onscroll={handleScroll} />
<header
	class={cn(
		'fixed z-10 w-full border-b border-border p-4 backdrop-blur-md transition-colors duration-500',
		isAtTop && 'border-transparent'
	)}
>
	<div class="mx-auto flex max-w-3xl items-center justify-between">
		<NavigationMenu.Root>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="#about" class={navigationMenuTriggerStyle()}>About</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item class="hidden sm:block">
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="#projects" class={navigationMenuTriggerStyle()}> Projects</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item class="hidden sm:block">
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="#experience" class={navigationMenuTriggerStyle()}>Experience</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item class="hidden sm:block">
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="#education" class={navigationMenuTriggerStyle()}>Education</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
		</NavigationMenu.Root>
		<div class="flex h-5 items-center gap-2">
			<div class="flex">
				<Button
					href="https://github.com/natebabyak"
					size="icon"
					target="_blank"
					title="GitHub"
					variant="ghost"
				>
					<Github />
				</Button>
				<Button
					href="https://www.linkedin.com/in/natebabyak/"
					size="icon"
					target="_blank"
					title="LinkedIn"
					variant="ghost"
				>
					<Linkedin />
				</Button>
			</div>
			<Separator orientation="vertical" />
			<Button onclick={toggleMode} size="icon" title="Toggle Mode" variant="ghost">
				<Sun class="scale-100 rotate-0 transition-transform! dark:scale-0 dark:rotate-45" />
				<Moon
					class="absolute scale-0 -rotate-45 transition-transform! dark:scale-100 dark:rotate-0"
				/>
			</Button>
		</div>
	</div>
</header>
