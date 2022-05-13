<template>
  <el-input type="textarea" v-model="testValue"></el-input>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'system-role',
});
</script>
<script setup lang="ts">
import { ref } from 'vue';

const testValue = ref();
</script>
