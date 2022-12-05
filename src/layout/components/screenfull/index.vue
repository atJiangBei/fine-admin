<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, toggle } = useFullscreen();
</script>

<template>
  <div class="screen-full" @click="toggle">
    <svg-icon
      className="toggle-icon"
      title="全屏"
      icon="full_screen"
      v-if="!isFullscreen"
    />
    <svg-icon
      title="全屏"
      icon="cancel_full_screen"
      className="toggle-icon"
      v-else
    />
  </div>
</template>

<style lang="less" scoped>
.screen-full {
  width: 36px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  color: var(--fine-admin-header-color);
  &:hover {
    background-color: var(--fine-admin-header-bg-hover);
  }
  .svg-icon.toggle-icon {
    width: 24px;
    height: 24px;
    //fill: #666;
  }
}
</style>
