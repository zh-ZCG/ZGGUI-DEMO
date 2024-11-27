<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import { useDemoH5Page, useWxShare } from '@/hooks/index'

import { useUniAppSystemRectInfo } from 'zgg-ui/libs/use-uniapp-system-rect-info/use-uniapp-system-rect-info'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-sticky/index',
})
const { isDemoH5Page } = useDemoH5Page()

const { navBarInfo } = useUniAppSystemRectInfo()
</script>

<template>
  <CustomPage title="吸顶" :is-h5-demo-page="isDemoH5Page">
    <div class="sticky-container">
      <z-sticky :offset-top="navBarInfo.height">
        <div class="df jcc aic bgp5 cw stickybutton">正常吸顶</div>
      </z-sticky>
      <z-gap></z-gap>
      <z-sticky :offset-top="navBarInfo.height + 60">
        <div class="df jcc aic bgp5 cw stickybutton">固定高度</div>
      </z-sticky>
      <z-gap></z-gap>
      <div class="df jcc aic bgp5 cw stickybutton">不吸顶</div>
    </div>
  </CustomPage>
</template>

<style lang="less" scoped>
.sticky-container {
  position: relative;
  width: 100%;
  height: 200vh;
  border-top: solid transparent; // 移除margin影响

  .sticky-placeholder-block {
    height: 120rpx;
    width: 1rpx;
  }
  .stickybutton {
    width: 100%;
    height: 100rpx;
    border-radius: 15rpx;
  }
}
</style>
