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
  path: '/components-pages/z-photo-album/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 图片列表
const imageListData = [
  'http://192.168.1.15/testapkwgt/mm.png',
  'http://192.168.1.15/testapkwgt/hh.png',
  'http://192.168.1.15/testapkwgt/sll.png',
  'http://192.168.1.15/testapkwgt/mm.png',
  'http://192.168.1.15/testapkwgt/hh.png',
  'http://192.168.1.15/testapkwgt/sll.png',
  'http://192.168.1.15/testapkwgt/hh.png',
  'http://192.168.1.15/testapkwgt/mm.png',
]
</script>

<template>
  <CustomPage title="相册" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用 - 这里使用max限制图片数量">
      <div class="photo-album-container">
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="1" />
        </div>
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="2" />
        </div>
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="3" />
        </div>
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="4" />
        </div>
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="5" />
        </div>
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="6" />
        </div>
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="7" />
        </div>
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="8" />
        </div>
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="9" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置单行显示数据数量">
      <div class="photo-album-container">
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="1" :column="1" />
        </div>
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="2" :column="2" />
        </div>
        <div class="photo-album-item">
          <z-photo-album :data="imageListData" :max="9" :column="4" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.photo-album-container {
  position: relative;
  width: 100%;

  .photo-album-item {
    position: relative;
    width: 100%;
    padding: 30rpx 0rpx;

    & + .photo-album-item {
      border-top: 1rpx solid #eeeeee;
    }
  }
}
</style>
