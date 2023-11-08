<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

import { usePartsStore } from '@/stores/partsStore';

const partsStore = usePartsStore();

const props = defineProps([ 'partType', 'id' ])

const part = computed(() => {

  const partType = props.partType;
  const id = props.id;

  return partsStore.parts[partType].find((part: any) => part.id === +id);
});
</script>
