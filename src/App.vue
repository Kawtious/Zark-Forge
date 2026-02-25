<script setup lang="ts">
import CopyTooltip from '@/components/CopyTooltip.vue';
import EmbersBackground from '@/components/EmbersBackground.vue';
</script>

<template>
  <div class="relative flex min-h-screen items-center justify-center overflow-hidden p-0 sm:p-6">
    <EmbersBackground />
    <RouterView />
    <CopyTooltip />
  </div>
</template>
