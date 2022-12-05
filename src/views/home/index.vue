<template>
  <div>
    <a-row>
      <a-col :span="12">
        <div ref="pie1" style="height: 400px"></div>
      </a-col>
      <a-col :span="12">
        <div ref="pie2" style="height: 400px"></div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <div ref="map" style="height: 540px"></div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import {
  usePermissionStore,
  usePermissionStoreHook,
} from '@/store/modules/permission';
import * as Echarts from 'echarts';
import { directOption, pieOption1, pieOption2 } from './useData';

const initEcharts = (dom: HTMLElement, option: any) => {
  const echartsMap = Echarts.init(dom);
  echartsMap.setOption(option);
  return () => echartsMap.resize();
};
export default defineComponent({
  setup() {
    const map = ref();
    const pie1 = ref();
    const pie2 = ref();
    const maps: any = [];
    onMounted(() => {
      maps.push(initEcharts(pie1.value, pieOption1));
      maps.push(initEcharts(pie2.value, pieOption2));
      maps.push(initEcharts(map.value, directOption));
      window.addEventListener('resize', resize);
    });
    const resize = () => {
      maps.forEach((fn: any) => fn());
    };
    onBeforeUnmount(() => {
      window.removeEventListener('resize', resize);
    });
    return { map, pie1, pie2 };
  },
});
</script>
