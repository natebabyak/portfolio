<script lang="ts">
  import { resolve } from "$app/paths";
  import { IconArrowUpRight, IconCopy, IconSlash } from "@tabler/icons-svelte";

  import * as ButtonGroup from "#lib/components/ui/button-group/index.ts";
  import { Button } from "#lib/components/ui/button/index.ts";
</script>

<div class="flex min-h-svh flex-col space-y-8 py-16">
  <header class="mx-auto flex w-full max-w-lg items-center gap-2">
    <Button href={resolve("/")} variant="link" class="px-0!">babyak.dev</Button>
    <IconSlash size={16} />
    <Button
      href="https://github.com/natebabyak"
      rel="noopener noreferrer"
      target="_blank"
      variant="link"
      class="px-0!"
    >
      GitHub
    </Button>
    <IconSlash size={16} />
    <Button
      href="https://x.com/natebabyak"
      rel="noopener noreferrer"
      target="_blank"
      variant="link"
      class="px-0!"
    >
      X
    </Button>
  </header>
  <main
    class="mx-auto w-full max-w-lg flex-1 space-y-16 *:space-y-2 [&_h2]:text-lg [&_h2]:font-medium"
  >
    <section id="hero">
      <h1 class="mb-8 text-xl font-medium">Hey, I'm Nate.</h1>
      <p>
        I'm a software engineer based in Canada. I enjoy building things that solve my own problems,
        exploring new ideas, and sometimes just having fun.
      </p>
    </section>
    <section id="cuguessr">
      <h2>cuGuessr</h2>
      <p>
        Daily photo guessing game set on the Carleton University campus with 1,000+ peak daily
        players and 300+ user-submitted photos.
      </p>
      <Button
        href="https://www.cuguessr.com"
        rel="noopener noreferrer"
        target="_blank"
        variant="outline"
      >
        cuguessr.com
        <IconArrowUpRight />
      </Button>
    </section>
    <section id="pyivt">
      <h2>pyivt</h2>
      <p>
        Reverse engineered a proprietary file format, enabling automated extraction of 14,000+
        files, written in Rust.
      </p>
      <Button
        href="https://pypi.org/project/pyivt/"
        rel="noopener noreferrer"
        target="_blank"
        variant="outline"
      >
        View on PyPI
        <IconArrowUpRight />
      </Button>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <ButtonGroup.Root>
        <Button
          href="mailto:nate.babyak@outlook.com"
          rel="noopener noreferrer"
          target="_blank"
          variant="outline"
        >
          nate.babyak@outlook.com
        </Button>
        <Button size="icon" variant="outline">
          <IconCopy />
        </Button>
      </ButtonGroup.Root>
    </section>
  </main>
  <footer>
    <p class="text-muted-foreground text-center text-sm">
      2026 &copy Nate Babyak. All rights reserved.
    </p>
  </footer>
</div>
