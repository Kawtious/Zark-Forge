<script setup lang="ts">
import ContactSection from '@/components/ContactSection.vue';
import TitleGlow from '@/components/TitleGlow.vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center p-4">
    <header id="header" class="mb-6 w-full pb-4">
      <TitleGlow />
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
      <ContactSection />
    </footer>
  </div>
</template>
