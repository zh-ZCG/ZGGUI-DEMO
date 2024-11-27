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
  path: '/components-pages/z-overlay/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 显示遮罩层
const showOverlay = ref(false)
// 遮罩透明度
const overlayOpacity = ref(0.5)

// 打开默认遮罩层
const openNormalOverlay = () => {
  overlayOpacity.value = 0.5
  showOverlay.value = true
}

// 打开透明遮罩层
const openTransparentOverlay = () => {
  overlayOpacity.value = 0
  showOverlay.value = true
}
</script>

<template>
  <CustomPage title="遮罩层" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="overlay-container">
        <div class="overlay-item">
          <z-button size="large" type="primary" @click="openNormalOverlay">
            打开遮罩
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="透明遮罩">
      <div class="overlay-container">
        <div class="overlay-item">
          <z-button size="large" type="primary" @click="openTransparentOverlay">
            打开遮罩
          </z-button>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>

  <z-overlay v-model:show="showOverlay" zIndex="1300" :opacity="overlayOpacity">
    <div class="overlay-content df jcc aic">遮罩已打开</div>
  </z-overlay>
</template>

<style lang="less" scoped>
.overlay-container {
  position: relative;
  width: 100%;

  .overlay-item {
    position: relative;
    width: 100%;

    & + .overlay-item {
      margin-top: 30rpx;
    }
  }
}

.overlay-content {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 34rpx;
  color: @primary;
}
</style>
