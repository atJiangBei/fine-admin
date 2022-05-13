<script setup lang="ts">
import LayoutHeader from './components/layout-header.vue';
import LayoutBody from './components/layout-body.vue';
</script>

<template>
  <div class="main-container">
    <LayoutHeader></LayoutHeader>
    <LayoutBody></LayoutBody>
  </div>
</template>
<style lang="less">
.main-container {
  height: 100vh;
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 0;
  position: relative;
  background: #f0f2f5;
}
</style>
