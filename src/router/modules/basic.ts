import Layout from '@/layout/index.vue';
export default [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/login/index.vue'),
  },
  {
    path: '/error',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/error/404',
        name: 'error-404',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/error/404.vue'),
      },
    ],
  },
  // {
  //   path: '/:pathMatch(.*)',
  //   redirect: '/error/404',
  // },
];
