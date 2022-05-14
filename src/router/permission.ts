import { Router, RouteLocationNormalized } from 'vue-router';
import { toRouteType } from './types';
import { getToken } from '@/utils/auth';
import { initRouter, findRouteByPath } from './utils';
import { usePermissionStoreHook } from '@/store/modules/permission';
import { useTagsStoreHook } from '@/store/modules/tags';

const whiteList = ['/login'];
export default function permission(router: Router) {
  router.beforeEach((to, _from, next) => {
    const token = getToken();
    const toPath = to.path;
    // console.log(to);

    if (token) {
      if (!usePermissionStoreHook().menusTree.length) {
        initRouter(router).then(() => {
          const route = findRouteByPath(router.options.routes, to.path);
          if (route) {
            useTagsStoreHook().changeTag(route);
          }
          next(to.path);
        });
      } else {
        next();
      }
    } else {
      if (whiteList.includes(toPath)) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    }
  });
}
