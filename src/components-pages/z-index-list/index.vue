<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

import { zNavPage } from 'zgg-ui/libs/zRouter'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-index-list/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 跳转到默认的索引列表页面
const navBaseIndexListPage = () => {
  zNavPage('/components-pages/z-index-list/base-index-list')
}

// 跳转到固定高度的索引列表
const navFixHeightListPage = () => {
  zNavPage('/components-pages/z-index-list/fix-height-index-list')
}

// 跳转到隐藏索引的索引列表
const navHideKeysListPage = () => {
  zNavPage('/components-pages/z-index-list/hidden-keys-index-list')
}
</script>

<template>
  <CustomPage title="索引列表" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="默认索引列表">
      <div class="index-list-container">
        <div class="index-list-item">
          <z-button size="large" type="primary" @click="navBaseIndexListPage">
            查看默认索引列表
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="固定高度索引列表">
      <div class="index-list-container">
        <div class="index-list-item">
          <z-button size="large" type="primary" @click="navFixHeightListPage">
            查看固定高度索引列表
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏索引的索引列表">
      <div class="index-list-container">
        <div class="index-list-item">
          <z-button size="large" type="primary" @click="navHideKeysListPage">
            查看隐藏右边索引索引列表
          </z-button>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.index-list-container {
  position: relative;
  width: 100%;

  .index-list-item {
    position: relative;
    width: 100%;

    & + .index-list-item {
      margin-top: 30rpx;
    }

    .tips {
      color: @info;
    }
  }
}
</style>
