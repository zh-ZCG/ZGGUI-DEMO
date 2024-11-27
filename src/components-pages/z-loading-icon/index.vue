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
  path: '/components-pages/z-loading-icon/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="加载图标" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="loading-icon-container">
        <div class="loading-icon-item">
          <z-loading-icon></z-loading-icon>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="动画文字">
      <div class="loading-icon-container">
        <div class="loading-icon-item">
          <z-loading-icon textValue="加载中" textSize="18"></z-loading-icon>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="模式选择">
      <div class="loading-icon-container">
        <div class="loading-icon-item">
          <z-loading-icon mode="flower" textValue="花朵形"></z-loading-icon>
          <z-loading-icon mode="semicircle" textValue="半圆"></z-loading-icon>
          <z-loading-icon textValue="圆型"></z-loading-icon>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="排列方式">
      <div class="loading-icon-container">
        <div class="loading-icon-item">
          <z-loading-icon :vertical="true" textValue="加载中"></z-loading-icon>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="动画模式">
      <div class="loading-icon-container">
        <div class="loading-icon-item">
          <z-loading-icon timing-function="linear" duration="2500"></z-loading-icon>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="图标颜色">
      <div class="loading-icon-container">
        <div class="loading-icon-item">
          <z-loading-icon color="error"></z-loading-icon>
          <z-loading-icon mode="circle" inCircleColor="error"></z-loading-icon>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.loading-icon-container {
  position: relative;
  width: 100%;

  .loading-icon-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .loading-icon-item {
      margin-top: 30rpx;
    }

    z-loading-icon {
      margin-left: 10rpx;
    }
  }
}
</style>
