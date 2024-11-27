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
  path: '/components-pages/z-loading-page/index',
})
const { isDemoH5Page } = useDemoH5Page()

const showLoading1 = ref(false)
const showLoading2 = ref(false)
const showLoading3 = ref(false)
const showLoading4 = ref(false)
const showLoading5 = ref(false)
const showLoading6 = ref(false)
const showLoading7 = ref(false)

function controlShow(index: number) {
  switch (index) {
    case 1:
      showLoading1.value = true
      setTimeout(() => {
        showLoading1.value = false
      }, 1500)
      break
    case 2:
      showLoading2.value = true
      setTimeout(() => {
        showLoading2.value = false
      }, 1500)
      break
    case 3:
      showLoading3.value = true
      setTimeout(() => {
        showLoading3.value = false
      }, 1500)
      break
    case 4:
      showLoading4.value = true
      setTimeout(() => {
        showLoading4.value = false
      }, 1500)
      break
    case 5:
      showLoading5.value = true
      setTimeout(() => {
        showLoading5.value = false
      }, 1500)
      break
    case 6:
      showLoading6.value = true
      setTimeout(() => {
        showLoading6.value = false
      }, 1500)
      break
    case 7:
      showLoading7.value = true
      setTimeout(() => {
        showLoading7.value = false
      }, 1500)
      break
  }
}
</script>

<template>
  <CustomPage title="加载页" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="action-sheet-container">
        <div class="action-sheet-item">
          <z-button size="large" type="primary" @click="controlShow(1)">
            打开加载页
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="文字内容">
      <div class="action-sheet-container">
        <div class="action-sheet-item">
          <z-button size="large" type="primary" @click="controlShow(2)">
            打开加载页
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="动画模式">
      <div class="action-sheet-container">
        <div class="action-sheet-item">
          <z-button size="large" type="primary" @click="controlShow(3)">
            打开加载页
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="动画图片">
      <div class="action-sheet-container">
        <div class="action-sheet-item">
          <z-button size="large" type="primary" @click="controlShow(4)">
            打开加载页
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="文字样式">
      <div class="action-sheet-container">
        <div class="action-sheet-item">
          <z-button size="large" type="primary" @click="controlShow(5)">
            打开加载页
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="图标样式">
      <div class="action-sheet-container">
        <div class="action-sheet-item">
          <z-button size="large" type="primary" @click="controlShow(6)">
            打开加载页
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="背景颜色">
      <div class="action-sheet-container">
        <div class="action-sheet-item">
          <z-button size="large" type="primary" @click="controlShow(7)">
            打开加载页
          </z-button>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>

  <z-loading-page :show="showLoading1" />
  <z-loading-page :show="showLoading2" :loadingText="'修改后的内容..'" />
  <z-loading-page :show="showLoading3" :mode="'flower'" />
  <z-loading-page
    :show="showLoading4"
    :image="'http://192.168.1.15/testapkwgt/mm.png'"
  />
  <z-loading-page :show="showLoading5" color="success" fontSize="23" />
  <z-loading-page :show="showLoading6" iconSize="32" loadingColor="error" />
  <z-loading-page :show="showLoading7" bgColor="warning" />
</template>

<style lang="less" scoped>
.action-sheet-container {
  position: relative;
  width: 100%;

  .action-sheet-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .action-sheet-item {
      margin-top: 30rpx;
    }

    z-loading-page {
      margin-left: 10rpx;
    }
  }
}
</style>
