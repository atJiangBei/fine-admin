<script setup lang="ts">
import {
  ref,
  PropType,
  computed,
  CSSProperties,
  getCurrentInstance,
  defineProps,
  h,
  defineComponent,
  Component,
} from 'vue';

import router from '@/router';
import { childrenType } from '../../types';
import { useLayoutStoreHook } from '@/store/modules/layout';

const layoutStore = useLayoutStoreHook();

const showMenuLabel = computed(() => {
  return layoutStore.layout !== 'inline' && layoutStore.opened;
});
//const instance = getCurrentInstance().appContext.app.config.globalProperties;
const props = defineProps({
  item: {
    type: Object as PropType<childrenType>,
    required: true,
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

const onlyOneChild = ref<childrenType>();

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
      newPath = routePath;
    } else if (routePath.indexOf(props.basePath) === 0) {
      newPath = routePath;
    } else {
      newPath = props.basePath + routePath;
    }
    return newPath;
  }
}
</script>

<template>
  <a-menu-item
    :key="resolvePath(onlyOneChild!.path)"
    :style="getNoDropdownStyle"
    v-if="
      hasOneShowingChild(props.item.children, props.item) &&
      (!onlyOneChild!.children || onlyOneChild!.noShowingChildren)
    "
  >
    <template
      v-if="onlyOneChild && onlyOneChild.meta && onlyOneChild.meta.icon"
    >
      <svg-icon :icon="onlyOneChild!.meta!.icon" class="anticon" />
    </template>

    <span>
      {{ onlyOneChild!.meta && $t(onlyOneChild!.meta.title || 'xxx') }}
    </span>
  </a-menu-item>

  <a-sub-menu
    v-else
    ref="subMenu"
    :key="resolvePath(props.item.path)"
    popper-append-to-body
  >
    <template #icon v-if="props.item.meta && props.item.meta.icon">
      <svg-icon :icon="props.item.meta!.icon!" class="avticon" />
    </template>
    <template #title>
      <span>
        {{ props.item.meta && $t(props.item.meta.title || 'xxx') }}
      </span>
    </template>
    <sidebar-item
      v-for="child in props.item.children"
      :key="child.path"
      :is-nest="true"
      :item="child"
      :base-path="resolvePath(child.path)"
      class="nest-menu"
    />
  </a-sub-menu>
</template>
