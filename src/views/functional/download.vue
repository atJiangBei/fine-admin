<template>
  <div class="default-content-bg">
    <a-card title="下载">
      <div class="fd-children-spacing-5">
        <a-button type="primary">本地下载</a-button>
        <a-button type="primary" @click="down">下载在线图片</a-button>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

const down = () => {
  axios
    .get('https://www.surely.cool/surely-vue-logo.png', {
      responseType: 'blob',
    })
    .then(({ data }) => {
      console.log(data);
      const link = document.createElement('a');
      link.setAttribute('download', '在线图片');
      link.href = window.URL.createObjectURL(
        new Blob([data], { type: data.type })
      );
      link.click();
    });
};
</script>
