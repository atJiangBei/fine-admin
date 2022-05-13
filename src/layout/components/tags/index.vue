<script setup lang="ts">
import { onMounted, ref, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import { useTagsStoreHook } from '@/store/modules/tags';
import Tag from './tag.vue';

const staticTagList = useTagsStoreHook().staticTagList;
const tagList = useTagsStoreHook().tagList;
const toHome = (path: string) => {
  router.push(path);
};
const onClose = (tag: any) => {
  useTagsStoreHook().deleteTag(tag);
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
  console.log(tagMaxX.value);
});
watch(tagList, () => {
  nextTick(() => {
    setTagMinX();
    console.log(tagMinX.value);
  });
});
const toPrev = () => {
  tagTransformX.value += 100;
  if (tagTransformX.value > tagMaxX.value) {
    tagTransformX.value = tagMaxX.value;
  }

  console.log(tagContent.value.offsetWidth, tagContent.value.scrollWidth);
};
const toNext = () => {
  tagTransformX.value -= 100;
  if (tagTransformX.value < tagMinX.value) {
    tagTransformX.value = tagMinX.value;
  }
};
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
          {{ tag.meta.title }}
        </tag>
        <tag
          closable
          :key="tag.name"
          :actived="route.path === tag.path"
          v-for="tag in tagList"
          @click="toHome(tag.path)"
          @close="onClose(tag)"
        >
          {{ tag.meta.title }}
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
