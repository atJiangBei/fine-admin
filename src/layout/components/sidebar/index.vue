<script setup lang="ts">
import { ref, computed, watch, watchEffect } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import sidebarItem from './sidebarItem.vue';
import { usePermissionStoreHook } from '@/store/modules/permission';
import { useTagsStoreHook } from '@/store/modules/tags';
import { findRouteByPath } from '@/router/utils';
import { useRoute } from 'vue-router';
import router from '@/router';
import { getDirectory } from './util';
import { useLayoutStoreHook } from '@/store/modules/layout';
const layoutStore = useLayoutStoreHook();

const route = useRoute();

const activeIndex = computed(() => {
  return route.path;
});

const routeList = usePermissionStoreHook().wholeMenus;
console.log(26, routeList.length);

const onSelect = (item: any) => {
  const path = item.key;
  const route = findRouteByPath(routeList, path);
  useTagsStoreHook().changeTag(route);
  router.push(path);
};

const selectedKeys = ref([route.path]);
const openKeys = ref(['/functional']);
watchEffect(() => {
  console.log(29, getDirectory(routeList, activeIndex.value));
  openKeys.value = getDirectory(routeList, activeIndex.value);
});
const mode = computed(() => {
  if (layoutStore.layout === 'vertical') {
    return 'inline';
  }
  return layoutStore.layout;
});
watch(
  () => openKeys.value,
  (nvl) => {
    console.log(nvl);
  }
);
</script>
<template>
  <div class="sidebar-container">
    <a-menu
      :ellipsis="false"
      v-model:selected-keys="selectedKeys"
      v-model:open-keys="openKeys"
      :subMenuCloseDelay="0.2"
      :mode="mode"
      :inline-collapsed="!layoutStore.opened"
      @select="onSelect"
    >
      <sidebar-item
        v-for="route in routeList"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </a-menu>
  </div>
</template>
<style lang="less">
.sidebar-container {
  flex: 1;
  .el-menu--horizontal {
    border-bottom: 0;
  }
  .ant-menu.ant-menu-inline-collapsed {
    width: 54px;
  }
}
</style>
