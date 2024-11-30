<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { zActionSheetInstance } from 'zgg-ui/components/z-action-sheet/z-action-sheet'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-action-sheet/index',
})
const { isDemoH5Page } = useDemoH5Page()
// actionSheetRef
const actionSheetRef = ref<zActionSheetInstance>()

// 打开默认菜单
const openNormalActionSheet = () => {
  actionSheetRef.value?.show({
    title: '请选择操作',

    actions: [
      { text: '出库', value: '出库' },
      { text: '入库', value: '入库' },
      { text: '采购', value: '采购' },
    ],
    cancel: () => {
      uni.showToast({
        title: '您点击了取消按钮',
        icon: 'none',
      })
      return true
    },
    select: (index: number, value?: string | number) => {
      uni.showToast({
        title: `您选中了: ${index} - ${value}`,
        icon: 'none',
      })
      return true
    },
  })
}

// 打开拦截取消事件菜单
const openInterceptCancelActionSheet = () => {
  actionSheetRef.value?.show({
    title: '请选择操作',

    actions: [
      { text: '出库', value: '出库' },
      { text: '入库', value: '入库' },
      { text: '采购', value: '采购' },
    ],
    cancel: () => {
      uni.showToast({
        title: '暂不允许取消',
        icon: 'none',
      })
      return false
    },
    select: (index: number, value?: string | number) => {
      uni.showToast({
        title: `您选中了: ${index} - ${value}`,
        icon: 'none',
      })
      return true
    },
  })
}

// 打开拦截选项事件菜单
const openInterceptSelectActionSheet = () => {
  actionSheetRef.value?.show({
    title: '请选择操作',
    actions: [
      { text: '出库', value: '出库' },
      { text: '入库', value: '入库' },
      { text: '采购', value: '采购' },
    ],
    select: (index: number) => {
      let message = '请选择入库'
      if (index === 1) {
        message = '选择正确'
      }
      uni.showToast({
        title: message,
        icon: 'none',
      })
      return index === 1
    },
  })
}

// 打开带取消按钮的菜单
const openHideCancelActionSheet = () => {
  actionSheetRef.value?.show({
    title: '请选择操作',

    actions: [
      { text: '出库', value: '出库' },
      { text: '入库', value: '入库' },
      { text: '采购', value: '采购' },
    ],

    select: (index: number, value?: string | number) => {
      uni.showToast({
        title: `您选中了: ${index} - ${value}`,
        icon: 'none',
      })
      return true
    },
    cancelText: '',
  })
}
</script>

<template>
  <CustomPage title="操作菜单" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="action-sheet-container">
        <div class="action-sheet-item">
          <z-button size="large" type="primary" @click="openNormalActionSheet">
            打开菜单
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="阻止取消点击事件">
      <div class="action-sheet-container">
        <div class="action-sheet-item">
          <z-button
            size="large"
            type="primary"
            @click="openInterceptCancelActionSheet"
          >
            打开菜单
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="阻止选中事件">
      <div class="action-sheet-container">
        <div class="action-sheet-item">
          <z-button
            size="large"
            type="primary"
            @click="openInterceptSelectActionSheet"
          >
            打开菜单
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏取消按钮">
      <div class="action-sheet-container">
        <div class="action-sheet-item">
          <z-button size="large" type="primary" @click="openHideCancelActionSheet">
            打开菜单
          </z-button>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>

  <z-action-sheet ref="actionSheetRef" />
</template>

<style lang="less" scoped>
.action-sheet-container {
  position: relative;
  width: 100%;

  .action-sheet-item {
    position: relative;
    width: 100%;

    & + .action-sheet-item {
      margin-top: 30rpx;
    }
  }
}
</style>
