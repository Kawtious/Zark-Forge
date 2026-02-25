import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCopyTooltipsStore = defineStore('copy-tooltips', () => {
  const copyTooltips = ref<
    {
      id: string;
      left: number;
      top: number;
    }[]
  >([]);
  return { copyTooltips };
});
