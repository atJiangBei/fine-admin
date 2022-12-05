<script setup lang="ts">
import { computed } from 'vue';
import Logo from './logo/index.vue';
import Sidebar from './sidebar/index.vue';
import Tags from './tags/index.vue';
import Screenfull from './screenfull/index.vue';
import Lang from './lang/index.vue';
import User from './user/index.vue';
import Setting from './setting/index.vue';
import { useLayoutStoreHook } from '@/store/modules/layout';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';

const layoutStore = useLayoutStoreHook();
const toggle = () => {
  layoutStore.toggleAside();
};
const styleC = computed(() => {
  const { layout, opened } = layoutStore;
  if (layout === 'horizontal') {
    return { width: '100%' };
  }
  return {
    width: `calc(100% - ${opened ? '210px' : '54px'})`,
  };
});
</script>

<template>
  <header class="fixed-header" :style="styleC">
    <div class="fd-header">
      <template v-if="layoutStore.layout === 'horizontal'">
        <Logo />
        <Sidebar />
      </template>
      <a-button size="small" @click="toggle" v-else>
        <MenuUnfoldOutlined v-if="layoutStore.opened" />
        <MenuFoldOutlined v-else />
      </a-button>
      <div class="fd-header-right">
        <Screenfull />
        <Lang />
        <User />
        <setting />
      </div>
    </div>
    <Tags />
  </header>
</template>
<style lang="less" scoped>
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  transition: width 0.28s;
  width: 100%;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .fd-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    align-items: center;
    box-shadow: 1px 1px 3px #fff inset;
  }
  .fd-header-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
