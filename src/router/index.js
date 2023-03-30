import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '@/views/ProductsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'Products' },
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsView,
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('../components/UI/TheProductDetails.vue'),
      props: true,
    },
    {
      path: '/company',
      name: 'Company',
      component: () => import('../views/CompanyView.vue'),
    },
    {
      path: '/marketplace',
      name: 'Marketplace',
      component: () => import('../views/MarketplaceView.vue'),
    },
    {
      path: '/features',
      name: 'Features',
      component: () => import('../views/FeaturesView.vue'),
    },
    {
      path: '/team',
      name: 'Team',
      component: () => import('../views/TeamView.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
});

export default router;
