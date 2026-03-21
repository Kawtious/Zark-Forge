<script setup lang="ts">
import IconBluesky from '@/assets/icons/IconBluesky.vue';
import IconDiscord from '@/assets/icons/IconDiscord.vue';
import IconEmail from '@/assets/icons/IconEmail.vue';
import IconGitHub from '@/assets/icons/IconGitHub.vue';
import IconTwitter from '@/assets/icons/IconTwitter.vue';
import { useCopyTooltipsStore } from '@/stores/copy-tooltips.ts';
import { ref } from 'vue';

const { copyTooltips } = useCopyTooltipsStore();

function copy(text: string, event: MouseEvent) {
  globalThis.navigator.clipboard.writeText(text);

  copyTooltips.push({
    id: crypto.randomUUID(),
    left: event.clientX,
    top: event.clientY - 30
  });
}

const github = ref('https://github.com/Kawtious');
const bluesky = ref('https://bsky.app/profile/zarkforge.xyz');
const twitter = ref('https://x.com/zashveil');
const email = ref('mailto:contact@zarkforge.xyz');
const discord = ref('kawtious');
</script>

<template>
  <div class="flex flex-row items-center justify-center gap-3">
    <a
      target="_blank"
      rel="noopener noreferrer"
      :href="github"
      aria-label="GitHub"
      class="group flex items-center justify-center rounded-full p-2 text-sm font-semibold transition duration-200 hover:scale-110"
    >
      <IconGitHub
        class="h-8 w-8 shrink-0 text-intense-cherry-300 transition duration-200 group-hover:scale-110"
        colour="currentColor"
      />
    </a>

    <a
      @click="copy(discord, $event)"
      aria-label="Discord"
      class="group flex cursor-pointer items-center justify-center rounded-full p-2 text-sm font-semibold transition duration-200 hover:scale-110"
    >
      <IconDiscord
        class="h-8 w-8 shrink-0 text-intense-cherry-300 transition duration-200 group-hover:scale-110"
        colour="currentColor"
      />
    </a>

    <a
      :href="email"
      aria-label="Email"
      class="group flex items-center justify-center rounded-full p-2 text-sm font-semibold transition duration-200 hover:scale-110"
    >
      <IconEmail
        class="h-8 w-8 shrink-0 text-intense-cherry-300 transition duration-200 group-hover:scale-110"
        colour="currentColor"
      />
    </a>

    <a
      target="_blank"
      rel="noopener noreferrer"
      :href="bluesky"
      aria-label="Bluesky"
      class="group flex items-center justify-center rounded-full p-2 text-sm font-semibold transition duration-200 hover:scale-110"
    >
      <IconBluesky
        class="h-8 w-8 shrink-0 text-intense-cherry-300 transition duration-200 group-hover:scale-110"
        colour="currentColor"
      />
    </a>

    <a
      target="_blank"
      rel="noopener noreferrer"
      :href="twitter"
      aria-label="Twitter"
      class="group flex items-center justify-center rounded-full p-2 text-sm font-semibold transition duration-200 hover:scale-110"
    >
      <IconTwitter
        class="h-8 w-8 shrink-0 text-intense-cherry-300 transition duration-200 group-hover:scale-110"
        colour="currentColor"
      />
    </a>
  </div>
</template>
