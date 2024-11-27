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
  path: '/components-pages/z-gap/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="间隔槽" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用 默认继承父颜色">
      <div class="gap-container">
        <div class="gap-item">
          <z-gap bgColor="primary" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置高度">
      <div class="gap-container">
        <div class="gap-item">
          <z-gap bgColor="success" height="30px" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置高度2">
      <div class="gap-container">
        <div class="gap-item">
          <z-gap bgColor="error" height="40px" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置margin">
      <div class="gap-container">
        <div class="gap-item">
          <z-gap bgColor="warning" marginTop="10rpx" marginBottom="10rpx" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.gap-container {
  position: relative;
  width: 100%;

  .gap-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .gap-item {
      margin-top: 30rpx;
    }

    z-gap {
      margin-left: 10rpx;
    }
  }
}
</style>
