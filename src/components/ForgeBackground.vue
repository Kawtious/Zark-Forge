<script setup lang="ts">
import ForgeSparks from '@/components/ForgeSparks.vue';
import ForgeEmbers from '@/components/ForgeEmbers.vue';
</script>

<template>
  <div class="background">
    <ForgeEmbers />
    <ForgeSparks />
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  z-index: -100000;

  min-height: 100%;
  min-width: 100%;

  background: #000000;
}
</style>
