<script lang="ts">
  import { ModeWatcher } from "mode-watcher";

  import "./layout.css";

  import favicon from "#lib/assets/favicon.svg";

  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Nate Babyak | Software Engineer</title>
  <meta
    name="description"
    content="Nate Babyak is a Canadian software engineer building and sharing solutions to problems."
  />
</svelte:head>

<ModeWatcher />
{@render children()}
