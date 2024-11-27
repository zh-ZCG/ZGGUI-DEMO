<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/basic-pages/title/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="标题" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础用法">
      <div class="title-container">
        <div class="title-item">
          <z-title title="ZGGUI" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改标题尺寸">
      <div class="title-container">
        <div class="title-item">
          <z-title title="ZGGUI" size="small" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" size="large" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" size="xlarge" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" size="30" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置subTitle">
      <div class="title-container">
        <div class="title-item">
          <z-title title="ZGGUI" mode="dot" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" mode="vLine" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" mode="hLine" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" sub-title="重影文字" mode="subTitle" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改title颜色">
      <div class="title-container">
        <div class="title-item">
          <z-title title="ZGGUI" color="primary" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" color="error" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" color="warning" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" color="success" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" size="xlarge" color="info" mode="transparent" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改subTitle颜色">
      <div class="title-container">
        <div class="title-item">
          <z-title title="ZGGUI" mode="vLine" assist-color="primary" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" mode="vLine" assist-color="warning" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" mode="vLine" assist-color="error" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" mode="vLine" assist-color="success" />
        </div>
        <div class="title-item">
          <z-title title="ZGGUI" mode="vLine" assist-color="info" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.title-container {
  position: relative;
  width: 100%;

  .title-item {
    position: relative;
    width: 100%;

    & + .title-item {
      margin-top: 30rpx;
    }
  }
}
</style>
