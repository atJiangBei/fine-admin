//import Layout from '@/layout/index.vue';
export default {
  path: '/error',
  name: 'error',
  component: () => import('@/layout/index.vue'),
  meta: {
    i18n: false,
    title: 'error',
    icon: 'error',
  },
  children: [
    {
      path: '/error/404',
      name: 'error-404',
      meta: {
        i18n: false,
        title: '404',
      },
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/error/404.vue'),
    },
    {
      path: '/error/500',
      name: 'error-500',
      meta: {
        i18n: false,
        title: '500',
      },
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/error/500.vue'),
    },
  ],
};
// {
//   path: '/:pathMatch(.*)',
//   redirect: '/error/404',
// },
