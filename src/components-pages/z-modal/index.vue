<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'
import { zModalInstance } from 'zgg-ui/components/z-modal/z-modal'
import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-modal/index',
})
const { isDemoH5Page } = useDemoH5Page()
// modalRef对象
const modalRef = ref<zModalInstance>()

// 默认模态框
const openNormalModal = () => {
  modalRef.value?.showModal({
    title: '是否确认操作',
    content: '点击确认或者取消',
    confirm: () => {
      uni.showToast({
        title: '确认成功',
        icon: 'none',
      })
    },
  })
}

// 显示取消选项
const openCancelModal = () => {
  modalRef.value?.showModal({
    title: '成为会员',
    content: '是否成为会员',
    showCancel: true,
    cancelText: '暂不加入',
    confirmText: '立即加入',
    confirm: () => {
      uni.showToast({
        title: '加入成功',
        icon: 'none',
      })
    },
    cancel: () => {
      uni.showToast({
        title: '已取消',
        icon: 'none',
      })
    },
  })
}

// 显示修改样式后的模态框
const openCustomStyleModal = () => {
  modalRef.value?.showModal({
    title: '成为会员',
    content: '是否成为会员',
    showCancel: true,
    cancelText: '暂不加入',
    confirmText: '立即加入',
    confirmStyle: {
      bgColor: 'primary',
      color: 'cw',
    },
    cancelStyle: {
      bgColor: 'disabled',
      color: 'cw',
    },
    confirm: () => {
      uni.showToast({
        title: '加入成功',
        icon: 'none',
      })
    },
    cancel: () => {
      uni.showToast({
        title: '已取消',
        icon: 'none',
      })
    },
  })
}

// 打开带拦截的模态框
const openInterceptModal = () => {
  modalRef.value?.showModal({
    title: '成为会员',
    content: '是否成为会员',
    confirmText: '立即加入',
    maskClosable: true, // 点击遮罩允许关闭，防止被拦截后无法关闭弹框
    confirm: () => {
      return new Promise((resolve, reject) => {
        // 这里可以进行判断操作
        uni.showToast({
          title: '加入失败，请联系管理员',
          icon: 'none',
        })
        reject()
      })
    },
  })
}
</script>

<template>
  <CustomPage title="模态框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="modal-container df fww">
        <div class="modal-item line">
          <z-button size="large" type="primary" @click="openNormalModal">
            默认模态框
          </z-button>
        </div>
        <div class="modal-item line">
          <z-button size="large" type="error" @click="openCancelModal">
            显示取消选项
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改按钮样式">
      <div class="modal-container df fww">
        <div class="modal-item line">
          <z-button size="large" type="primary" @click="openCustomStyleModal">
            打开模态框
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="确认拦截">
      <div class="modal-container df fww">
        <div class="modal-item line">
          <z-button size="large" type="primary" @click="openInterceptModal">
            打开模态框
          </z-button>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>

  <z-modal ref="modalRef" />
</template>

<style lang="less" scoped>
.modal-container {
  position: relative;
  width: 100%;

  .modal-item {
    position: relative;
    width: 100%;

    & + .modal-item {
      margin-top: 30rpx;
    }

    &.line {
      width: auto;
      margin-top: 0rpx;

      & + .modal-item {
        margin-left: 20rpx;
      }
    }
  }
}
</style>
