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
  path: '/components-pages/z-count-scroll/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 当前的值
const currentValue = ref('')
// 随机生成0 - 1000000的数值,并且带两位小数
const randomNumber = () => {
  return (Math.random() * 1000000).toFixed(2)
}
currentValue.value = randomNumber()
setInterval(() => {
  currentValue.value = randomNumber()
}, 5000)
</script>

<template>
  <CustomPage title="数字滚动" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="count-scroll-container">
        <div class="count-scroll-item">
          <z-count-scroll value="4829" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="带小数和千分位">
      <div class="count-scroll-container">
        <div class="count-scroll-item">
          <z-count-scroll value="567982345.12" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改样式">
      <div class="count-scroll-container">
        <div class="count-scroll-item">
          <z-count-scroll value="892134675.76" color="primary" font-size="30" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="动态修改数值">
      <div class="count-scroll-container">
        <div class="count-scroll-item">
          <z-count-scroll :value="currentValue" color="primary" font-size="30" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.count-scroll-container {
  position: relative;
  width: 100%;

  .count-scroll-item {
    position: relative;
    width: 100%;

    & + .count-scroll-item {
      margin-top: 30rpx;
    }
  }
}
</style>
