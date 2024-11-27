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
  path: '/components-pages/z-link/index',
})
const { isDemoH5Page } = useDemoH5Page()

function clickLink() {
  uni.showToast({ title: '点击链接', icon: 'none' })
}
</script>

<template>
  <CustomPage title="超链接" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="link-container">
        <div class="link-item">
          <z-link text="ZGGUI 链接" href="ui.zcgnav.cn" @click="clickLink" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置主题或颜色">
      <div class="link-container">
        <div class="link-item">
          <z-link text="ZGGUI 链接" type="primary" href="ui.zcgnav.cn" />
        </div>
        <div class="link-item">
          <z-link text="ZGGUI 链接" type="success" href="ui.zcgnav.cn" />
        </div>
        <div class="link-item">
          <z-link text="ZGGUI 链接" type="error" href="ui.zcgnav.cn" />
        </div>
        <div class="link-item">
          <z-link text="ZGGUI 链接" color="cbluegray2" href="ui.zcgnav.cn" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置下划线及下划线颜色">
      <div class="link-container">
        <div class="link-item">
          <z-link text="ZGGUI 链接" underLine lineColor="error" href="ui.zcgnav.cn" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置平台复制提示词">
      <div class="link-container">
        <div class="link-item">
          <z-link text="ZGGUI 链接" tips="复制成功" href="ui.zcgnav.cn" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.link-container {
  position: relative;
  width: 100%;

  .link-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .link-item {
      margin-top: 30rpx;
    }

    z-link {
      margin-left: 10rpx;
    }
  }
}
</style>
