import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import permission from './permission';
import basic from './modules/basic';
import modules from './modules';

const routes: Array<RouteRecordRaw> = [...basic, ...modules];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

permission(router);

export default router;
