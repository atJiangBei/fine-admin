<script setup lang="ts"></script>

<template>
  <el-dropdown id="header-translation" trigger="click">
    <div class="toggle-lang">
      <svg-icon title="语言切换" icon="lang" className="toggle-icon" />
    </div>
    <template #dropdown>
      <el-dropdown-menu class="translation">
        <el-dropdown-item>
          <el-icon class="check-zh"><check /></el-icon>
          简体中文
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon class="check-en"><check /></el-icon>
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style lang="less">
.toggle-lang {
  height: 48px;
  display: flex;
  align-items: center;
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
