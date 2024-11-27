<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import WaterFallItem from '../z-water-fall/components/water-fall-item.vue'

import { useGenerateImageData } from '../z-water-fall/randomData/randomData'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-calc-waterfall/index',
})

const { imageData } = useGenerateImageData()
</script>

<template>
  <CustomPage title="计算瀑布流" only-back>
    <z-water-fall :data="imageData" mode="calc">
      <template #left="{ item }">
        <WaterFallItem :url="item.url" />
      </template>
      <template #right="{ item }">
        <WaterFallItem :url="item.url" />
      </template>
    </z-water-fall>
  </CustomPage>
</template>

<style lang="less" scoped></style>
