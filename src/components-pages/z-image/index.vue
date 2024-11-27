<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { nextTick, ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-image/index',
})
const { isDemoH5Page } = useDemoH5Page()

const src = ref('')
const srcError = ref('http://192.168.1.15/testapkwgt/error.png')

const clickHandler = () => {}

nextTick(() => {
  setTimeout(() => {
    src.value = 'http://192.168.1.15/testapkwgt/mm.png'
  }, 2500)
})
</script>

<template>
  <CustomPage title="图片" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="image-container">
        <div class="image-item">
          <z-image
            :show-loading="true"
            :src="src"
            width="80px"
            height="80px"
            @click="clickHandler"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="裁剪方式">
      <div class="image-container">
        <div class="image-item">
          <z-image :src="src" mode="widthFix" width="80px" height="80px" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="图片圆角大小">
      <div class="image-container">
        <div class="image-item">
          <z-image :src="src" width="80px" height="80px" radius="50%" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="懒加载">
      <div class="image-container">
        <div class="image-item">
          <z-image :src="src" width="80px" height="80px" :lazy-load="true" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="加载中">
      <div class="image-container">
        <div class="image-item">
          <z-image :src="src" width="80px" height="80px">
            <template v-slot:loading>
              <z-loading-icon color="error"></z-loading-icon>
            </template>
          </z-image>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="加载失败">
      <div class="image-container">
        <div class="image-item">
          <z-image :src="srcError">
            <template #error>
              <div style="font-size: 24rpx">加载失败</div>
            </template>
          </z-image>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="淡入动画">
      <div class="image-container">
        <div class="image-item">
          <z-image :src="src" width="80px" height="80px" :fade="true" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.image-container {
  position: relative;
  width: 100%;

  .image-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .image-item {
      margin-top: 30rpx;
    }

    z-image {
      margin-left: 10rpx;
    }
  }
}
</style>
