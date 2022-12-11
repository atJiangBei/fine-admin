<template>
  <div>
    <a-card title="防抖:debounce">
      <a-button @click="onDebounce">
        多次点击(间隔不超过300ms)只触发最后一次
      </a-button>
    </a-card>
    <div class="filler-row-default-x"></div>
    <a-card title="节流:throttle">
      <a-button @click="onThrottle">多次点击在1000ms内只触发一次</a-button>
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { debounce, throttle } from 'lodash-es';

const onDebounce = debounce(() => {
  message.info('This is a normal message');
}, 300);

const onThrottle = throttle(() => {
  message.info('This is a normal message');
}, 1000);
</script>
