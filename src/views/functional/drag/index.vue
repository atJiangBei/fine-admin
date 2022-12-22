<template>
  <div style="height: calc(100vh - 100px); background-color: #fff">
    <div class="starry-sky" ref="container">
      <div class="thunder-fighter" ref="fighter" :style="fighterPosition"></div>
      <span class="score">{{ score }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { createTouch, Option } from 'fine-touch';
import { computed } from '@vue/reactivity';
import { Bullet, createRandomLeft, Bomb, bombs, score } from './util';

const container = ref();
const containerWidth = ref(0);
const containerHeigt = ref(0);
const setContainerSize = () => {
  const { offsetHeight, offsetWidth } = container.value;
  containerWidth.value = offsetWidth;
  containerHeigt.value = offsetHeight;
  createRandomLeft(offsetWidth);
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
  container.value && new Bomb(container.value);
  fighter.value && new Bullet(fighter.value);
  const fireABullet = () => {
    fighter.value && new Bullet(fighter.value);
    container.value && bombs.push(new Bomb(container.value));
    setTimeout(fireABullet, 200);
  };
  fireABullet();
};
onMounted(init);
</script>
<style lang="less" scoped>
.starry-sky {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
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
.score {
  padding: 2px 8px;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 50%;
  font-size: 18px;
  color: #000000;
}
</style>
<style>
.fighter {
  position: fixed;
  width: 32px;
  height: 32px;
  background: url(./imgs/bullet.png) no-repeat center;
  background-size: 100% 100%;
}
.bomb {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 0;
  background: url(./imgs/bomb.png) no-repeat center;
  background-size: 100% 100%;
}
.blast {
  background: url(./imgs/blast.png) no-repeat center;
  background-size: 100% 100%;
}
</style>
