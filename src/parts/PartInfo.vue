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
import parts from '@/data/parts';

const props = defineProps([ 'partType', 'id' ])

const part = computed(() => {

  const partType = props.partType;
  const id = props.id;

  return parts[partType].find((part: any) => part.id === +id);
});
</script>
