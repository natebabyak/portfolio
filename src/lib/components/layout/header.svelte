<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import Github from '$lib/components/icons/github.svelte';
	import Logo from '$lib/components/icons/logo.svelte';
	import Moon from '@lucide/svelte/icons/moon';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import { resetMode, setMode } from 'mode-watcher';
	import Sun from '@lucide/svelte/icons/sun';
	import { portfolio, username } from '$lib/config.json';
	import { cn } from '$lib/utils';

	interface HeaderProps {
		repos: {
			name: string;
			description: string | null;
		}[];
	}

	const { repos }: HeaderProps = $props();

	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 0;
	}
</script>

<svelte:window onscroll={handleScroll} />

<header
	class={cn(
		'fixed w-full border-b border-background p-4 backdrop-blur-md transition-colors',
		scrolled && 'border-border'
	)}
>
	<div class="mx-auto flex max-w-7xl justify-between">
		<div class="flex gap-4">
			<a href="/" title="Home">
				<Logo class="size-8" />
			</a>
			<NavigationMenu.Root viewport={false}>
				<NavigationMenu.List>
					<NavigationMenu.Item>
						<NavigationMenu.Trigger>About</NavigationMenu.Trigger>
						<NavigationMenu.Content>
							<NavigationMenu.Link>Link</NavigationMenu.Link>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Trigger>Projects</NavigationMenu.Trigger>
						<NavigationMenu.Content>
							<ul class="grid w-[750px] grid-cols-3 gap-2 bg-background p-2">
								<li class="row-span-3">
									<NavigationMenu.Link href="/projects" class="h-full">
										<span class="text-lg font-medium">All Projects</span>
									</NavigationMenu.Link>
								</li>
								{#each { length: 6 }, i}
									<li>
										<NavigationMenu.Link href={`/projects#${repos[i].name}`}>
											<span class="font-medium">{repos[i].name}</span>
											<span class="text-sm text-muted-foreground">{repos[i].description}</span>
										</NavigationMenu.Link>
									</li>
								{/each}
							</ul>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Link>
							{#snippet child()}
								<a href="/contact" class={navigationMenuTriggerStyle()}>Contact</a>
							{/snippet}
						</NavigationMenu.Link>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>
		<div class="flex">
			<Button
				href={`https://github.com/${username}/${portfolio}`}
				size="icon"
				title="GitHub"
				variant="ghost"
			>
				<Github />
			</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button {...props} size="icon" title="Theme" variant="ghost">
							<Sun class="scale-100 rotate-0 !transition-transform dark:scale-0 dark:rotate-90" />
							<Moon
								class="absolute scale-0 rotate-90 !transition-transform dark:scale-100 dark:rotate-0"
							/>
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end" side="bottom" class="bg-background">
					<DropdownMenu.Item onclick={() => setMode('light')}>Light</DropdownMenu.Item>
					<DropdownMenu.Item onclick={() => setMode('dark')}>Dark</DropdownMenu.Item>
					<DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
