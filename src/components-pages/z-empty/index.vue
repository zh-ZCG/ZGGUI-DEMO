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
  path: '/components-pages/z-empty/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="空白页" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="empty-container">
        <div class="empty-item">
          <z-empty mode="data" />
        </div>
        <div class="empty-item">
          <z-empty mode="cart" />
        </div>
        <div class="empty-item">
          <z-empty mode="page" />
        </div>
        <div class="empty-item">
          <z-empty mode="search" />
        </div>
        <div class="empty-item">
          <z-empty mode="address" />
        </div>
        <div class="empty-item">
          <z-empty mode="network" />
        </div>
        <div class="empty-item">
          <z-empty mode="order" />
        </div>
        <div class="empty-item">
          <z-empty mode="coupon" />
        </div>
        <div class="empty-item">
          <z-empty mode="favor" />
        </div>
        <div class="empty-item">
          <z-empty mode="permission" />
        </div>
        <div class="empty-item">
          <z-empty mode="history" />
        </div>
        <div class="empty-item">
          <z-empty mode="message" />
        </div>
        <div class="empty-item">
          <z-empty mode="list" />
        </div>
        <div class="empty-item">
          <z-empty mode="comment" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏文案">
      <div class="empty-container">
        <div class="empty-item">
          <z-empty mode="data" :show-tips="false" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义文案">
      <div class="empty-container">
        <div class="empty-item">
          <z-empty mode="data">
            <template #icon>
              <image
                class="custom-empty-icon"
                src="http://192.168.1.15/testapkwgt/mm.png"
                mode="aspectFit"
                style="width: 80rpx; height: 80rpx"
              />
            </template>
            <template #tips>
              <div class="custom-empty-tips">这是一只喵喵</div>
            </template>
          </z-empty>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <div class="empty-container">
        <div class="empty-item">
          <z-empty mode="data" size="small" />
        </div>
        <div class="empty-item">
          <z-empty mode="data" size="large" />
        </div>
        <div class="empty-item">
          <z-empty mode="data" size="xlarge" />
        </div>
        <div class="empty-item">
          <z-empty mode="data" size="80" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="empty-container">
        <div class="empty-item">
          <z-empty mode="data" color="cgray5" />
        </div>
        <div class="empty-item">
          <z-empty mode="data" color="success" />
        </div>
        <div class="empty-item">
          <z-empty mode="data" color="primary" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.empty-container {
  position: relative;
  width: 100%;

  .empty-item {
    position: relative;
    width: 100%;

    & + .empty-item {
      margin-top: 30rpx;
    }
  }
}
.custom-empty-icon {
  width: 200rpx;
  height: 200rpx;
}
.custom-empty-tips {
  font-size: 40rpx;
  color: #b3b3b3;
}
</style>
