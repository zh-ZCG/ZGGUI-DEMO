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
  path: '/components-pages/z-divider/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="分割线" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="divider-container">
        <div class="divider-item">
          <z-divider text="分割线" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置虚线">
      <div class="divider-container">
        <div class="divider-item">
          <z-divider text="分割线" :borderStyle="'dashed'" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置细线">
      <div class="divider-container">
        <div class="divider-item">
          <z-divider text="分割线" :hairline="true" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="以点代替文字">
      <div class="divider-container">
        <div class="divider-item">
          <z-divider text="分割线" :dot="true" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置文本位置">
      <div class="divider-container">
        <div class="divider-item">
          <z-divider text="靠左" textPosition="left" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置颜色">
      <div class="divider-container">
        <div class="divider-item">
          <z-divider text="分割线" textColor="primary" lineColor="success" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.divider-container {
  position: relative;
  width: 100%;

  .divider-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .divider-item {
      margin-top: 30rpx;
    }

    z-divider {
      margin-left: 10rpx;
    }
  }
}
</style>
