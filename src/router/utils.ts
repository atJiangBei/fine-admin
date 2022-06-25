import { Router, RouteRecordRaw } from 'vue-router';
import { getAsyncRoutes } from '@/api/global';
import { usePermissionStoreHook } from '@/store/modules/permission';
import Layout from '@/layout/index.vue';

const loadRouteComponent = (viewPath: string) => {
  return () => import(/* @vite-ignore */ `@/views${viewPath}`);
};
const transformChildren = (routes: Array<RouteRecordRaw>) => {
  const newRoutes: Array<RouteRecordRaw> = [];
  const transform = (routes: Array<RouteRecordRaw>) => {
    routes.forEach((route) => {
      if (route.meta?.type === 1) {
        route.component = loadRouteComponent(route.path);
        newRoutes.push(route);
      } else if (route.meta?.type === 0) {
        if (route.children && route.children.length) {
          transform(route.children);
        }
      }
    });
  };
  transform(routes);
  return newRoutes;
};

const addAsyncRoutes = (arrRoutes: Array<RouteRecordRaw>) => {
  arrRoutes = JSON.parse(JSON.stringify(arrRoutes));
  for (let i = 0; i < arrRoutes.length; i++) {
    const route = arrRoutes[i];
    route.component = Layout;
    if (route.children && route.children.length) {
      route.children = transformChildren(route.children);
    }
  }
  return arrRoutes;
};

export function initRouter(router: Router) {
  return new Promise((resolve) => {
    getAsyncRoutes({ name: 'admin' }).then((res) => {
      const data = removeButtonPermissions(res.data || []);
      if (!data.length) {
        usePermissionStoreHook().asyncActionRoutes([]);
      } else {
        const routes = router.options.routes;
        const addRoutes = addAsyncRoutes(data as any);
        addRoutes.forEach((route) => {
          if (routes?.findIndex((value) => value.path === route.path) === -1) {
            routes.push(route);
            if (!router.hasRoute(route.name || String(Math.random()))) {
              router.addRoute(route);
            }
          }
        });
        usePermissionStoreHook().asyncActionRoutes(data);
        //console.log(addRoutes);
      }
      router.addRoute({
        path: '/:pathMatch(.*)',
        redirect: '/error/404',
      });
      resolve(undefined);
    });
  });
}

export function removeButtonPermissions(arrRoutes: Array<any>) {
  const clearButton = (arr: any[]) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].type === 2 || arr[i].meta?.type === 2) {
        arr.splice(i, 1);
        i--;
      }
    }
  };
  const filterButtons = (arr: any[]) => {
    arr.forEach((item) => {
      if (item.meta?.type !== 2) {
        if (item.children && item.children.length) {
          clearButton(item.children);
          if (item.children.length) {
            filterButtons(item.children);
          } else {
            delete item.children;
          }
        }
      }
    });
  };

  filterButtons(arrRoutes);

  return arrRoutes;
}

export const findRouteByPath = (routes: RouteRecordRaw[], path: string) => {
  let resultRoute = null;
  const recursion = (routes: any) => {
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      if (route.path === path) {
        resultRoute = route;
        return;
      }
      if (route.children && route.children.length) {
        recursion(route.children);
      }
    }
  };
  recursion(routes);
  return resultRoute;
};
