<script setup lang="ts"></script>

<template>
  <div class="default-bg">
    <a-result
      status="404"
      title="404"
      sub-title="Sorry, you are not authorized to access this page."
    >
      <template #extra>
        <a-button type="primary">Back Home</a-button>
      </template>
    </a-result>
  </div>
</template>

<style lang="less"></style>
