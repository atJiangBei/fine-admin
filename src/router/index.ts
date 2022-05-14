import {
  createRouter,
  //createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
} from 'vue-router';
import permission from './permission';
import basic from './modules/basic';
import modules from './modules';

const routes: Array<RouteRecordRaw> = [...basic, ...modules];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

permission(router);

export default router;
