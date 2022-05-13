<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import sidebarItem from './sidebarItem.vue';

import { usePermissionStoreHook } from '@/store/modules/permission';
import { useTagsStoreHook } from '@/store/modules/tags';
import { useRoute } from 'vue-router';
const props = defineProps({});
const activeIndex = computed(() => useRoute().path);

const routeList = usePermissionStoreHook().wholeMenus;

const findRouteByPath = (routes: any, path: string) => {
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
const onSelect = (path: string) => {
  //console.log(path);
  const route = findRouteByPath(routeList, path);
  useTagsStoreHook().changeTag(route);
};
</script>
<template>
  <div class="sidebar-container">
    <el-menu
      router
      :ellipsis="false"
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#31c29b"
      @select="onSelect"
    >
      <sidebar-item
        v-for="route in routeList"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>
<style lang="less">
.sidebar-container {
  .el-menu {
    --el-menu-item-height: 42px;
  }
  .el-menu--horizontal {
    border-bottom: 0;
  }
}
</style>
