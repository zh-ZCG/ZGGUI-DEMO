<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref, onUnmounted } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-progress/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 进度值
const percent = ref(0)

const percentIntervalTimer = setInterval(() => {
  percent.value += 10
  if (percent.value > 100) {
    percent.value = 0
  }
}, 3000)

onUnmounted(() => {
  clearInterval(percentIntervalTimer)
})
</script>

<template>
  <CustomPage title="进度条" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="progress-container">
        <div class="progress-item">
          <z-line-progress lineText :percent="percent" />
        </div>
        <div class="progress-item df jcc aic">
          <z-circle-progress :percent="percent" show-percent />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示进度">
      <div class="progress-container">
        <div class="progress-item">
          <z-line-progress :percent="50" lineText />
        </div>
        <div class="progress-item df jcc aic">
          <z-circle-progress :percent="50" show-percent />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="横向进度条显示条纹">
      <div class="progress-container">
        <div class="progress-item">
          <z-line-progress :percent="50" lineText stripe />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <div class="progress-container">
        <div class="progress-item">
          <z-line-progress :percent="50" lineText height="30" />
        </div>
        <div class="progress-item df jcc aic">
          <z-circle-progress :percent="50" :radius="80" :ring-width="12" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="progress-container">
        <div class="progress-item">
          <z-line-progress :percent="50" lineBgColor="disabled" line-color="error" />
        </div>
        <div class="progress-item df jcc aic">
          <z-circle-progress
            :percent="50"
            inactive-color="#f8f7f8"
            active-color="cw5"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.progress-container {
  position: relative;
  width: 100%;

  .progress-item {
    position: relative;
    width: 100%;
    & + .progress-item {
      margin-top: 30rpx;
    }
  }
}
</style>
