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
  path: '/components-pages/z-search-box/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 搜索框输入的值
const searchValue = ref<string>('')
// 没有节流输入的值
const searchValueNoThrottle = ref<string>('')

// 点击搜索按钮
const searchEvent = (value: string) => {
  uni.showToast({
    title: `点击了搜索按钮${value}`,
    icon: 'none',
  })
}
</script>

<template>
  <CustomPage title="搜索框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="search-box-container">
        <div class="search-box-item">
          输入的内容:
          <text class="cb">
            {{ searchValue }}
          </text>
        </div>
        <div class="search-box-item">
          <z-search-box v-model="searchValue" @search="searchEvent" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="圆角搜索框">
      <div class="search-box-container">
        <div class="search-box-item">
          <z-search-box shape="round" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自动聚焦">
      <div class="search-box-container">
        <div class="search-box-item">
          <z-search-box focus />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁用搜索框">
      <div class="search-box-container">
        <div class="search-box-item">
          <z-search-box disabled />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置搜索框尺寸">
      <div class="search-box-container">
        <div class="search-box-item">
          <z-search-box size="small" />
        </div>
        <div class="search-box-item">
          <z-search-box size="normal" />
        </div>
        <div class="search-box-item">
          <z-search-box size="large" />
        </div>
        <div class="search-box-item">
          <z-search-box size="small" shape="round" />
        </div>
        <div class="search-box-item">
          <z-search-box size="normal" shape="round" />
        </div>
        <div class="search-box-item">
          <z-search-box size="large" shape="round" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="内容对齐方式">
      <div class="search-box-container">
        <div class="search-box-item">
          <z-search-box text-align="center" />
        </div>
        <div class="search-box-item">
          <z-search-box text-align="right" />
        </div>
        <div class="search-box-item">
          <z-search-box shape="round" text-align="center" />
        </div>
        <div class="search-box-item">
          <z-search-box shape="round" text-align="right" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏搜索按钮">
      <div class="search-box-container">
        <div class="search-box-item">
          <z-search-box text-align="center" :search-button="false" />
        </div>
        <div class="search-box-item">
          <z-search-box shape="round" text-align="center" :search-button="false" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏清除内容按钮">
      <div class="search-box-container">
        <div class="search-box-item">
          <z-search-box :clearable="false" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="关闭搜索节流">
      <div class="search-box-container">
        <div class="search-box-item">
          输入的内容:
          <text class="cgray3">
            {{ searchValueNoThrottle }}
          </text>
        </div>
        <div class="search-box-item">
          <z-search-box v-model="searchValueNoThrottle" :throllte="false" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改输入框颜色">
      <div class="search-box-container">
        <div class="search-box-item">
          <z-search-box
            shape="round"
            text-color="cgray3"
            placeholder-color="disabled"
            border-color="disabled"
            search-button-bg-color="cgray3"
            search-button-text="搜索内容"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.search-box-container {
  position: relative;
  width: 100%;

  .search-box-item {
    position: relative;
    width: 100%;

    & + .search-box-item {
      margin-top: 30rpx;
    }
  }
}
</style>
