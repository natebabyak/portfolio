<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import Github from '$lib/components/icons/github.svelte';
	import Logo from '$lib/components/icons/logo.svelte';
	import Moon from '@lucide/svelte/icons/moon';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { navigationMenuTriggerStyle } from '../ui/navigation-menu/navigation-menu-trigger.svelte';
	import { resetMode, setMode } from 'mode-watcher';
	import Sun from '@lucide/svelte/icons/sun';
</script>

<header class="flex justify-between p-4">
	<div class="flex gap-2">
		<Logo class="size-8" />
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
						<NavigationMenu.Link>Link</NavigationMenu.Link>
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
			href="https://github.com/natebabyak/portfolio"
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
			<DropdownMenu.Content align="end" side="bottom">
				<DropdownMenu.Item onclick={() => setMode('light')}>Light</DropdownMenu.Item>
				<DropdownMenu.Item onclick={() => setMode('dark')}>Dark</DropdownMenu.Item>
				<DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</header>
