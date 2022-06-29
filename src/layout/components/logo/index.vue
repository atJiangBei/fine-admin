<script setup lang="ts"></script>

<template>
  <div class="app-name">
    <img src="@/assets/imgs/basic/logo120.png" style="height: 32px" />
    <span class="app-name-text">Admin</span>
  </div>
</template>
<style lang="less">
.app-name {
  display: flex;
  height: 32px;
  width: auto;
  min-width: 180px;
  align-items: flex-end;
  padding-left: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  .app-name-text {
    margin-left: 5px;
    color: var(--admin-basic-color);
  }
}
</style>
