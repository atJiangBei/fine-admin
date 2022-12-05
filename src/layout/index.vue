<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { useLayoutStoreHook } from '@/store/modules/layout';
import LayoutHeader from './components/layout-header.vue';
import LayoutAside from './components/layout-aside.vue';
import LayoutBody from './components/layout-body.vue';

const layoutStore = useLayoutStoreHook();

const showAside = computed(() => {
  const { layout } = layoutStore;
  if (layout === 'horizontal') {
    return false;
  }
  return true;
});

const containerClass = computed(() => {
  const { layout, themeStyle, themeColorMap } = layoutStore;
  return {
    'fd-main-container': true,
    [themeStyle]: true,
    [`fd-layout-${layout}`]: true,
  };
});

watchEffect(() => {
  const { layout, themeStyle, theme } = layoutStore;
  const attributes = { layout, themeStyle };
  document.documentElement.setAttribute('theme', theme);
  Object.keys(attributes).forEach((k) => {
    type Keys = keyof typeof attributes;
    const key = k as Keys;
    document.body.setAttribute(k, attributes[key]);
  });
});
</script>

<template>
  <div :class="containerClass">
    <LayoutHeader></LayoutHeader>
    <layout-aside v-if="showAside"></layout-aside>
    <LayoutBody></LayoutBody>
  </div>
</template>
<style lang="less">
.fd-main-container {
  height: 100vh;
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 0;
  position: relative;
  background: #f0f2f5;
}
</style>
