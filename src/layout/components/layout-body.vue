<script setup lang="ts">
import Tags from './tags/index.vue';
import { useTagsStoreHook } from '@/store/modules/tags';
const cachePageList = useTagsStoreHook().cachePageList;
</script>
<template>
  <section class="app-main">
    <Tags />
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
<style lang="less">
.app-main {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding-top: 48px;
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
