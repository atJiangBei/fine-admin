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
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  padding: 0 8px;
  font-size: 12px;
  transition: all 0.3s;
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
      background-color: #b4bccc;
      color: #fff;
    }
  }
}
.nav-tag-active {
  background-color: var(--admin-basic-color);
  border-color: var(--admin-basic-color);
  color: #fff;
}
</style>
