<script setup lang="ts">
import PageWrapper from '@/components/PageWrapper.vue';
</script>

<template>
  <PageWrapper>
    <div class="flex min-h-full min-w-full flex-row items-center justify-center">
      <RouterView />
    </div>
  </PageWrapper>
</template>
