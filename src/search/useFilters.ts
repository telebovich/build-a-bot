import { ref, computed, onMounted } from 'vue';

function filterResults(results: any, filters: any) {
  return results.value.filter((part: any) => filters.value.every(
    (filter: any) => {
      const filterField = Object.keys(filter)[0];
      const filterValue = filter[filterField];
      return part[filterField] === filterValue;
    },
  ));
}

export default function useFilters(searchResults: any) {
  const filters = ref<Array<any>>([]);

  const applyFilters = (filter:any) => filters.value.push(filter);
  const clearFilters = () => { filters.value = []; };

  onMounted(() => console.log('Mounted: useFilters'));

  const filteredResults = computed(() => filterResults(searchResults, filters));

  return {
    filters,
    applyFilters,
    clearFilters,
    filteredResults,
  };
}
