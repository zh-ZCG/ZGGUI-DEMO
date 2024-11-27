<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-slider/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 滑动条的值
const rangeSliderValue1 = ref([0, 0])
const rangeSliderValue2 = ref([0, 0])
const sliderValue1 = ref(0)
const sliderValue2 = ref(20)
const sliderValue3 = ref(0)
const sliderValue4 = ref(0)
const sliderValue5 = ref(0)
</script>

<template>
  <CustomPage title="滑动条" padding="30rpx 40rpx" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="slider-container">
        <div class="slider-item">
          滑动条的值:
          <text class="cgray3">{{ sliderValue1 }}</text>
        </div>
        <div class="slider-item">
          <z-slider v-model="sliderValue1" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="选择范围值">
      <div class="slider-container">
        <div class="slider-item">
          滑动条范围值:
          <text class="cgray3">
            [{{ rangeSliderValue1[0] }},{{ rangeSliderValue1[1] }}]
          </text>
        </div>
        <div class="slider-item">
          <z-slider v-model="rangeSliderValue1" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置滑动条步进值">
      <div class="slider-container">
        <div class="slider-item">
          滑动条的值:
          <text class="cgray3">{{ sliderValue2 }}</text>
        </div>
        <div class="slider-item">
          <z-slider v-model="sliderValue2" :step="5" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置最小、最大值">
      <div class="slider-container">
        <div class="slider-item">
          滑动条的值:
          <text class="cgray3">{{ sliderValue3 }}</text>
        </div>
        <div class="slider-item">
          <z-slider v-model="sliderValue3" :min="10" :max="50" />
        </div>
        <div class="slider-item">
          滑动条范围值:
          <text class="cgray3">
            [{{ rangeSliderValue2[0] }},{{ rangeSliderValue2[1] }}]
          </text>
        </div>
        <div class="slider-item">
          <z-slider v-model="rangeSliderValue2" :min="10" :max="50" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <div class="slider-container">
        <div class="slider-item">
          <z-slider v-model="sliderValue4" size="small" />
        </div>
        <div class="slider-item">
          <z-slider v-model="sliderValue4" size="large" />
        </div>
        <div class="slider-item">
          <z-slider v-model="sliderValue4" slider-height="40" slider-bar-size="50" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色样式">
      <div class="slider-container">
        <div class="slider-item">
          <z-slider
            v-model="sliderValue5"
            inactive-color="error"
            active-color="success"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.slider-container {
  position: relative;
  width: 100%;

  .slider-item {
    position: relative;
    width: 100%;

    & + .slider-item {
      margin-top: 30rpx;
    }
  }
}
</style>
