<script setup lang="ts">
const { title = 'The Forge Awakens' } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <h1
    :data-text="title"
    class="animate-fire-glow after:animate-heat-shimmer relative z-0 bg-[linear-gradient(90deg,#ffcc33,#ff7a18,#ff3c00,#ff7a18,#ffcc33)] bg-[length:300%_300%] bg-clip-text text-[clamp(2.25rem,5vw,3rem)] font-extrabold text-transparent after:absolute after:inset-0 after:-z-10 after:bg-[linear-gradient(90deg,#ffb347,#ff6a00,#ff2e00)] after:bg-clip-text after:text-[clamp(2.25rem,5vw,3rem)] after:font-extrabold after:text-transparent after:opacity-80 after:blur-md after:content-[attr(data-text)]"
  >
    {{ title }}
  </h1>
</template>
