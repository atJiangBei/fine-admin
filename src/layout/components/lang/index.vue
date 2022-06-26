<script setup lang="ts">
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

watch(
  () => locale.value,
  () => {
    //console.log("动态改变title")
  }
);

function translation(lang: 'zh' | 'en') {
  locale.value = lang;
}
</script>

<template>
  <el-dropdown popper-class="header-lang-translation" trigger="click">
    <div class="toggle-lang">
      <svg-icon title="语言切换" icon="lang" className="toggle-icon" />
    </div>
    <template #dropdown>
      <el-dropdown-menu class="translation">
        <el-dropdown-item
          @click="translation('zh')"
          :class="{ active: locale === 'zh' }"
        >
          简体中文
          <el-icon v-if="locale === 'zh'">
            <check />
          </el-icon>
        </el-dropdown-item>
        <el-dropdown-item
          @click="translation('en')"
          :class="{ active: locale === 'en' }"
        >
          English
          <el-icon v-if="locale === 'en'">
            <check />
          </el-icon>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style lang="less">
.header-lang-translation {
  // .el-dropdown-menu__item {
  //   &.active {
  //     background-color: rgba(49, 194, 155, 0.3);
  //     color: var(--admin-basic-color);
  //   }

  //   &:hover {
  //     color: var(--admin-basic-color);
  //   }
  // }
  .el-icon {
    margin-left: 5px;
    height: 18px;
    width: 18px;
  }
}
.toggle-lang {
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .svg-icon.toggle-icon {
    width: 24px;
    height: 24px;
    fill: var(--admin-basic-color);
  }
}
</style>
