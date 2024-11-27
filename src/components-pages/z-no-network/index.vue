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
  path: '/components-pages/z-no-network/index',
})
const { isDemoH5Page } = useDemoH5Page()

function disconnected() {
  console.log('disconnected')
}

function connected() {
  console.log('connected')
}

function retry() {
  console.log('retry')
}
</script>

<template>
  <CustomPage title="无网络提示" :is-h5-demo-page="isDemoH5Page">
    <div class="nonetwork">
      <z-no-network
        @disconnected="disconnected"
        @connected="connected"
        @retry="retry"
      ></z-no-network>
      <div class="nonetworkContent dfc jcc aic">
        <z-icon name="zhengque" size="60" color="success"></z-icon>
        <text>网络正常</text>
      </div>
    </div>
  </CustomPage>
</template>

<style lang="less" scoped>
.nonetwork {
  width: 100%;
  height: 80vh;
  .nonetworkContent {
    width: 100%;
    height: 100%;
  }
}
</style>
