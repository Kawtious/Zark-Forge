<script setup lang="ts">
import Embers from '@/components/backgrounds/Embers.vue';
</script>

<template>
  <Embers />

  <div
    class="relative z-2 flex min-h-screen items-center justify-center overflow-hidden p-0 md:p-[1.5rem]"
  >
    <div
      class="mx-auto flex w-full flex-col items-center justify-center px-[clamp(2rem,6vw,12rem)] py-[clamp(4rem,4vh,8rem)] md:flex-row"
    >
      <RouterView />
    </div>
  </div>
</template>
