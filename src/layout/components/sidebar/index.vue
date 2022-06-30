<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import sidebarItem from './sidebarItem.vue';
import { usePermissionStoreHook } from '@/store/modules/permission';
import { useTagsStoreHook } from '@/store/modules/tags';
import { findRouteByPath } from '@/router/utils';
import { useRoute } from 'vue-router';
import router from '@/router';

const route = useRoute();

const activeIndex = computed(() => {
  return route.path;
});

const routeList = usePermissionStoreHook().wholeMenus;

const onSelect = (path: string) => {
  const route = findRouteByPath(routeList, path);
  useTagsStoreHook().changeTag(route);
};
</script>
<template>
  <div class="sidebar-container">
    <el-menu
      :ellipsis="false"
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#31c29b"
      :router="true"
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
  flex: 1;
  .el-menu--horizontal {
    border-bottom: 0;
  }
}
</style>
