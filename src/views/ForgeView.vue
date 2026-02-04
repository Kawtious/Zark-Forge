<script setup lang="ts">
import ForgeTitle from '@/components/ForgeTitle.vue'
import ForgeDragon from '@/components/ForgeDragon.vue'
import ForgeBackground from '@/components/ForgeBackground.vue'
import ForgeSocials from '@/components/ForgeSocials.vue'
</script>

<template>
  <ForgeBackground />

  <div class="view">
    <section class="left">
      <ForgeTitle title="The Forge Awakens" />

      <p class="description">
        Sparks are flying and the anvil is ringing; this corner of the forge is still being
        shaped.<br /><br />
        I'm hammering ideas into steel, tempering designs with fire, and making sure everything that
        comes out is worthy of a dragon's seal.<br /><br />
        Check back soon to see what emerges from the flames.
      </p>

      <ForgeSocials />
    </section>

    <section class="right">
      <ForgeDragon />
    </section>
  </div>
</template>

<style scoped>
.view {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  color: #e6e2df;
}

.left {
  display: flex;
  flex-direction: column;

  padding: 0 10rem 0 10rem;
  gap: 1.5rem;

  justify-content: center;
}

.right {
  display: flex;

  align-items: center;
  justify-content: center;
}

.description {
  line-height: 1.5;
}

@media (max-width: 1280px) {
  .left {
    padding-right: 6rem;
    padding-left: 6rem;
  }
}

@media (max-width: 1024px) {
  .view {
    grid-template-columns: 1fr;
  }

  .left {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

@media (max-width: 900px) {
  .left {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
</style>
