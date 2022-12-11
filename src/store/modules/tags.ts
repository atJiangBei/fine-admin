import { RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia';
import { store } from '@/store';
import { home } from '@/router/modules/home';
import router from '@/router';
import { toRouteType } from '@/router/types';

export const useTagsStore = defineStore({
  id: 'tags',
  state: (): any => ({
    staticTagList: [home],
    tagList: [],
    cachePageList: [],
    activedTagPath: home.path,
  }),
  actions: {
    setActivedTagPath(path: string) {
      this.activedTagPath = path;
    },
    changeTag(route: toRouteType) {
      try {
        this.setActivedTagPath(route.path);
        const index = [...this.staticTagList, ...this.tagList].findIndex(
          (tag: any) => tag.path === route.path
        );
        if (index === -1) {
          this.tagList.push(route);
          if (route.name && route.meta && route.meta.keepAlive === true) {
            this.cachePageList.push(route.name);
          }
        }
      } catch (error) {
        console.warn(error);
      }
    },
    deleteTag(index: number, route: RouteRecordRaw, nextPath: string) {
      this.tagList.splice(index, 1);
      if (nextPath) {
        this.setActivedTagPath(nextPath);
        router.push(nextPath);
      }
      const cacheIndex = this.cachePageList.findIndex(
        (name: string) => name === route.name
      );
      if (cacheIndex > -1) {
        this.cachePageList.splice(cacheIndex, 1);
      }
    },
  },
});

export function useTagsStoreHook() {
  return useTagsStore(store);
}
