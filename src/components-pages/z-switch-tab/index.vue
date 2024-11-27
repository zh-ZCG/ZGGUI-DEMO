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
  path: '/components-pages/z-switch-tab/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 当前激活的选项卡
const currentActiveTab = ref<number>(0)

// 选项列表
const tabsData: string[] = ['选项卡一', '选项卡二']
</script>

<template>
  <CustomPage
    title="选项卡切换"
    page-bg-color="#ebeef5"
    :is-h5-demo-page="isDemoH5Page"
  >
    <DemoContainer title="基础使用">
      <div class="switch-tab-container">
        <div class="switch-tab-item">
          <z-switch-tab v-model="currentActiveTab" :tabs="tabsData">
            <div v-if="currentActiveTab === 0" class="switch-tab-content">
              选项卡一
            </div>
            <div v-if="currentActiveTab === 1" class="switch-tab-content">
              选项卡二
            </div>
          </z-switch-tab>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁止点击">
      <div class="switch-tab-container">
        <div class="switch-tab-item">
          <z-switch-tab v-model="currentActiveTab" :tabs="tabsData" disabled>
            <div v-if="currentActiveTab === 0" class="switch-tab-content">
              选项卡一
            </div>
            <div v-if="currentActiveTab === 1" class="switch-tab-content">
              选项卡二
            </div>
          </z-switch-tab>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改主题色">
      <div class="switch-tab-container">
        <div class="switch-tab-item">
          <z-switch-tab
            v-model="currentActiveTab"
            :tabs="tabsData"
            inactive-bg-color="error"
            inactive-text-color="primary"
            active-text-color="success"
            active-bg-color="warning"
          >
            <div v-if="currentActiveTab === 0" class="switch-tab-content">
              选项卡一
            </div>
            <div v-if="currentActiveTab === 1" class="switch-tab-content">
              选项卡二
            </div>
          </z-switch-tab>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.switch-tab-container {
  position: relative;
  width: 100%;

  .switch-tab-item {
    position: relative;
    width: 100%;

    & + .switch-tab-item {
      margin-top: 30rpx;
    }

    .switch-tab-content {
      position: relative;
      height: 280rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      color: @primary;
      padding: 30rpx;
      border-radius: 0rpx 0rpx 30rpx 30rpx;
    }
  }
}
</style>
