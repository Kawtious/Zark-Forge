<script setup lang="ts">
import { useCopyTooltipsStore } from '@/stores/copy-tooltips.ts';

const { copyTooltips } = useCopyTooltipsStore();

function removeTooltip(id: string) {
  const index = copyTooltips.findIndex(t => t.id === id);

  if (index < 0) return;

  copyTooltips.splice(index, 1);
}
</script>

<template>
  <div
    v-for="copyTooltip in copyTooltips"
    :key="copyTooltip.id"
    class="pointer-events-none fixed -translate-1/2 transform animate-copy-tooltip-fade-in-out rounded-sm bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-md before:absolute before:-bottom-1.25 before:left-1/2 before:-translate-x-1/2 before:border-x-[5px] before:border-t-[5px] before:border-solid before:border-x-transparent before:border-t-green-600 before:border-b-transparent before:content-['']"
    :style="{
      left: copyTooltip.left + 'px',
      top: copyTooltip.top + 'px'
    }"
    @animationend="removeTooltip(copyTooltip.id)"
  >
    Copied!
  </div>
</template>
