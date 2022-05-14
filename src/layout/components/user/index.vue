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
