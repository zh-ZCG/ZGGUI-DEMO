<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-back-top/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 创建响应式数据 scrollTop
const scrollTop = ref(0)

// onPageScroll 方法来更新 scrollTop 的值
onPageScroll(e => {
  scrollTop.value = e.scrollTop
})

const shows = [ref(false), ref(false), ref(false), ref(false)]

function showBackTop(index: number) {
  shows.forEach((show, i) => {
    show.value = i === index
  })
}
</script>

<template>
  <CustomPage title="返回顶部" :is-h5-demo-page="isDemoH5Page">
    <div style="width: 100vw; height: 100vh">
      <text class="fs2 fwb">往下滑|点击按钮显示返回顶部组件</text>
    </div>
    <DemoContainer title="基础使用">
      <div class="back-top-container">
        <div class="back-top-item">
          <z-button
            text="点击显示组件"
            type="primary"
            size="small"
            @click="showBackTop(0)"
          ></z-button>
          <z-back-top v-if="shows[0].value" :scroll-top="scrollTop" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改形状">
      <div class="back-top-container">
        <div class="back-top-item">
          <z-button
            text="点击显示组件"
            type="primary"
            size="small"
            @click="showBackTop(1)"
          ></z-button>
          <z-back-top v-if="shows[1].value" :scroll-top="scrollTop" mode="square" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改提示">
      <div class="back-top-container">
        <div class="back-top-item">
          <z-button
            text="点击显示组件"
            type="primary"
            size="small"
            @click="showBackTop(2)"
          ></z-button>
          <z-back-top v-if="shows[2].value" :scroll-top="scrollTop" text="提示" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改回滚时间">
      <div class="back-top-container">
        <div class="back-top-item">
          <z-button
            text="点击显示组件"
            type="primary"
            size="small"
            @click="showBackTop(3)"
          ></z-button>
          <z-back-top v-if="shows[3].value" :scroll-top="scrollTop" duration="1000" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.back-top-container {
  position: relative;
  width: 100%;

  .back-top-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .back-top-item {
      margin-top: 30rpx;
    }

    z-back-top {
      margin-left: 10rpx;
    }
  }
}
</style>
