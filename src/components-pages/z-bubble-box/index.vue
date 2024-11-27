<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

import { BubbleBoxOptionData } from 'zgg-ui/components/z-bubble-box/z-bubble-box'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-bubble-box/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 气泡弹框数据
const bubbleBoxOptions: BubbleBoxOptionData = [{ text: '收藏' }, { text: '分享' }]

// 带图标的气泡弹框数据
const bubbleBoxOptionsWithIcon: BubbleBoxOptionData = [
  { text: '收藏', icon: 'star3' },
  { text: '我', icon: 'wo' },
]

// 带禁止选项的气泡弹框数据
const bubbleBoxOptionsWithDisabled: BubbleBoxOptionData = [
  { text: '收藏', icon: 'star3' },
  { text: '我', icon: 'wo' },
  { text: '删除', icon: 'backspace', disabled: true },
]

// 案例演示数据
const menu1BubbleOptions: BubbleBoxOptionData = [
  { text: '菜单选项一' },
  { text: '菜单选项二' },
  { text: '菜单选项三' },
  { text: '菜单选项四' },
  { text: '菜单选项五' },
]
const menu2BubbleOptions: BubbleBoxOptionData = [
  { text: '文档选项一' },
  { text: '文档选项二' },
  { text: '文档选项三' },
  { text: '文档选项四' },
  { text: '文档选项五' },
]
const menu3BubbleOptions: BubbleBoxOptionData = [
  { text: '使用教程' },
  { text: '个人案例' },
]

// 选项点击事件
const onBubbleOptionClickEvent = (index: number) => {
  uni.showToast({
    title: `您选择了 ${bubbleBoxOptions[index].text}`,
    icon: 'none',
  })
}
</script>

<template>
  <CustomPage title="气泡弹框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="bubble-box-container">
        <div class="bubble-box-item top-empty fit-content">
          <z-bubble-box :options="bubbleBoxOptions" @click="onBubbleOptionClickEvent">
            点击弹出气泡框
          </z-bubble-box>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="带图标选项">
      <div class="bubble-box-container">
        <div class="bubble-box-item top-empty fit-content">
          <z-bubble-box :options="bubbleBoxOptionsWithIcon">
            点击弹出气泡框
          </z-bubble-box>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="带禁止选项">
      <div class="bubble-box-container">
        <div class="bubble-box-item top-empty fit-content">
          <z-bubble-box :options="bubbleBoxOptionsWithDisabled">
            点击弹出气泡框
          </z-bubble-box>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改气泡弹出位置">
      <div class="bubble-box-container">
        <div class="bubble-box-position-demo">
          <div class="left">
            <div class="item">
              <z-bubble-box position="right" :options="bubbleBoxOptions">
                右边气泡
              </z-bubble-box>
            </div>
          </div>
          <div class="center">
            <div class="item">
              <z-bubble-box position="bottom" :options="bubbleBoxOptions">
                底部气泡
              </z-bubble-box>
            </div>
            <div class="item">
              <z-bubble-box position="top" :options="bubbleBoxOptions">
                顶部气泡
              </z-bubble-box>
            </div>
          </div>
          <div class="right">
            <div class="item">
              <z-bubble-box position="left" :options="bubbleBoxOptions">
                左边气泡
              </z-bubble-box>
            </div>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="bubble-box-container">
        <div class="bubble-box-item top-empty fit-content">
          <z-bubble-box
            bg-color="primary"
            text-color="#fff"
            :options="bubbleBoxOptionsWithIcon"
          >
            点击弹出气泡框
          </z-bubble-box>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="案例">
      <div class="bubble-box-demo1">
        <div class="menu-item">
          <z-bubble-box :options="menu1BubbleOptions" option-item-padding="30rpx">
            <div class="content">选项</div>
          </z-bubble-box>
        </div>
        <div class="menu-item">
          <z-bubble-box :options="menu2BubbleOptions" option-item-padding="30rpx">
            <div class="content">文档</div>
          </z-bubble-box>
        </div>
        <div class="menu-item">
          <z-bubble-box
            :options="menu3BubbleOptions"
            width="150"
            option-item-padding="30rpx"
          >
            <div class="content">关于</div>
          </z-bubble-box>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.bubble-box-container {
  position: relative;
  width: 100%;

  .bubble-box-item {
    position: relative;
    width: 100%;

    padding: 50rpx;

    &.top-empty {
      padding-top: 100rpx;
    }

    &.fit-content {
      width: fit-content;
    }
  }

  .bubble-box-position-demo {
    position: relative;
    width: 100%;
    height: 400rpx;
    display: flex;

    .left,
    .right {
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .center {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .item {
      width: fit-content;
      height: fit-content;
      box-sizing: content-box;
      padding: 20rpx;
      box-sizing: content-box;
    }
  }
}

.bubble-box-demo1 {
  position: relative;
  width: 100%;
  height: 100rpx;
  margin-top: 300rpx;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  .menu-item {
    position: relative;
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32rpx;

    & + .menu-item {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 1rpx;
        height: 60%;
        background-color: #cccccc;
        transform: translate(-50%, -50%);
      }
    }

    .content {
      width: 100%;
    }
  }
}
</style>
