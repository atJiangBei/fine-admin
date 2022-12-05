<script setup lang="ts">
import { computed } from 'vue';
import { useLayoutStoreHook } from '@/store/modules/layout';
const layoutStore = useLayoutStoreHook();

const showName = computed(() => {
  return layoutStore.opened || layoutStore.layout === 'horizontal';
});
</script>

<template>
  <div class="app-name">
    <img src="@/assets/imgs/basic/logo120.png" style="height: 32px" />
    <span class="app-name-text" v-if="showName">Fine Admin</span>
  </div>
</template>
<style lang="less">
.app-name {
  display: flex;
  height: 32px;
  width: auto;
  align-items: flex-end;
  padding-left: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
  .app-name-text {
    font-size: 18px;
    margin-left: 8px;
    color: var(--fine-admin-name-color);
  }
}
</style>
