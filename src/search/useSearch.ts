import { ref, computed, onMounted } from 'vue';
import { usePartsStore } from '@/stores/partsStore';


export default function useSearch(originalSearchTerm: string) {

  const partsStore = usePartsStore();

  partsStore.getParts();

  const allParts = computed(() => partsStore.parts
    ? [...partsStore.parts.heads, ...partsStore.parts.arms, ...partsStore.parts.torsos, ...partsStore.parts.bases]
    : []);

    const results = ref<Array<any>>([]);

  const searchInventory = (searchTerm: string) => {
    let searchResults;
    const term = searchTerm || originalSearchTerm;

    if (!term) searchResults = allParts.value;
    else {
      const lowerTerm = term.toLowerCase();
      searchResults = allParts.value.filter(
        (part) => part.title.toLowerCase().includes(lowerTerm),
      );
    }
    results.value = [...searchResults];
  };

  searchInventory(originalSearchTerm);

  onMounted(() => console.log('Mounted: useSearch'));

  return { searchResults: results, search: searchInventory };
}
