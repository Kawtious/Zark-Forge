<script setup lang="ts">
import EmbersEffect from '@/components/effects/EmbersEffect.vue';
import GlowEffect from '@/components/effects/GlowEffect.vue';
</script>

<template>
  <div aria-hidden="true" class="pointer-events-none fixed -z-50 h-full w-full">
    <GlowEffect />
    <EmbersEffect />
  </div>
</template>
