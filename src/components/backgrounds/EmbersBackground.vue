<script setup lang="ts">
import EmbersEffect from '@/components/effects/EmbersEffect.vue';
import GlowEffect from '@/components/effects/GlowEffect.vue';
</script>

<template>
  <div aria-hidden="true" class="pointer-events-none fixed h-full w-full bg-black">
    <div
      class="h-full w-full bg-coffee-bean-950 mask-[url(@/assets/images/bg_smoke.png)] bg-cover opacity-20"
    ></div>
    <GlowEffect />
    <EmbersEffect />
  </div>
</template>
