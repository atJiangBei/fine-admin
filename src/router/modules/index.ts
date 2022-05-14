import Layout from '@/layout/index.vue';

import home from './home';
export default [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: Layout,
    children: [...home],
  },
];
