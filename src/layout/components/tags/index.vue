<script setup lang="ts">
import { onMounted, ref, nextTick, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import { useTagsStoreHook } from '@/store/modules/tags';
import Tag from './tag.vue';

const staticTagList = useTagsStoreHook().staticTagList;
const tagList = useTagsStoreHook().tagList;

const allTags = computed(() => {
  return [...staticTagList, ...tagList];
});
const toHome = (path: string) => {
  router.push(path);
};
const onClose = (tag: any, index: number, isCurrent: boolean) => {
  let nextPath = '';
  if (isCurrent) {
    if (index === 0) {
      nextPath = staticTagList[staticTagList.length - 1].path;
    } else {
      nextPath = tagList[index - 1].path;
    }
  }
  useTagsStoreHook().deleteTag(index, tag, nextPath);
};
const route = useRoute();
const tagContent = ref();

const tagMinX = ref(0);
const tagMaxX = ref(0);
const tagTransformX = ref(0);
const setTagMinX = () => {
  if (!tagContent.value) return;
  tagMinX.value = tagContent.value.offsetWidth - tagContent.value.scrollWidth;
};
onMounted(() => {
  setTagMinX();
});
watch(
  () => [tagList, route.path],
  () => {
    nextTick(() => {
      setTagMinX();
      setTransform();
    });
  }
);

const toPrev = () => {
  const currentIndex = getCurrentIndex();

  if (currentIndex <= 0) {
    tagTransformX.value = 0;
    return;
  }

  const currentTagNode = getCurrentTagNode(currentIndex - 1);
  let targetDistance = tagTransformX.value + currentTagNode.offsetWidth;
  if (targetDistance > 0) {
    targetDistance = 0;
  }
  tagTransformX.value = targetDistance;
};
const toNext = () => {
  const currentIndex = getCurrentIndex();

  if (currentIndex >= allTags.value.length - 1) {
    tagTransformX.value = tagMinX.value;
    return;
  }
  const currentTagNode = getCurrentTagNode(currentIndex + 1);
  let targetDistance = tagTransformX.value - currentTagNode.offsetWidth;
  if (targetDistance < tagMinX.value) {
    targetDistance = tagMinX.value;
  }
  tagTransformX.value = targetDistance;
};
function setTransform() {
  if (tagMinX.value >= 0) {
    tagTransformX.value = 0;
    return;
  }
  const currentIndex = getCurrentIndex();
  if (currentIndex < 0) return;
  const currentTagNode = getCurrentTagNode(currentIndex);
  const positionX = getInCenterPositionX(currentTagNode);

  tagTransformX.value = positionX;
}

function getCurrentIndex() {
  const currentPath = route.path;
  const currentIndex = allTags.value.findIndex(
    (tag) => tag.path === currentPath
  );
  return currentIndex;
}

function getCurrentTagNode(index: number): HTMLSpanElement {
  const children = [...tagContent.value.children];
  return children[index];
}
function getInCenterPositionX(currentTagNode: HTMLSpanElement): number {
  const { offsetLeft, offsetWidth } = currentTagNode;
  const contentWidth = tagContent.value.offsetWidth;
  let positionX = 0;

  positionX = offsetLeft + offsetWidth / 2 - contentWidth / 2;
  console.log('positionX', positionX);
  if (-positionX > 0) {
    return 0;
  }
  const maxDistance = Math.abs(tagMinX.value);
  if (Math.abs(positionX) > maxDistance) {
    return -maxDistance;
  }
  return -positionX;
}
</script>
<template>
  <div class="nav-tags-container">
    <span class="nav-tag-to-left" @click="toPrev">
      <el-icon><arrow-left /></el-icon>
    </span>
    <div class="nav-tags-content">
      <div
        ref="tagContent"
        :style="{
          transform: `translateX(${tagTransformX}px)`,
          transition: 'transform .25s',
        }"
      >
        <tag
          v-for="tag in staticTagList"
          :key="tag.name"
          :actived="route.path === tag.path"
          @click="toHome(tag.path)"
        >
          {{ $t(tag.meta.title) }}
        </tag>
        <tag
          closable
          :key="tag.name"
          :actived="route.path === tag.path"
          v-for="(tag, index) in tagList"
          @click="toHome(tag.path)"
          @close="onClose(tag, index, route.path === tag.path)"
        >
          {{ $t(tag.meta.title) }}
        </tag>
      </div>
    </div>
    <span class="nav-tag-to-right" @click="toNext">
      <el-icon><arrow-right /></el-icon>
    </span>
  </div>
</template>
<style lang="less">
.nav-tags-container {
  position: relative;
  padding: 0 32px;
  text-align: left;
  background-color: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  .nav-tag {
    margin-left: 5px;
  }
  .nav-tag:first-child {
    margin-left: 0;
  }
  .nav-tags-content {
    white-space: nowrap;
    padding: 3px 5px;
    overflow: hidden;
    > div {
      position: relative;
    }
  }
  .nav-tag-to-left,
  .nav-tag-to-right {
    position: absolute;
    top: 0;
    height: 100%;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    background-color: #fff;
    &:hover {
      background-color: #f2f2f2;
    }
  }
  .nav-tag-to-left {
    left: 2px;
  }
  .nav-tag-to-right {
    right: 2px;
  }
}
</style>
