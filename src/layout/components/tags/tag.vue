<template>
  <span
    class="nav-tag"
    :class="{ 'nav-tag-active': actived }"
    @click="$emit('click')"
  >
    <span>
      <slot></slot>
    </span>
    <i
      class="nav-tag-closable"
      v-if="closable"
      @click.stop="$emit('close')"
    ></i>
  </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['close', 'click'],
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    actived: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
});
</script>
<style lang="less">
.nav-tag {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 26px;
  line-height: 26px;
  border-radius: 1px;
  border: 1px solid var(--fine-admin-tag-border-color);
  color: var(--fine-admin-tag-color);
  background: var(--fine-admin-tag-bg);
  padding: 0 8px;
  font-size: 12px;
  transition: all 0.3s;
  &:hover {
    color: var(--fine-admin-tag-selected-bg);
  }
  .nav-tag-closable {
    display: inline-block;
    height: 16px;
    width: 16px;
    line-height: 16px;
    border-radius: 50%;
    text-align: center;
    margin-left: 5px;
    &::after {
      display: inline-block;
      content: '+';
      transform: rotate(45deg);
    }
    &:hover {
      background-color: var(--fine-admin-tag-closable-hover-bg);
      color: var(--fine-admin-tag-closable-hover-color);
    }
  }
}
.nav-tag-active {
  background-color: var(--fine-admin-tag-selected-bg);
  border-color: var(---fine-admin-tag-selected-bg);
  color: var(--fine-admin-tag-selected-color);
  &:hover {
    color: var(--fine-admin-tag-selected-color);
  }
  .nav-tag-closable {
    &:hover {
      background-color: var(--fine-admin-selected-tag-closable-hover-bg);
      color: var(--fine-admin-selected-tag-closable-hover-color);
    }
  }
}
</style>
