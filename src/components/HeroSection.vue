<script setup lang="ts">
import IconEmail from '@/components/icons/IconEmail.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center p-4">
    <header id="header" class="mb-6 w-full pb-4">
      <h1
        data-text="The Forge Awakens"
        class="relative animate-fire-glow bg-linear-90 from-title-1 via-title-3 to-title-1 bg-size-[300%_300%] bg-clip-text p-2 text-center text-5xl font-extrabold text-nowrap text-transparent capitalize before:absolute before:inset-0 before:-z-1 before:animate-heat-shimmer before:bg-linear-90 before:from-title-1 before:via-title-2 before:to-title-3 before:bg-clip-text before:p-2 before:text-center before:text-5xl before:font-extrabold before:text-nowrap before:text-transparent before:capitalize before:opacity-80 before:blur-md before:content-[attr(data-text)]"
      >
        The Forge Awakens
      </h1>
    </header>

    <section id="welcome-section" class="mb-6 flex w-full flex-col items-center">
      <p class="max-w-prose text-center text-base leading-relaxed">
        Welcome, traveler. You've found your way to my workshop in the Ember Fields, where steel is
        shaped by fire and ideas are forged with care<br />
        <br />
        I am Z'ark Ashveil, blacksmith of these lands. Every project you will see here is crafted at
        my anvil, shaped through patience, experimentation, and no small amount of heat. Some works
        are refined and battle-tested, others are fresh sparks still finding their form, but all of
        them are mine<br />
        <br />
        This forge is where I will share what I am building, what I am learning, and the things that
        catch fire in my mind. Stay as long as you like. Watch the sparks fly. Perhaps you'll find
        something worth carrying onward
      </p>
    </section>

    <footer id="footer" class="w-full pt-6">
      <div class="flex flex-row items-center justify-center gap-3">
        <a
          href="https://github.com/Kawtious"
          aria-label="GitHub"
          class="group flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-title-1 transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-title-2/50"
        >
          <IconGitHub
            class="h-5 w-5 shrink-0 text-title-2 transition duration-200 group-hover:drop-shadow-[0_0_6px_rgba(255,80,0,0.8)]"
            colour="currentColor"
          />
          GitHub
        </a>

        <a
          href="mailto:contact@zarkforge.xyz"
          aria-label="Email"
          class="group flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-title-1 transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-title-2/50"
        >
          <IconEmail
            class="h-5 w-5 shrink-0 text-title-2 transition duration-200 group-hover:text-title-2 group-hover:drop-shadow-[0_0_6px_rgba(255,80,0,0.8)]"
            colour="currentColor"
          />
          Email
        </a>
      </div>
    </footer>
  </div>
</template>
