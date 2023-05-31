<template>
  <div>
    <div class="header">
      <span v-if="open" @click="toggle()" @keydown="handleKeyDown($event)">&#x25b2;Collapse</span>
      <span v-else @click="toggle()" @keydown="handleKeyDown($event)">&#x25bc;Expand</span>
    </div>
    <!-- Toggleable -->
    <slot v-if="open">
      <div>Default Content</div>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CollapsibleSection',
  data() {
    return {
      open: true,
    };
  },
  methods: {
    handleKeyDown(e: KeyboardEvent): any {
      // TODO: Fill with some meaningfull code
    },
    toggle(): void {
      this.open = !this.open;
    },
  },
});
</script>
<style scoped>
.header {
  background-color: #bbb;
  padding: 3px;
  cursor: pointer;
}
</style>
