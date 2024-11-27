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
  path: '/components-pages/z-rate/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 评分的值
const baseRateValue = ref(3)
const halfRateValue = ref(3.5)
const minMaxRateValue = ref(3)

const sizeRateValue = ref(0)

const customColorIconRateValue = ref(0)
</script>

<template>
  <CustomPage title="评分" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="rate-container">
        <div class="rate-item">
          <z-rate v-model="baseRateValue" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="评分展示，不允许操作">
      <div class="rate-container">
        <div class="rate-item">
          <z-rate v-model="baseRateValue" readonly />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="选择半星">
      <div class="rate-container">
        <div class="rate-item">
          <z-rate v-model="halfRateValue" allow-half size="xlarge" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置最小最大值">
      <div class="rate-container">
        <div class="rate-item">
          <z-rate v-model="minMaxRateValue" :min="2" :max="8" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <div class="rate-container">
        <div class="rate-item">
          <z-rate v-model="sizeRateValue" size="16" />
        </div>
        <div class="rate-item">
          <z-rate v-model="sizeRateValue" size="18" />
        </div>
        <div class="rate-item">
          <z-rate v-model="sizeRateValue" size="20" />
        </div>
        <div class="rate-item">
          <z-rate v-model="sizeRateValue" size="22" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="rate-container">
        <div class="rate-item">
          <z-rate
            v-model="customColorIconRateValue"
            inactive-color="cgray3"
            active-color="cw5"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改图标">
      <div class="rate-container">
        <div class="rate-item">
          <z-rate
            v-model="customColorIconRateValue"
            inactive-icon="hexin"
            active-icon="hexin"
            active-color="error"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.rate-container {
  position: relative;
  width: 100%;

  .rate-item {
    position: relative;
    width: 100%;

    & + .rate-item {
      margin-top: 30rpx;
    }
  }
}
</style>
