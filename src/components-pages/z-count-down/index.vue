<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { zCountDownInstance } from 'zgg-ui/components/z-count-down/index'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-count-down/index',
})
const { isDemoH5Page } = useDemoH5Page()
const countDownRef = ref<zCountDownInstance>()

// 开始倒计时
const startCountDown = () => {
  countDownRef.value?.start()
}

// 停止倒计时
const stopCountDown = () => {
  countDownRef.value?.stop()
}

// 重置倒计时
const resetCountDown = () => {
  countDownRef.value?.reset()
}
</script>

<template>
  <CustomPage title="倒计时" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="count-down-container">
        <div class="count-down-item">
          <z-count-down :time="300" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="手动控制">
      <div class="count-down-container">
        <div class="count-down-item df jcc aic">
          <z-count-down ref="countDownRef" :time="300" :auto-start="false" />
        </div>
        <div class="count-down-item df jcc aic">
          <div class="operation-btn">
            <z-button size="large" type="primary" @click="startCountDown">
              开始
            </z-button>
          </div>
          <div class="operation-btn">
            <z-button type="warning" size="large" @click="stopCountDown">
              停止
            </z-button>
          </div>
          <div class="operation-btn">
            <z-button type="error" size="large" @click="resetCountDown">
              重置
            </z-button>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示天、时、分、秒">
      <div class="count-down-container">
        <div class="count-down-item">
          <z-count-down :time="86410" show-day />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示天、时、分、秒(不自动隐藏天)">
      <div class="count-down-container">
        <div class="count-down-item">
          <z-count-down :time="86410" show-day :auto-hide-day="false" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示分、秒">
      <div class="count-down-container">
        <div class="count-down-item">
          <z-count-down :time="300" :show-hour="false" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="中文分割符">
      <div class="count-down-container">
        <div class="count-down-item">
          <z-count-down :time="86410" show-day separator-mode="cn" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示边框">
      <div class="count-down-container">
        <div class="count-down-item">
          <z-count-down :time="300" border />
        </div>
        <div class="count-down-item">
          <z-count-down :time="300" border separator-mode="cn" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <div class="count-down-container">
        <div class="count-down-item">
          <z-count-down :time="300" size="small" />
        </div>
        <div class="count-down-item">
          <z-count-down :time="300" />
        </div>
        <div class="count-down-item">
          <z-count-down :time="300" size="large" />
        </div>
        <div class="count-down-item">
          <z-count-down :time="300" size="xlarge" />
        </div>
        <div class="count-down-item">
          <z-count-down :time="300" size="40" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="count-down-container">
        <div class="count-down-item">
          <z-count-down :time="300" text-color="warning" separator-color="warning" />
        </div>
        <div class="count-down-item">
          <z-count-down :time="300" text-color="success" separator-color="primary" />
        </div>
        <div class="count-down-item">
          <z-count-down
            :time="300"
            border
            separator-mode="cn"
            text-color="cgray3"
            separator-color="disabled"
            border-color="cgray3"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.count-down-container {
  position: relative;
  width: 100%;

  .count-down-item {
    position: relative;
    width: 100%;

    & + .count-down-item {
      margin-top: 30rpx;
    }
    .operation-btn {
      margin-right: 20rpx;
    }
  }
}
</style>
