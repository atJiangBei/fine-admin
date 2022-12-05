<script setup lang="ts">
import router from '@/router';
import { removeToken } from '@/utils/auth';

const logout = () => {
  removeToken();
  router.push('/login');
};
</script>

<template>
  <el-dropdown trigger="click">
    <div class="user-container">
      <img src="@/assets/imgs/basic/user_avatar.jpg" />
      <span>JiangBei</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu class="logout">
        <el-dropdown-item @click="logout"> 退出系统 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style lang="less">
.user-container {
  box-sizing: border-box;
  padding: 8px 10px;
  height: 48px;
  max-width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 14px;
  color: var(--fine-admin-header-color);
  &:hover {
    background-color: var(--fine-admin-header-bg-hover);
  }
  img {
    height: 28px;
    margin-right: 5px;
    border-radius: 50%;
  }
}
</style>
