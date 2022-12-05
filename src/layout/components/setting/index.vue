<template>
  <span class="fd-setting" @click="settingShow = true">
    <setting-outlined />
  </span>
  <a-drawer
    title="Setting"
    v-model:visible="settingShow"
    class="setting-drawer"
  >
    <div>
      <div>
        <a-divider>主题</a-divider>
        <div class="flex flex-jc-center">
          <a-switch
            checked-value="dark"
            un-checked-value="light"
            checked-children="dark"
            un-checked-children="light"
            v-model:checked="theme"
          ></a-switch>
        </div>
      </div>
      <div>
        <a-divider>导航栏模式</a-divider>
        <ul class="flex flex-jc-sb flex-jc-sa navigation-bar">
          <li
            class="navigation-bar-item cursor-pointer flex flex-jc-sb vertical"
            :class="{
              active: layoutStore.layout === 'vertical',
            }"
            @click="onToggle('vertical')"
          >
            <div class="setting-aside"></div>
            <div class="setting-content">
              <div class="setting-header"></div>
            </div>
          </li>
          <li
            class="navigation-bar-item cursor-pointer horizontal"
            :class="{
              active: layoutStore.layout === 'horizontal',
            }"
            @click="onToggle('horizontal')"
          >
            <div class="setting-content">
              <div class="setting-header"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="theme-color">
        <a-divider>主题色</a-divider>
        <ul class="flex">
          <li
            v-for="(theme, k) in layoutStore.themeColorMap"
            :key="theme"
            :class="{
              'theme-color-item': true,
              [k]: true,
              'theme-color-active': layoutStore.themeStyle === k,
            }"
            :style="{ background: theme }"
            @click="onToggleTheme(k)"
          ></li>
        </ul>
      </div>
    </div>
  </a-drawer>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import { useLayoutStoreHook } from '@/store/modules/layout';
const layoutStore = useLayoutStoreHook();
const settingShow = ref(false);

const onToggle = (layout: 'vertical' | 'horizontal') => {
  layoutStore.toggleLayout(layout);
};
const onToggleTheme = (themeType: string) => {
  layoutStore.toggleThemeStyle(themeType);
};
const theme = computed({
  get() {
    return layoutStore.theme;
  },
  set(nvl) {
    layoutStore.toggleTheme(nvl as 'light' | 'dark');
  },
});
</script>
<style lang="less" scoped>
.fd-setting {
  padding: 0 10px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: var(--fine-admin-header-color);
  &:hover {
    background-color: var(--fine-admin-header-bg-hover);
  }
}
</style>
<style lang="less">
.setting-drawer {
  .navigation-bar-item {
    height: 100px;
    width: 120px;
    border-radius: 5px;
    box-shadow: 0 0 0px 1px #f0f0f0;
    border: 2px solid transparent;
    &.active {
      border-color: #001529;
    }
  }
  .setting-aside {
    width: 30px;
    background-color: #001529;
  }
  .setting-content {
    flex: 1;
  }
  .setting-header {
    height: 20px;
    border-bottom: 1px solid #f0f0f0;
  }
  .horizontal {
    .setting-header {
      background-color: #001529;
    }
  }
  .theme-color {
    .theme-color-item + .theme-color-item {
      margin-left: 5px;
    }
    .theme-color-item {
      width: 20px;
      height: 20px;
      border: 1px solid #000;
      border-radius: 2px;
      cursor: pointer;
      transition: all 0.3s;
      &.theme-color-active {
        transform: scale(1.2);
      }
    }
  }
}
</style>
