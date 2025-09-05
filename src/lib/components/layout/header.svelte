<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import Github from '$lib/components/icons/github.svelte';
	import Logo from '$lib/components/icons/logo.svelte';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
</script>

<header class="flex items-center p-4">
	<Logo />
	<NavigationMenu.Root>
		<NavigationMenu.List>
			<NavigationMenu.Item>
				<NavigationMenu.Trigger>Item One</NavigationMenu.Trigger>
				<NavigationMenu.Content>
					<NavigationMenu.Link>Link</NavigationMenu.Link>
				</NavigationMenu.Content>
			</NavigationMenu.Item>
		</NavigationMenu.List>
	</NavigationMenu.Root>
	<Button size="icon" variant="outline">
		<Github />
	</Button>
</header>
