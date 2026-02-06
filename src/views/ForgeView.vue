<script setup lang="ts">
import ForgeTitle from '@/components/ForgeTitle.vue';
import ForgeDragon from '@/components/ForgeDragon.vue';
import ForgeBackground from '@/components/ForgeBackground.vue';
import ForgeSocials from '@/components/ForgeSocials.vue';
</script>

<template>
  <ForgeBackground />

  <div class="flex min-h-screen flex-col lg:flex-row">
    <section
      class="mx-auto flex w-full flex-col justify-center gap-6 px-[clamp(2rem,6vw,12rem)] py-[clamp(4rem,8vh,8rem)] lg:mx-0 lg:w-1/2"
    >
      <ForgeTitle title="The Forge Awakens" />

      <div class="flex flex-col gap-6 lg:max-w-prose">
        <p class="text-base leading-relaxed text-[#e6e2df]">
          Sparks are flying and the anvil is ringing; this corner of the forge is still being
          shaped.<br /><br />
          I'm hammering ideas into steel, tempering designs with fire, and making sure everything
          that comes out is worthy of a dragon's seal.<br /><br />
          Check back soon to see what emerges from the flames.
        </p>

        <ForgeSocials />
      </div>
    </section>

    <section class="flex shrink-0 items-center justify-center lg:w-1/2">
      <ForgeDragon />
    </section>
  </div>
</template>
