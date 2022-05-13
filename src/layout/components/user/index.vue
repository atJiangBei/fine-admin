<script setup lang="ts"></script>

<template>
  <el-dropdown trigger="click">
    <div class="user-container">
      <img src="@/assets/imgs/basic/user_avatar.jpg" />
      <span>JiangBei</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu class="logout">
        <el-dropdown-item>
          <i class="ri-logout-circle-r-line"></i>退出系统</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style lang="less">
.user-container {
  box-sizing: border-box;
  padding: 8px 10px;
  height: 48px;
  min-width: 105px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: var(--admin-basic-color);
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  img {
    height: 32px;
  }
}
</style>
