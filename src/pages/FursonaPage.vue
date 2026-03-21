<script setup lang="ts">
import { ref } from 'vue';

function getAge(birthDate: Date) {
  const today = new Date();
  const m = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

const name = ref("Z'ark Ashveil");
const species = ref('Dragon wolf');
const birthDate = ref(new Date(2001, 9, 3));
const pronouns = ref('he/him');
</script>

<template>
  <div class="flex min-h-screen flex-col gap-4 p-12">
    <RouterLink to="/">Back</RouterLink>

    <div class="flex flex-col items-center justify-center gap-3">
      <img class="h-64.75 w-[256px] rounded-full" src="@/assets/images/avatar.png" alt="" />
      <h1
        :data-text="name"
        class="relative animate-fire-glow bg-linear-90 from-intense-cherry-300 via-intense-cherry-500 to-intense-cherry-300 bg-size-[300%_300%] bg-clip-text p-2 text-center text-4xl font-extrabold text-nowrap text-transparent capitalize before:absolute before:inset-0 before:-z-1 before:animate-heat-shimmer before:bg-linear-90 before:from-intense-cherry-300 before:via-intense-cherry-500 before:to-intense-cherry-300 before:bg-clip-text before:p-2 before:text-center before:text-4xl before:font-extrabold before:text-nowrap before:text-transparent before:capitalize before:opacity-80 before:blur-md before:content-[attr(data-text)]"
      >
        {{ name }}
      </h1>
      <p class="opacity-50">
        <span class="capitalize">{{ species }}</span> · {{ getAge(birthDate) }} yo · {{ pronouns }}
      </p>
      <p class="max-w-prose text-center text-base leading-relaxed">
        A dragon with a fondness for sheep
      </p>
    </div>
  </div>
</template>
