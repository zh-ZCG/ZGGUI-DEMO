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
  path: '/components-pages/z-lazy-load/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 图片数据
const imageData = [
  'http://192.168.1.15/testapkwgt/mm.png',
  'http://192.168.1.15/testapkwgt/hh.png',
  'http://192.168.1.15/testapkwgt/sll.png',
  'http://192.168.1.15/testapkwgt/hh.png',
  'http://192.168.1.15/testapkwgt/mm.png',
  'http://192.168.1.15/testapkwgt/sll.png',
  'http://192.168.1.15/testapkwgt/sll.png',
  'http://192.168.1.15/testapkwgt/mm.png',
]

// 图片列表
const imageList = ref<string[]>([])

// 生成数据
const generateData = () => {
  for (let i = 0; i < 100; i++) {
    // 随机获取图片数据
    const index = Math.floor(Math.random() * imageData.length)
    // 添加到图片列表
    imageList.value.push(imageData[index])
  }
}
generateData()
</script>

<template>
  <CustomPage title="懒加载" :is-h5-demo-page="isDemoH5Page">
    <view class="lazy-load-container">
      <view v-for="(item, index) in imageList" :key="index" class="lazy-load-item">
        <z-lazy-load :src="item" mode="aspectFit" />
      </view>
    </view>
  </CustomPage>
</template>

<style lang="less" scoped>
.lazy-load-container {
  position: relative;
  width: 100%;

  .lazy-load-item {
    position: relative;
    width: 100%;
    height: 280rpx;
    border-radius: 15rpx;

    & + .lazy-load-item {
      margin-top: 30rpx;
    }
  }
}
</style>
