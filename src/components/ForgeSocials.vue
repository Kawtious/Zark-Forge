<script setup lang="ts">
import IconEmail from '@/components/icons/IconEmail.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
</script>

<template>
  <div>
    <div class="grid w-full grid-cols-2 gap-3">
      <a
        href="https://github.com/Kawtious"
        aria-label="GitHub"
        class="group flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-[0.95rem] font-semibold text-amber-200 transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
      >
        <IconGitHub
          class="h-5 w-5 shrink-0 text-orange-400 transition duration-200 group-hover:text-orange-500 group-hover:drop-shadow-[0_0_6px_rgba(255,80,0,0.8)]"
          colour="currentColor"
        />
        GitHub
      </a>

      <a
        href="mailto:contact@zarkforge.xyz"
        aria-label="Email"
        class="group flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-[0.95rem] font-semibold text-amber-200 transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
      >
        <IconEmail
          class="h-5 w-5 shrink-0 text-orange-400 transition duration-200 group-hover:text-orange-500 group-hover:drop-shadow-[0_0_6px_rgba(255,80,0,0.8)]"
          colour="currentColor"
        />
        Email
      </a>
    </div>
  </div>
</template>
