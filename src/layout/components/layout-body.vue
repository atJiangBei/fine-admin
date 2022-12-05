<script setup lang="ts">
import { computed } from 'vue';
import { useTagsStoreHook } from '@/store/modules/tags';
import { useLayoutStoreHook } from '@/store/modules/layout';
const cachePageList = useTagsStoreHook().cachePageList;
const layoutStore = useLayoutStoreHook();

const styleC = computed(() => {
  const { layout, opened } = layoutStore;
  if (layout === 'horizontal') {
    return {};
  }
  return {
    'padding-left': opened ? '210px' : '54px',
  };
});
</script>
<template>
  <section class="app-main" :style="styleC">
    <div class="app-main-content">
      <router-view>
        <template #default="{ Component, route }">
          <transition name="fade-slide" mode="out-in" appear>
            <keep-alive :include="cachePageList">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
            <!-- <keep-alive :include="cachePageList" v-if="cachePageList.includes($route.name)">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
            <component :is="Component" :key="route.fullPath" v-else /> -->
          </transition>
        </template>
      </router-view>
    </div>
  </section>
</template>
<style lang="less" scoped>
.app-main {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding-top: 81px;
  transition: all 0.3s;
  background-color: var(--fine-admin-bg);
}
.app-main-content {
  padding: 8px;
}
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
