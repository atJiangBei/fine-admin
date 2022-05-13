<script setup lang="ts">
import Tags from './tags';
import { useTagsStoreHook } from '@/store/modules/tags';
const cachePageList = useTagsStoreHook().cachePageList;
</script>
<template>
  <section class="app-main">
    <Tags />
    <div class="app-main-content">
      <router-view>
        <template #default="{ Component, route }">
          <keep-alive :include="cachePageList">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
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
  padding: 20px;
}
</style>
