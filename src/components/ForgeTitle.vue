<script setup lang="ts">
const { title = 'The Forge Awakens' } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <h1 class="title" :data-text="title">{{ title }}</h1>
</template>

<style scoped>
.title {
  position: relative;
  z-index: 0;

  font-size: 3rem;
  font-weight: 800;

  background: linear-gradient(90deg, #ffcc33, #ff7a18, #ff3c00, #ff7a18, #ffcc33);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: fireGlow 6s ease infinite;
}

.title::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  z-index: -1;

  font-size: 3rem;
  font-weight: 800;
  line-height: 1.5;

  background: linear-gradient(90deg, #ffb347, #ff6a00, #ff2e00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  filter: blur(12px);
  opacity: 0.8;

  animation: heatShimmer 3s ease-in-out infinite;
}

@keyframes heatShimmer {
  0% {
    transform: translateY(0) skewX(0deg);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-2px) skewX(1deg);
    opacity: 0.7;
  }
  100% {
    transform: translateY(0) skewX(0deg);
    opacity: 0.4;
  }
}

@keyframes fireGlow {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
