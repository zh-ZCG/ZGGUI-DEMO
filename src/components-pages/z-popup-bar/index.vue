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
  path: '/components-pages/z-popup-bar/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="工具栏" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用(组件默认背景是白色)">
      <div class="popup-bar-container">
        <div class="popup-bar-item">
          <z-popup-bar show bgColor="#eeeeee" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改内容">
      <div class="popup-bar-container">
        <div class="popup-bar-item">
          <z-popup-bar
            show
            :leftValue="'左侧内容'"
            :centerValue="'中间内容'"
            :rightValue="'右侧内容'"
            bgColor="#eeeeee"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="popup-bar-container">
        <div class="popup-bar-item">
          <z-popup-bar
            show
            leftColor="error"
            bgColor="#eeeeee"
            rightColor="success"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改背景">
      <div class="popup-bar-container">
        <div class="popup-bar-item">
          <z-popup-bar
            show
            :leftValue="'左侧内容'"
            :centerValue="'中间内容'"
            :rightValue="'右侧内容'"
            bgColor="warning"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="展示下边框">
      <div class="popup-bar-container">
        <div class="popup-bar-item">
          <z-popup-bar
            show
            :leftValue="'左侧内容'"
            :centerValue="'中间内容'"
            :rightValue="'右侧内容'"
            borderBottom
            bgColor="#eeeeee"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置左上右上圆角弧度">
      <div class="popup-bar-container">
        <div class="popup-bar-item">
          <z-popup-bar
            show
            :leftValue="'左侧内容'"
            :centerValue="'中间内容'"
            :rightValue="'右侧内容'"
            borderBottom
            bgColor="warning"
            borderRadius="15"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.popup-bar-container {
  position: relative;
  width: 100%;

  .popup-bar-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .popup-bar-item {
      margin-top: 30rpx;
    }

    z-popup-bar {
      margin-left: 10rpx;
    }
  }
}
</style>
