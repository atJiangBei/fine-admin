<script setup lang="ts">
import Logo from './logo/index.vue';
import Sidebar from './sidebar/index.vue';

import Screenfull from './screenfull/index.vue';
import Lang from './lang/index.vue';
import User from './user/index.vue';
</script>

<template>
  <div class="fixed-header">
    <header class="horizontal-header">
      <Logo />
      <Sidebar />
      <div class="horizontal-header-right">
        <Screenfull />
        <Lang />
        <User />
      </div>
    </header>
  </div>
</template>
<style lang="less">
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 998;
  transition: width 0.28s;
  width: 100%;
  transition: none !important;
  background-color: #545c64;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .horizontal-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    align-items: center;
  }
  .horizontal-header-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
