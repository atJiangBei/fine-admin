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
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .svg-icon.toggle-icon {
    width: 30px;
    height: 30px;
    fill: var(--admin-basic-color);
  }
}
</style>
