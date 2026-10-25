<script lang="ts">
  import { resolve } from "$app/paths";
  import { motion } from "@humanspeak/svelte-motion";
  import {
    IconArrowUpRight,
    IconBrandGithub,
    IconBrandX,
    IconMail,
    IconMoon,
    IconSlash,
    IconSun,
  } from "@tabler/icons-svelte";
  import { toggleMode } from "mode-watcher";

  import { Button } from "#lib/components/ui/button/index.ts";
</script>

<div class="flex min-h-svh flex-col space-y-8 py-16 *:px-4">
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
    <Button
      onclick={() => {
        console.log("Hello??");
        toggleMode();
      }}
      size="icon"
      title="Toggle mode"
      variant="ghost"
      class="ml-auto"
    >
      <IconSun class="scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90" />
      <IconMoon class="absolute scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0" />
    </Button>
  </header>
  <main
    class="mx-auto w-full max-w-lg flex-1 space-y-16 *:space-y-2 [&_h2]:text-lg [&_h2]:font-medium"
  >
    <section id="hero">
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        class="mb-8 text-xl font-medium"
      >
        Hey, I'm Nate.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
      >
        I'm a software engineer based in Canada. I enjoy building things that solve my own problems,
        exploring new ideas, and sometimes just having fun.
      </motion.p>
    </section>
    <motion.section
      id="cuguessr"
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
    >
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
    </motion.section>
    <motion.section
      id="pyivt"
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 1.6, duration: 0.5, ease: "easeOut" }}
    >
      <h2>pyivt</h2>
      <p>
        Reverse engineered a proprietary file format, enabling automated extraction of 14,000+ files
        at blazing speed.
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
    </motion.section>
    <motion.section
      id="contact"
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 1.7, duration: 0.5, ease: "easeOut" }}
    >
      <h2>Contact</h2>
      <div class="flex flex-wrap gap-1">
        <Button
          href="mailto:nate.babyak@outlook.com"
          rel="noopener noreferrer"
          target="_blank"
          variant="outline"
        >
          <IconMail />
          nate.babyak@outlook.com
        </Button>
        <Button
          href="https://github.com/natebabyak"
          rel="noopener noreferrer"
          target="_blank"
          variant="outline"
        >
          <IconBrandGithub />
          @natebabyak
        </Button>
        <Button
          href="https://x.com/natebabyak"
          rel="noopener noreferrer"
          target="_blank"
          variant="outline"
        >
          <IconBrandX />
          @natebabyak
        </Button>
      </div>
    </motion.section>
  </main>
  <footer>
    <p class="text-muted-foreground text-center text-sm">
      2026 &copy Nate Babyak. All rights reserved.
    </p>
  </footer>
</div>
