<script setup lang="ts">
import ForgeTitle from '@/components/ForgeTitle.vue';
import ForgeBackground from '@/components/ForgeBackground.vue';
import ForgeSocials from '@/components/ForgeSocials.vue';
</script>

<template>
  <ForgeBackground />

  <div
    class="relative z-2 flex min-h-screen items-center justify-center overflow-hidden p-0 md:p-[1.5rem]"
  >
    <div
      class="mx-auto flex w-full flex-col items-center justify-center px-[clamp(2rem,6vw,12rem)] py-[clamp(4rem,4vh,8rem)] md:flex-row"
    >
      <div class="flex flex-col items-center justify-center gap-6">
        <header id="header">
          <ForgeTitle title="The Forge Awakens" />
        </header>

        <section id="welcome-section" class="flex max-w-prose flex-col gap-6">
          <p class="text-center text-base leading-relaxed text-[#e6e2df]">
            Welcome, traveler. You've found your way to the Ember Fields, where steel is shaped by
            fire and ideas are forged with care<br />
            <br />
            I am Z'ark Ashveil, blacksmith of these lands. Every project you see here is crafted at
            my anvil, shaped through patience, experimentation, and no small amount of heat. Some
            works are refined and battle-tested, others are fresh sparks still finding their form,
            but all of them are mine<br />
            <br />
            This forge is where I share what I am building, what I am learning, and the things that
            catch fire in my mind. Stay as long as you like. Watch the sparks fly. Perhaps you'll
            find something worth carrying onward
          </p>
        </section>

        <footer id="footer">
          <ForgeSocials />
        </footer>
      </div>
    </div>
  </div>
</template>
