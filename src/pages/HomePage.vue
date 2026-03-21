<script setup lang="ts">
import SocialLinks from '@/components/SocialLinks.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col px-24">
    <div class="flex h-screen flex-col items-center justify-center gap-4">
      <h1
        data-text="The Forge Awakens"
        class="relative animate-fire-glow bg-linear-90 from-intense-cherry-300 via-intense-cherry-500 to-intense-cherry-300 bg-size-[300%_300%] bg-clip-text p-2 text-center text-5xl font-extrabold text-nowrap text-transparent capitalize before:absolute before:inset-0 before:-z-1 before:animate-heat-shimmer before:bg-linear-90 before:from-intense-cherry-300 before:via-intense-cherry-500 before:to-intense-cherry-300 before:bg-clip-text before:p-2 before:text-center before:text-5xl before:font-extrabold before:text-nowrap before:text-transparent before:capitalize before:opacity-80 before:blur-md before:content-[attr(data-text)]"
      >
        The Forge Awakens
      </h1>

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

      <SocialLinks />
    </div>

    <div class="py-12">
      <div class="flex min-h-screen flex-row gap-4 p-4">
        <section class="flex grow flex-col gap-4">
          <div class="flex flex-row">
            <h2>Fursona</h2>
            <RouterLink to="/fursona" class="text-md">Fursona</RouterLink>
          </div>

          <div class="flex flex-row">
            <h2>Projects</h2>
            <RouterLink to="/projects" class="text-md">Projects</RouterLink>
          </div>
        </section>

        <section class="flex grow-0 justify-center">
          <div class="sticky top-0 flex h-screen flex-col items-center justify-center">
            <img class="" src="" alt="" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
