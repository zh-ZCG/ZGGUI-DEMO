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
  path: '/components-pages/z-notice-bar/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 通知内容
const noticeData: string[] = [
  'ZGGUI 组件库正式发布，为开发者提供全面的跨端解决方案。',
  'ZGGUI 致力于打造灵活丰富的组件，满足多样化的应用场景。',
  '组件库包含多种高品质组件，助力高效构建功能强大的应用。',
  'ZGGUI 专注于组件开发，为项目提供即插即用的高效支持。',
]
</script>

<template>
  <CustomPage title="通知栏" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="notice-bar-container">
        <div class="notice-bar-item">
          <z-notice-bar :data="noticeData" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="横向通知 - 不连续">
      <div class="notice-bar-container">
        <div class="notice-bar-item">
          <z-notice-bar :data="noticeData" :loop="false" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="垂直通知">
      <div class="notice-bar-container">
        <div class="notice-bar-item">
          <z-notice-bar :data="noticeData" direction="vertical" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改通知速度">
      <div class="notice-bar-container">
        <div class="notice-bar-item">
          <z-notice-bar :data="noticeData" :speed="30" />
        </div>
        <div class="notice-bar-item">
          <z-notice-bar :data="noticeData" direction="vertical" :speed="9000" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置左右图标">
      <div class="notice-bar-container">
        <div class="notice-bar-item">
          <z-notice-bar :data="noticeData" left-icon="hexin" right-icon="wo" />
        </div>
        <div class="notice-bar-item">
          <z-notice-bar
            :data="noticeData"
            direction="vertical"
            left-icon="jiantouzuo"
            right-icon="jiantouyou"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置通知尺寸">
      <div class="notice-bar-container">
        <div class="notice-bar-item">
          <z-notice-bar
            :data="noticeData"
            left-icon="jiantouzuo"
            right-icon="jiantouyou"
            font-size="36"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义样式">
      <div class="notice-bar-container">
        <div class="notice-bar-item">
          <z-notice-bar
            :data="noticeData"
            left-icon="jiantouzuo"
            right-icon="jiantouyou"
            bg-color="success"
            left-icon-color="error"
            right-icon-color="warning"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.notice-bar-container {
  position: relative;
  width: 100%;

  .notice-bar-item {
    position: relative;
    width: 100%;

    & + .notice-bar-item {
      margin-top: 30rpx;
    }
  }
}
</style>
