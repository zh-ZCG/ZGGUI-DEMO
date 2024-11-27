<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useUniAppSystemRectInfo } from 'zgg-ui/libs/use-uniapp-system-rect-info/use-uniapp-system-rect-info'

import { NotifyOptions, zNotifyInstance } from 'zgg-ui/components/z-notify/z-notify'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-notify/index',
})
const { isDemoH5Page } = useDemoH5Page()
const { navBarInfo } = useUniAppSystemRectInfo()

// notifyRef对象
const notifyRef = ref<zNotifyInstance>()

// 打开默认的消息通知
const openNormalNotify = () => {
  notifyRef.value?.show({
    msg: 'ZGGUI提示您有消息送达',
  })
}

// 打开指定类型的消息通知
const openTypeNotify = (type: NotifyOptions['type']) => {
  notifyRef.value?.show({
    msg: 'ZGGUI提示您有消息送达',
    type,
  })
}

// 修改颜色的消息通知
const openCustomColorNotify = () => {
  notifyRef.value?.show({
    msg: 'ZGGUI提示您有消息送达',
    bgColor: 'disabled',
    textColor: 'cw',
  })
}

// 修改消息的位置
const openPositionNotify = (position: NotifyOptions['position']) => {
  notifyRef.value?.show({
    msg: 'ZGGUI提示您有消息送达',
    position,
  })
}
</script>

<template>
  <CustomPage
    title="消息通知"
    :navbar-frosted="false"
    :is-h5-demo-page="isDemoH5Page"
  >
    <DemoContainer title="基础使用">
      <div class="notify-container">
        <div class="notify-item">
          <z-button size="large" type="primary" @click="openNormalNotify">
            默认消息通知
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改通知类型">
      <div class="notify-container fww">
        <div class="notify-item line">
          <z-button size="large" type="primary" @click="openTypeNotify('primary')">
            primary类型
          </z-button>
        </div>
        <div class="notify-item line">
          <z-button size="large" type="success" @click="openTypeNotify('success')">
            success类型
          </z-button>
        </div>
        <div class="notify-item line">
          <z-button size="large" type="warning" @click="openTypeNotify('warning')">
            warning类型
          </z-button>
        </div>
        <div class="notify-item line">
          <z-button size="large" type="error" @click="openTypeNotify('error')">
            error类型
          </z-button>
        </div>
        <div class="notify-item line">
          <z-button size="large" type="info" @click="openTypeNotify('info')">
            info类型
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义消息通知颜色">
      <div class="notify-container">
        <div class="notify-item">
          <z-button size="large" type="primary" @click="openCustomColorNotify">
            弹出消息通知
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改通知类型">
      <div class="notify-container fww">
        <div class="notify-item line">
          <z-button size="large" type="primary" @click="openPositionNotify('top')">
            顶部弹出
          </z-button>
        </div>
        <div class="notify-item line">
          <z-button size="large" type="primary" @click="openPositionNotify('center')">
            中间弹出
          </z-button>
        </div>
        <div class="notify-item line">
          <z-button size="large" type="primary" @click="openPositionNotify('bottom')">
            底部弹出
          </z-button>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>

  <z-notify ref="notifyRef" :offset-top="navBarInfo.height" />
</template>

<style lang="less" scoped>
.notify-container {
  position: relative;
  width: 100%;

  .notify-item {
    position: relative;
    width: 100%;

    & + .notify-item {
      margin-top: 30rpx;
    }

    &.line {
      width: auto;
      margin-right: 20rpx;
      margin-top: 20rpx;
    }
  }
}
</style>
