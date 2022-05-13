import Layout from '@/layout/index.vue';
export default [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'Home',
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/home/index.vue'),
  },
];
