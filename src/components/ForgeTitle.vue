<script setup lang="ts">
const { title = 'The Forge Awakens' } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <h1
    :data-text="title"
    class="animate-fire-glow before:animate-heat-shimmer relative z-0 bg-[linear-gradient(90deg,#ffcc33,#ff7a18,#ff3c00,#ff7a18,#ffcc33)] bg-[length:300%_300%] bg-clip-text text-[3rem] font-extrabold text-nowrap text-transparent capitalize before:absolute before:inset-0 before:-z-1 before:bg-[linear-gradient(90deg,#ffb347,#ff6a00,#ff2e00)] before:bg-clip-text before:text-[3rem] before:font-extrabold before:text-transparent before:capitalize before:opacity-80 before:blur-md before:content-[attr(data-text)]"
  >
    {{ title }}
  </h1>
</template>
