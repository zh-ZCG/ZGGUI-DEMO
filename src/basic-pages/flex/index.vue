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
  path: '/basic-pages/flex/index',
})
const { isDemoH5Page } = useDemoH5Page()

const attentionFlexText = ref(
  '本组件意不在强调flex布局如何使用，ZGGUI的flex布局与原生布局一样，只是在原生基础上简化了操作，参考全局文件ZCGstyle.less，为了方便操作，ZGGUI对于常用的固定的搭配简化了写法，提高复用性，主要是写在style太麻烦了，例如原本要写的{display: flex;flex-direction: row;align-items: center;justify-content: center;},现在只需要在当前的class中加上:dfr jcc aic （大多按照 发音/抬头 来定义缩写）即可，ZCGstyle.less中简化了许多CSS，使用者也可自行添加适合的代码段。因为组件中也使用了这些样式，所以在使用本组件库时请把libs下的文件定义为全局文件，否则样式会混乱'
)
</script>

<template>
  <CustomPage title="flex布局" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="注意事项">
      <div class="flex-container">
        <div class="flex-item">
          <z-text :text="attentionFlexText"></z-text>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="横向布局">
      <div class="flex-container">
        <div class="flex-item dfr jcc aic">
          <div class="flex-item-block df jcc aic bgp5 cw">1</div>
          <div class="flex-item-block df jcc aic bgp5 cw">2</div>
          <div class="flex-item-block df jcc aic bgp5 cw">3</div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="横向左布局">
      <div class="flex-container">
        <div class="flex-item dfr jcfs aic">
          <div class="flex-item-block df jcc aic bgp5 cw">1</div>
          <div class="flex-item-block df jcc aic bgp5 cw">2</div>
          <div class="flex-item-block df jcc aic bgp5 cw">3</div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="横向右布局">
      <div class="flex-container">
        <div class="flex-item dfr jcfe aic">
          <div class="flex-item-block df jcc aic bgp5 cw">1</div>
          <div class="flex-item-block df jcc aic bgp5 cw">2</div>
          <div class="flex-item-block df jcc aic bgp5 cw">3</div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="纵向布局">
      <div class="flex-container">
        <div class="flex-item dfc jcc aic">
          <div class="flex-item-block df jcc aic bgp5 cw">1</div>
          <div class="flex-item-block df jcc aic bgp5 cw">2</div>
          <div class="flex-item-block df jcc aic bgp5 cw">3</div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="超出换行">
      <div class="flex-container">
        <div class="flex-item dfr jcfs aic fww">
          <div class="flex-item-block df jcc aic bgp5 cw">1</div>
          <div class="flex-item-block df jcc aic bgp5 cw">2</div>
          <div class="flex-item-block df jcc aic bgp5 cw">3</div>
          <div class="flex-item-block df jcc aic bgp5 cw">4</div>
          <div class="flex-item-block df jcc aic bgp5 cw">5</div>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.flex-container {
  position: relative;
  width: 100%;

  .flex-item {
    position: relative;
    width: 100%;

    .flex-item-block {
      width: 23vw;
      height: 30px;
      margin: 10rpx;
      border-radius: 15rpx;
    }

    & + .flex-item {
      margin-top: 30rpx;
    }
    &.fill-height {
      height: 400rpx;
    }
  }
}
</style>
