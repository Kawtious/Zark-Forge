<script setup lang="ts">
import Welcome from './components/Welcome.vue'
</script>

<template>
  <div>
    <h1 class="logo">
      🔥🐉🔨🔥
    </h1>
  </div>
  <Welcome/>
</template>

<style scoped>
.logo {
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em rgba(255, 113, 100, 0.67));
}
</style>
