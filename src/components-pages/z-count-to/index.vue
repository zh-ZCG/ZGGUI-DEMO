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
  path: '/components-pages/z-count-to/index',
})
const { isDemoH5Page } = useDemoH5Page()
const startValue = ref('')
const endValue = ref('')
// 随机生成0 - 1000000的数值,并且带两位小数
const randomNumber = () => {
  return (Math.random() * 1000000).toFixed(2)
}
endValue.value = randomNumber()
setInterval(() => {
  startValue.value = endValue.value
  endValue.value = randomNumber()
}, 5000)
</script>

<template>
  <CustomPage title="数字跳转" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="count-to-container df aic">
        <div class="count-to-item">
          <z-count-to start="1000" end="8000" />
        </div>
      </div>
    </DemoContainer>

    <DemoContainer title="修改动画时间">
      <div class="count-to-container df aic">
        <div class="count-to-item">
          <z-count-to start="5000" duration="5000" end="50" />
        </div>
      </div>
    </DemoContainer>

    <DemoContainer title="带小数显示">
      <div class="count-to-container">
        <div class="count-to-item">
          <z-count-to start="10" end="9500.75" :decimals="2" />
        </div>
      </div>
    </DemoContainer>

    <DemoContainer title="千分位分割">
      <div class="count-to-container">
        <div class="count-to-item">
          <z-count-to
            start="200"
            end="1523435.50"
            :decimals="2"
            thousandsSeparator=","
          />
        </div>
      </div>
    </DemoContainer>

    <DemoContainer title="修改样式">
      <div class="count-to-container">
        <div class="count-to-item">
          <z-count-to
            start="100"
            end="1654321.00"
            :decimals="2"
            thousandsSeparator=","
            textColor="primary"
            font-size="46"
          />
        </div>
      </div>
    </DemoContainer>

    <DemoContainer title="动态数据演示">
      <div class="count-to-container">
        <div class="count-to-item">
          <z-count-to
            :start="startValue"
            :end="endValue"
            :decimals="2"
            thousandsSeparator=","
            textColor="primary"
            font-size="46"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.count-to-container {
  position: relative;
  width: 100%;

  .count-to-item {
    position: relative;
    width: 100%;

    & + .count-to-item {
      margin-top: 30rpx;
    }

    &.no-mt {
      margin-top: 0;
    }
  }
}
</style>
