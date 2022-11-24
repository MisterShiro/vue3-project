import { createRouter, createWebHistory } from 'vue-router';
import Parent from '@/views/Parent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Parent',
      component: Parent,
    },
  ],
});

export default router;
