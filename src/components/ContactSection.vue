<script setup lang="ts">
import IconDiscord from '@/components/icons/IconDiscord.vue';
import IconEmail from '@/components/icons/IconEmail.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import { useCopyTooltipsStore } from '@/stores/copy-tooltips.ts';

const { copyTooltips } = useCopyTooltipsStore();

function copy(text: string, event: MouseEvent) {
  window.navigator.clipboard.writeText(text);

  copyTooltips.push({
    id: crypto.randomUUID(),
    left: event.clientX,
    top: event.clientY - 30
  });
}
</script>

<template>
  <div class="flex flex-row items-center justify-center gap-3">
    <a
      href="https://github.com/Kawtious"
      aria-label="GitHub"
      class="group flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-title-1 transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-title-2/50"
    >
      <IconGitHub
        class="h-10 w-10 shrink-0 text-title-2 transition duration-200 group-hover:drop-shadow-[0_0_6px_rgba(255,80,0,0.8)]"
        colour="currentColor"
      />
    </a>

    <button
      @click="copy('kawtious', $event)"
      aria-label="Discord"
      class="group flex cursor-pointer items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-title-1 transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-title-2/50"
    >
      <IconDiscord
        class="h-10 w-10 shrink-0 text-title-2 transition duration-200 group-hover:drop-shadow-[0_0_6px_rgba(255,80,0,0.8)]"
        colour="currentColor"
      />
    </button>

    <a
      href="mailto:contact@zarkforge.xyz"
      aria-label="Email"
      class="group flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-title-1 transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-title-2/50"
    >
      <IconEmail
        class="h-10 w-10 shrink-0 text-title-2 transition duration-200 group-hover:text-title-2 group-hover:drop-shadow-[0_0_6px_rgba(255,80,0,0.8)]"
        colour="currentColor"
      />
    </a>
  </div>
</template>
