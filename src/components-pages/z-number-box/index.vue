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
  path: '/components-pages/z-number-box/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 当前的步进值
const numberBoxValue = ref(0)
</script>

<template>
  <CustomPage title="步进器" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="number-box-container">
        <div class="number-box-item">
          当前步进器的值:
          <text class="cgray2">{{ numberBoxValue }}</text>
        </div>
        <div class="number-box-item">
          <z-number-box v-model="numberBoxValue" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁止输入框输入">
      <div class="number-box-container">
        <div class="number-box-item">
          <z-number-box input-disabled />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置步进值">
      <div class="number-box-container">
        <div class="number-box-item">
          <z-number-box :step="0.1" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置最小最大值">
      <div class="number-box-container">
        <div class="number-box-item">
          <z-number-box :min="10" :max="20" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置尺寸">
      <div class="number-box-container">
        <div class="number-box-item">
          <z-number-box size="small" />
        </div>
        <div class="number-box-item">
          <z-number-box size="large" />
        </div>
        <div class="number-box-item">
          <z-number-box width="260" height="70" font-size="40" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改步进器颜色">
      <div class="number-box-container">
        <div class="number-box-item">
          <z-number-box bg-color="cgray5" text-color="error" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.number-box-container {
  position: relative;
  width: 100%;

  .number-box-item {
    position: relative;
    width: 100%;

    & + .number-box-item {
      margin-top: 30rpx;
    }
  }
}
</style>
