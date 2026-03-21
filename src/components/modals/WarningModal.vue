<script setup lang="ts">
import { ref } from 'vue';

const show = ref(true);
</script>

<template>
  <div
    class="fixed top-0 left-0 z-50 flex h-full w-full animate-fade-in items-center justify-center bg-intense-cherry-950/70 backdrop-blur-md"
    v-if="show"
  >
    <div class="relative w-[90%] max-w-125 animate-slide-up p-4">
      <header class="mb-6 border-b border-solid border-b-intense-cherry-400 pb-4 text-center">
        <h2 class="m-0 text-[1.8rem] font-bold text-intense-cherry-400">Warning</h2>
      </header>

      <div class="mb-6 text-center leading-relaxed">
        <p class="text-[1.1rem]">
          This site contains <strong>NSFW</strong> content including nudity and explicit depictions
          of sexual activity.
        </p>
      </div>

      <div class="mb-6 flex flex-col justify-center gap-4 sm:flex-row">
        <button
          class="w-full min-w-37.5 cursor-pointer rounded-lg border-none bg-intense-cherry-400 px-6 py-3 text-[1rem] font-bold text-intense-cherry-50 transition-all duration-300 ease-in-out hover:-translate-y-0.5"
        >
          Exit site
        </button>
        <button
          class="w-full min-w-37.5 cursor-pointer rounded-lg border-none bg-intense-cherry-50 px-6 py-3 text-[1rem] font-bold text-intense-cherry-400 transition-all duration-300 ease-in-out hover:-translate-y-0.5"
          @click="show = false"
        >
          Accept and continue
        </button>
      </div>

      <footer class="text-center">
        <p class="text-[0.9rem] text-intense-cherry-50/70">
          By clicking "Accept and continue", you confirm that you are at least 18 years old (or the
          age of majority in your jurisdiction) and consent to viewing such material.
        </p>
      </footer>
    </div>
  </div>
</template>
