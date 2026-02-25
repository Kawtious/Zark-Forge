<script setup lang="ts">
const { title = 'The Forge Awakens' } = defineProps({
  title: String
});
</script>

<template>
  <h1
    :data-text="title"
    class="relative animate-fire-glow bg-linear-90 from-title-1 via-title-3 to-title-1 bg-size-[300%_300%] bg-clip-text p-2 text-center text-5xl font-extrabold text-nowrap text-transparent capitalize before:absolute before:inset-0 before:-z-1 before:animate-heat-shimmer before:bg-linear-90 before:from-title-1 before:via-title-2 before:to-title-3 before:bg-clip-text before:p-2 before:text-center before:text-5xl before:font-extrabold before:text-nowrap before:text-transparent before:capitalize before:opacity-80 before:blur-md before:content-[attr(data-text)]"
  >
    {{ title }}
  </h1>
</template>
