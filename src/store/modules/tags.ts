import { defineStore } from 'pinia';
import { store } from '@/store';
import homes from '@/router/modules/home';
import router from '@/router';

export const useTagsStore = defineStore({
  id: 'tags',
  state: (): any => ({
    staticTagList: [...homes],
    tagList: [],
    cachePageList: [],
  }),
  actions: {
    changeTag(route: any) {
      console.log(route);
      const index = [...this.staticTagList, ...this.tagList].findIndex(
        (tag: any) => tag.path === route.path
      );
      if (index === -1) {
        this.tagList.push(route);
        if (route.name && route.meta.keepAlive === true) {
          this.cachePageList.push(route.name);
        }
      }
    },
    deleteTag(route: any) {
      console.log(route);
      const index = this.tagList.findIndex(
        (tag: any) => tag.path === route.path
      );
      if (index > -1) {
        this.tagList.splice(index, 1);
        if (!this.tagList.length) {
          router.push(this.staticTagList[0].path);
        } else {
          router.push(this.tagList[this.tagList.length - 1].path);
        }
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
