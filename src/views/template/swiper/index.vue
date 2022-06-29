<template>
  <div class="swiper-container">
    <swiper
      :modules="[Virtual]"
      :slides-per-view="3"
      :space-between="50"
      virtual
      style="height: 500px; width: 100%"
    >
      <swiper-slide
        v-for="(slideContent, index) in slides"
        :key="index"
        :virtualIndex="index"
      >
        <div
          :style="{
            height: '500px',
            'line-height': '500px',
            'text-align': 'center',
            'background-color': getColor(),
          }"
        >
          {{ slideContent }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
const colors = [
  '#5470C6',
  '#91CC75',
  '#FAC858',
  '#9A60B4',
  '#FC8452',
  '#3BA272',
  '#73C0DE',
  '#EE6666',
];
const getRandomColor = (colors: string[]) => {
  const length = colors.length;
  const RandomNumber = Math.floor(Math.random() * length);
  return colors[RandomNumber];
};
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    // Create array with 1000 slides
    const slides = Array.from({ length: 1000 }).map(
      (el, index) => `Slide ${index + 1}`
    );
    const getColor = () => getRandomColor(colors);
    return {
      slides,
      Virtual,
      getColor,
    };
  },
});
</script>
<style lang="less">
.swiper-container {
  height: calc(100vh - 122px);
  background-color: #fff;
  display: flex;
  align-items: center;
}
</style>
