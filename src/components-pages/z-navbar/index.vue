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
  path: '/components-pages/z-navbar/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 演示顶部导航栏的高度
const demoNavbarHeight = '45px'

// 演示顶部导航栏zIndex
const demoNavbarZIndex = 1

// 拦截导航栏返回上一页事件
const interceptBackEvent = () => {
  return new Promise<boolean>((resolve, reject) => {
    uni.showToast({
      title: '拦截返回上一页事件',
      icon: 'none',
    })
    reject()
  })
}
// 拦截导航返回首页事件
const interceptBackHomeEvent = () => {
  return new Promise<boolean>((resolve, reject) => {
    uni.showToast({
      title: '拦截返回首页事件',
      icon: 'none',
    })
    reject()
  })
}
</script>

<template>
  <CustomPage title="顶部导航栏" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar :height="demoNavbarHeight" :z-index="demoNavbarZIndex">
            ZGGUI
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏返回上一页按钮">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            back-icon=""
          >
            ZGGUI
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏返回首页按钮">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            home-icon=""
            back-icon="jiantouzuo"
          >
            ZGGUI
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="文字返回按钮">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            back-text="返回"
          >
            ZGGUI
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义返回内容">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar :height="demoNavbarHeight" :z-index="demoNavbarZIndex">
            <template #back>
              <div class="custom-back">
                <div class="icon">
                  <z-icon name="jiantouyou" />
                </div>
                <div class="text">刷新</div>
              </div>
            </template>
            ZGGUI
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置右边操作区域">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar :height="demoNavbarHeight" :z-index="demoNavbarZIndex">
            <template #right>
              <div class="right-operation">
                <z-icon name="jiantouyou" />
              </div>
            </template>
            ZGGUI
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置右边操作区域 - 固定宽度">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            right-operation-width="100"
          >
            <template #right>
              <div class="right-operation">
                <z-icon name="jiantouyou" />
              </div>
            </template>
            ZGGUI
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改导航栏颜色">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            bg-color="warning"
            text-color="success"
          >
            ZGGUI
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改导航栏透明度">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :opacity="0.3"
          >
            ZGGUI - 0.3
          </z-navbar>
        </div>
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :opacity="0.5"
          >
            ZGGUI - 0.5
          </z-navbar>
        </div>
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :opacity="0.8"
          >
            ZGGUI - 0.8
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="不显示底部阴影">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :bottom-shadow="false"
          >
            ZGGUI
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="拦截返回事件">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :before-back="interceptBackEvent"
            :before-home="interceptBackHomeEvent"
          >
            ZGGUI
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏返回区域">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            back-icon=""
            home-icon=""
          >
            <div class="custom-search-box" style="margin-right: 94px">
              <z-search-box
                :border="false"
                :search-button="false"
                text-align="center"
                placeholder-icon="search"
                placeholder="输入搜索内容"
              />
            </div>
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="释放右边小程序预留胶囊安全区域">
      <div class="navbar-container">
        <div class="navbar-item">
          <z-navbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :safe-area-inset-right="false"
          >
            <div class="custom-search-box" style="margin-left: 95px">
              <z-search-box
                :border="false"
                :search-button="false"
                text-align="center"
                placeholder-icon="text-hot"
                placeholder="输入搜索内容"
              />
            </div>
          </z-navbar>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.navbar-container {
  position: relative;
  width: 100%;

  .navbar-item {
    position: relative;
    width: 100%;

    & + .navbar-item {
      margin-top: 30rpx;
    }

    &.fill-height {
      height: 60rpx;
    }
  }

  /* 自定义返回 start */
  .custom-back {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 20rpx;
    .text {
      margin-left: 10rpx;
    }
  }
  /* 自定义返回 end */

  /* 右边操作区域 start */
  .right-operation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 30rpx;
    font-size: 46rpx;
  }
  /* 右边操作区域 end */

  /* 搜索框样式 start */
  .custom-search-box {
    position: relative;
    width: 100%;
    background-color: #eeeeee;
    border-radius: 30rpx 30rpx 0rpx 30rpx;
  }
  /* 搜索框样式 end */
}
</style>
