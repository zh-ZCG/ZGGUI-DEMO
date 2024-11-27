<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'
import { zNavPage } from 'zgg-ui/libs/zRouter'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-water-fall/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 跳转到普通瀑布流页面
const navNormalWaterFallPage = () => {
  zNavPage('/components-pages/z-normal-water-fall/index')
}
// 跳转到计算瀑布流页面
const navCalcWaterFallPage = () => {
  zNavPage('/components-pages/z-calc-water-fall/index')
}
</script>

<template>
  <CustomPage title="瀑布流" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="普通模式">
      <div class="water-fall-container">
        <div class="water-fall-item">
          <div class="cgray1">普通模式:将单数的数据放在左边，双数的数据放在右边</div>
          <div class="nav-water-fall-button">
            <z-button size="normal" type="primary" @click="navNormalWaterFallPage">
              普通瀑布流
            </z-button>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="计算模式">
      <div class="water-fall-container">
        <div class="water-fall-item">
          <div class="cgray1">
            计算模式:将数据一一填入待渲染的左右两个队列中，自动将下一个数据填入高度较小的一列中
          </div>
          <div class="nav-water-fall-button">
            <z-button size="normal" type="primary" @click="navCalcWaterFallPage">
              计算瀑布流
            </z-button>
          </div>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.water-fall-container {
  position: relative;
  width: 100%;

  .water-fall-item {
    position: relative;
    width: 100%;

    .nav-water-fall-button {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20rpx;
    }
  }
}
</style>
