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
  path: '/components-pages/z-line/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="线条" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="line-container">
        <div class="line-item">
          <z-line color="error" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置颜色">
      <div class="line-container">
        <div class="line-item">
          <z-line color="primary" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置方向">
      <div class="line-container">
        <div class="line-item">
          <z-line direction="col" width="50px" color="success" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置长度">
      <div class="line-container">
        <div class="line-item">
          <z-line width="50%" color="primary" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置线条虚线">
      <div class="line-container">
        <div class="line-item">
          <z-line borderStyle="dashed" color="primary" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置线条圆点">
      <div class="line-container">
        <div class="line-item">
          <z-line borderStyle="dotted" color="primary" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.line-container {
  position: relative;
  width: 100%;

  .line-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .line-item {
      margin-top: 30rpx;
    }

    z-line {
      margin-left: 10rpx;
    }
  }
}
</style>
