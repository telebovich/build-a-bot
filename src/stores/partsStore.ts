import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePartsStore = defineStore('parts', () => {
  const parts = ref<any | null>(null);

  const getParts = async () => {
    const response = await fetch('/api/parts');
    parts.value = await response.json();
  };

  return {
    parts,
    getParts,
  };
});
