<script setup lang="ts">
import {
  ref,
  PropType,
  nextTick,
  computed,
  CSSProperties,
  getCurrentInstance,
  defineProps,
} from 'vue';

import router from '@/router';
import { childrenType } from '../../types';

//const instance = getCurrentInstance().appContext.app.config.globalProperties;
const props = defineProps({
  item: {
    type: Object,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: '',
  },
});

const getNoDropdownStyle = computed((): CSSProperties => {
  return {
    display: 'flex',
    alignItems: 'center',
  };
});

const getDivStyle = computed((): CSSProperties => {
  return {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  };
});

const onlyOneChild: childrenType = ref(null);

function hasOneShowingChild(
  children: childrenType[] = [],
  parent: childrenType
) {
  const showingChildren = children.filter((item: any) => {
    onlyOneChild.value = item;
    return true;
  });
  if (showingChildren.length === 1) {
    return true;
  }

  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, noShowingChildren: true };
    return true;
  }
  return false;
}

function resolvePath(routePath: string) {
  const httpReg = /^http(s?):\/\//;
  if (httpReg.test(routePath)) {
    return props.basePath + '/' + routePath;
  } else {
    let newPath = '';
    if (!props.basePath) {
      //console.log(1, routePath, props.basePath);
      newPath = routePath;
    } else if (routePath.indexOf(props.basePath) === 0) {
      //console.log(2, routePath, props.basePath);
      newPath = routePath;
    } else {
      //console.log(3, routePath, props.basePath);
      newPath = props.basePath + routePath;
    }
    //console.log(newPath);
    return newPath;
    //return props.basePath + routePath;
  }
}
</script>

<template>
  <template
    v-if="
      hasOneShowingChild(props.item.children, props.item) &&
      (!onlyOneChild.children || onlyOneChild.noShowingChildren)
    "
  >
    <el-menu-item
      :index="resolvePath(onlyOneChild.path)"
      :style="getNoDropdownStyle"
    >
      <template #title>
        <div :style="getDivStyle">
          <span>{{ onlyOneChild.meta && $t(onlyOneChild.meta.title) }}</span>
        </div>
      </template>
    </el-menu-item>
  </template>

  <el-sub-menu
    v-else
    ref="subMenu"
    :index="resolvePath(props.item.path)"
    popper-append-to-body
  >
    <template #title>
      <span>{{ props.item.meta && $t(props.item.meta.title) }}</span>
    </template>
    <sidebar-item
      v-for="child in props.item.children"
      :key="child.path"
      :is-nest="true"
      :item="child"
      :base-path="resolvePath(child.path)"
      class="nest-menu"
    />
  </el-sub-menu>
</template>
