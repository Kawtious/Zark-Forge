<script setup lang="ts">
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconEmail from '@/components/icons/IconEmail.vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <header id="header">
      <h1
        data-text="The Forge Awakens"
        class="animate-fire-glow before:animate-heat-shimmer relative z-0 bg-[linear-gradient(90deg,#ffcc33,#ff7a18,#ff3c00,#ff7a18,#ffcc33)] bg-[length:300%_300%] bg-clip-text text-[3rem] font-extrabold text-nowrap text-transparent capitalize before:absolute before:inset-0 before:-z-1 before:bg-[linear-gradient(90deg,#ffb347,#ff6a00,#ff2e00)] before:bg-clip-text before:text-[3rem] before:font-extrabold before:text-transparent before:capitalize before:opacity-80 before:blur-md before:content-[attr(data-text)]"
      >
        The Forge Awakens
      </h1>
    </header>

    <section id="welcome-section" class="flex max-w-prose flex-col gap-6">
      <p class="text-center text-base leading-relaxed text-[#e6e2df]">
        Welcome, traveler. You've found your way to the Ember Fields, where steel is shaped by fire
        and ideas are forged with care<br />
        <br />
        I am Z'ark Ashveil, blacksmith of these lands. Every project you see here is crafted at my
        anvil, shaped through patience, experimentation, and no small amount of heat. Some works are
        refined and battle-tested, others are fresh sparks still finding their form, but all of them
        are mine<br />
        <br />
        This forge is where I share what I am building, what I am learning, and the things that
        catch fire in my mind. Stay as long as you like. Watch the sparks fly. Perhaps you'll find
        something worth carrying onward
      </p>
    </section>

    <footer id="footer">
      <div class="grid w-full grid-cols-2 gap-3">
        <a
          href="https://github.com/Kawtious"
          aria-label="GitHub"
          class="group flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-[0.95rem] font-semibold text-amber-200 transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
        >
          <IconGitHub
            class="h-5 w-5 shrink-0 text-orange-400 transition duration-200 group-hover:text-orange-500 group-hover:drop-shadow-[0_0_6px_rgba(255,80,0,0.8)]"
            colour="currentColor"
          />
          GitHub
        </a>

        <a
          href="mailto:contact@zarkforge.xyz"
          aria-label="Email"
          class="group flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-[0.95rem] font-semibold text-amber-200 transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
        >
          <IconEmail
            class="h-5 w-5 shrink-0 text-orange-400 transition duration-200 group-hover:text-orange-500 group-hover:drop-shadow-[0_0_6px_rgba(255,80,0,0.8)]"
            colour="currentColor"
          />
          Email
        </a>
      </div>
    </footer>
  </div>
</template>
