<template>
  <div>
    <router-view />
  </div>
</template>
<script setup lang="ts">
//import { onMounted, ref } from 'vue';
// import theme from './style/theme';
// const themeContainer = ref();
// console.log(theme);

// const setThemeVar = (themeType: 'primary' = 'primary') => {
//   Object.entries(theme[themeType]).forEach(([k, v]) => {
//     themeContainer.value.style.setProperty(k, v);
//   });
// };
// onMounted(() => {
//   setThemeVar();
// });
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
