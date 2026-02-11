<script setup lang="ts">
import Background from '@/components/Background.vue';

const EMBER_COUNT = 30;

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const embers = Array.from({ length: EMBER_COUNT }, () => ({
  size: rand(3, 5),
  x: rand(0, 100),
  drift: rand(-20, 20),
  duration: rand(8, 14),
  delay: rand(-12, 0)
}));
</script>

<template>
  <Background>
    <div aria-hidden="true" class="pointer-events-none fixed inset-0 overflow-hidden">
      <span
        v-for="(ember, i) in embers"
        :key="i"
        class="animate-ember-rise absolute rounded-full bg-[radial-gradient(circle,#ffd27d_0%,#ff7a18_60%,transparent_70%)] opacity-35 blur-[3px]"
        :style="{
          'width': ember.size + 'px',
          'height': ember.size + 'px',
          'animation-delay': ember.delay + 's',
          '--x': ember.x + 'vw',
          '--drift': ember.drift + 'px',
          '--duration': ember.duration + 's'
        }"
      />
    </div>
  </Background>
</template>
