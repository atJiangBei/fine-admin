<template>
  <div class="margin-default">
    <div>
      <a-row :gutter="10" wrap>
        <a-col :span="8">
          <div class="padding-default default-content-bg">
            <div ref="pie1" style="height: 400px"></div>
          </div>
        </a-col>
        <a-col :span="8">
          <div class="padding-default default-content-bg">
            <div ref="pie2" style="height: 400px"></div>
          </div>
        </a-col>
        <a-col :span="8">
          <div class="padding-default default-content-bg">
            <div ref="category0" style="height: 400px"></div>
          </div>
        </a-col>
      </a-row>
      <div class="filler-row-default-x"></div>
      <a-row :gutter="10" wrap>
        <a-col :span="12">
          <div class="padding-default default-content-bg">
            <div ref="map" style="height: 540px"></div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="padding-default default-content-bg">
            <div ref="category1" style="height: 540px"></div>
          </div>
        </a-col>
      </a-row>
      <div class="filler-row-default-x"></div>
      <div class="padding-default default-content-bg">
        <div ref="category" style="height: 540px"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import {
  usePermissionStore,
  usePermissionStoreHook,
} from '@/store/modules/permission';
import * as Echarts from 'echarts';
import {
  directOption,
  pieOption1,
  pieOption2,
  categoryOption0,
  categoryOption1,
  categoryOption,
} from './useData';

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
    const category0 = ref();
    const category1 = ref();
    const category = ref();
    const maps: any = [];
    onMounted(() => {
      maps.push(initEcharts(pie1.value, pieOption1));
      maps.push(initEcharts(pie2.value, pieOption2));
      maps.push(initEcharts(map.value, directOption));
      maps.push(initEcharts(category0.value, categoryOption0));
      maps.push(initEcharts(category1.value, categoryOption1));
      maps.push(initEcharts(category.value, categoryOption));
      window.addEventListener('resize', resize);
    });
    const resize = () => {
      maps.forEach((fn: any) => fn());
    };
    onBeforeUnmount(() => {
      window.removeEventListener('resize', resize);
    });
    return { map, pie1, pie2, category0, category1, category };
  },
});
</script>
