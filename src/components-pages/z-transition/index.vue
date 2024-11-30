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
  path: '/components-pages/z-transition/index',
})
const { isDemoH5Page } = useDemoH5Page()

//是否展示动画
const showT = ref(false)
const showName = ref('fade')

function showTransition(name: string) {
  showName.value = name
  showT.value = true
  setTimeout(() => {
    showT.value = false
  }, 3000)
}

function unshow() {
  showT.value = false
}
</script>

<template>
  <CustomPage title="动画效果" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="淡入">
      <div class="transition-container">
        <div class="transition-item">
          <z-button size="large" type="primary" @click="showTransition('fade')">
            淡入
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="缩放">
      <div class="transition-container">
        <div class="transition-item">
          <z-button size="large" type="primary" @click="showTransition('zoom')">
            缩放
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="缩放淡入">
      <div class="transition-container">
        <div class="transition-item">
          <z-button size="large" type="primary" @click="showTransition('fade-zoom')">
            缩放淡入
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="上滑淡入">
      <div class="transition-container">
        <div class="transition-item">
          <z-button size="large" type="primary" @click="showTransition('fade-up')">
            上滑淡入
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="下滑淡入">
      <div class="transition-container">
        <div class="transition-item">
          <z-button size="large" type="primary" @click="showTransition('fade-down')">
            下滑淡入
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="左滑淡入">
      <div class="transition-container">
        <div class="transition-item">
          <z-button size="large" type="primary" @click="showTransition('fade-left')">
            左滑淡入
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="右滑淡入">
      <div class="transition-container">
        <div class="transition-item">
          <z-button size="large" type="primary" @click="showTransition('fade-right')">
            右滑淡入
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="上滑进入">
      <div class="transition-container">
        <div class="transition-item">
          <z-button size="large" type="primary" @click="showTransition('slide-up')">
            上滑进入
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="下滑淡入">
      <div class="transition-container">
        <div class="transition-item">
          <z-button size="large" type="primary" @click="showTransition('slide-down')">
            下滑淡入
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="左滑进入">
      <div class="transition-container">
        <div class="transition-item">
          <z-button size="large" type="primary" @click="showTransition('slide-left')">
            左滑进入
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="右滑进入">
      <div class="transition-container">
        <div class="transition-item">
          <z-button
            size="large"
            type="primary"
            @click="showTransition('slide-right')"
          >
            右滑进入
          </z-button>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
  <z-transition
    :show="showT"
    :name="showName"
    :other-style="{
      position: 'fixed',
      height: '200rpx',
      width: '200rpx',
      top: 'calc(50% - 100rpx)',
      left: 'calc(50% - 100rpx)',
    }"
  >
    <div style="height: 200rpx; width: 200rpx" class="bgs5 df jcc aic cw">滑块</div>
  </z-transition>
</template>

<style lang="less" scoped>
.transition-container {
  position: relative;
  width: 100%;

  .transition-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .transition-item {
      margin-top: 30rpx;
    }

    z-transition {
      margin-left: 10rpx;
    }
  }
}
</style>
