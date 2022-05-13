import { defineStore } from 'pinia';
import { store } from '@/store';
import staticRoutes from '@/router/modules';
import { cloneDeep } from 'lodash-es';

export const usePermissionStore = defineStore({
  id: 'permission',
  state: () => ({
    wholeMenus: [...staticRoutes],
    menusTree: [],
    cachePageList: [],
  }),
  actions: {
    // 获取异步路由菜单
    asyncActionRoutes(routes: any) {
      this.wholeMenus = this.wholeMenus.concat(routes);
      this.menusTree = [...this.wholeMenus] as any;
      this.initCachePageList(this.wholeMenus);
    },
    initCachePageList(routes: any) {
      addCachePage(this.cachePageList, routes);
      console.log(this.cachePageList);
    },
  },
});

export function usePermissionStoreHook() {
  return usePermissionStore(store);
}

function addCachePage(cachePageList: string[], routes: any) {
  const findKeepAlive = (routes: any[]) => {
    if (!routes || !routes.length) return;
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      if (route.name && route.meta?.keepAlive === true) {
        if (!cachePageList.includes(route.name)) {
          cachePageList.push(route.name);
        }
      }
      findKeepAlive(route.children);
    }
  };
  findKeepAlive(routes);
}
