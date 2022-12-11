import {
  createRouter,
  //createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
} from 'vue-router';
import permission from './permission';

import home from './modules/home';
import error from './modules/error';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/login/index.vue'),
  },
  home,
  error,
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

permission(router);

export default router;
