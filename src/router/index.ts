import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import SearchComponent from '../search/SearchComponent.vue';
import PartInfo from "@/parts/PartInfo.vue";
import ShoppingCart from '../cart/ShoppingCart.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder,
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchComponent,
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
    }
  ],
});
