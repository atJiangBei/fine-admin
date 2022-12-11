<template>
  <div class="layout-aside" :style="styleC">
    <Logo />
    <div class="layout-aside-bar-content">
      <sidebar />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useLayoutStoreHook } from '@/store/modules/layout';
import Sidebar from './sidebar/index.vue';
import Logo from './logo/index.vue';
const layoutStore = useLayoutStoreHook();

const styleC = computed(() => {
  return {
    width: layoutStore.opened ? '210px' : '54px',
  };
});
</script>
<style lang="less" scoped>
.layout-aside {
  z-index: 5;
  position: fixed;
  left: 0;
  top: 0;
  width: 210px;
  height: 100%;
  transition: all 0.3s;
  padding-top: 10px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  display: flex;
  flex-direction: column;
  .layout-aside-bar-content {
    flex: 1;
    overflow: hidden;
    &:hover {
      overflow-y: auto;
      overflow-x: hidden;
    }
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-track {
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
