<template>
  <div style="height: calc(100vh - 100px); background-color: #fff">
    <div class="starry-sky" ref="container">
      <div class="thunder-fighter" ref="fighter" :style="fighterPosition"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { createTouch, Option } from 'fine-touch';
import { computed } from '@vue/reactivity';

const container = ref();
const containerWidth = ref(0);
const containerHeigt = ref(0);
const setContainerSize = () => {
  const { offsetHeight, offsetWidth } = container.value;
  containerWidth.value = offsetWidth;
  containerHeigt.value = offsetHeight;
};

const fighter = ref();
const fighterSize = {
  width: 48,
  height: 48,
};
const fighterX = ref(10);
const fighterY = ref(0);
const fighterMinX = computed(() => {
  return -containerWidth.value / 2;
});
const fighterMaxX = computed(() => {
  return containerWidth.value / 2;
});
const fighterMinY = computed(() => {
  return -(containerHeigt.value - fighterSize.height);
});
const fighterMaxY = computed(() => {
  return 0;
});
const fighterPosition = computed(() => {
  return {
    transform: `translate3d(${fighterX.value}px,${fighterY.value}px,0)`,
  };
});
const init = () => {
  setContainerSize();
  createTouch({
    root: fighter.value,
    moveCallback({ stepX, stepY }) {
      fighterX.value += stepX;
      fighterX.value = Math.max(fighterMinX.value, fighterX.value);
      fighterX.value = Math.min(fighterMaxX.value, fighterX.value);
      fighterY.value += stepY;
      fighterY.value = Math.max(fighterMinY.value, fighterY.value);
      fighterY.value = Math.min(fighterMaxY.value, fighterY.value);
    },
  });
};
onMounted(init);
</script>
<style lang="less" scoped>
.starry-sky {
  height: 100%;
  width: 100%;
  position: relative;
}
.thunder-fighter {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  height: 48px;
  width: 48px;
  background: url(./imgs/fighter.png) no-repeat center;
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
