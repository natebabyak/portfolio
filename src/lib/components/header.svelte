<script lang="ts">
	import Button from './ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import Monitor from '@lucide/svelte/icons/monitor';
	import Moon from '@lucide/svelte/icons/moon';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import Separator from './ui/separator/separator.svelte';
	import { setMode } from 'mode-watcher';
	import Sun from '@lucide/svelte/icons/sun';
	import Github from './icons/github.svelte';
	import Linkedin from './icons/linkedin.svelte';
</script>

<header class="fixed z-10 w-full p-4 backdrop-blur-md">
	<div class="mx-auto flex max-w-3xl items-center justify-between">
		<NavigationMenu.Root>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="/" class={navigationMenuTriggerStyle()}>natebabyak.com</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item class="hidden sm:block">
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="#projects" class={navigationMenuTriggerStyle()}>Projects</a>
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
		<div class="flex items-center gap-2">
			<div class="flex">
				<Button href="https://github.com/natebabyak" size="icon" target="_blank" variant="ghost">
					<Github />
				</Button>
				<Button
					href="https://www.linkedin.com/in/natebabyak/"
					size="icon"
					target="_blank"
					variant="ghost"
				>
					<Linkedin />
				</Button>
			</div>
			<div class="h-5">
				<Separator orientation="vertical" />
			</div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button {...props} size="icon" variant="ghost">
							<Sun class="scale-100 rotate-0 transition-transform! dark:scale-0 dark:rotate-90" />
							<Moon
								class="absolute scale-0 rotate-90 transition-transform! dark:scale-100 dark:rotate-0"
							/>
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end" side="bottom">
					<DropdownMenu.Item onclick={() => setMode('light')}>
						<Sun />
						Light
					</DropdownMenu.Item>
					<DropdownMenu.Item onclick={() => setMode('dark')}>
						<Moon />
						Dark
					</DropdownMenu.Item>
					<DropdownMenu.Item onclick={() => setMode('system')}>
						<Monitor />
						System
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
