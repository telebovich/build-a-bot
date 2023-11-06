import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const cart = ref<[]>([]);
  const cartTotal = computed(() => cart.value.reduce((prev: any, cur: any) => prev += cur.cost, 0));

  return {
    cart,
    cartTotal,
  };
});
