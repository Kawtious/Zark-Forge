<script setup lang="ts">
import SocialLinks from '@/components/SocialLinks.vue';
import EmbersBackground from '@/components/backgrounds/EmbersBackground.vue';
import CopyTooltip from '@/components/tooltips/CopyTooltip.vue';
</script>

<template>
  <main>
    <EmbersBackground id="background" class="-z-50" />

    <RouterView />

    <footer class="z-10 flex w-full flex-row items-center justify-center gap-64 p-10">
      <p class="text-sm opacity-50">© 2026 Z'ark Ashveil. All rights reserved.</p>
      <SocialLinks />
    </footer>

    <div id="overlay" class="z-50">
      <CopyTooltip />
    </div>
  </main>
</template>
