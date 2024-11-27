<!-- BasisPage -->
// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif
<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import type { Ref } from 'vue'
import { useIndexPageProvide } from '../../utils/use-index-page-provide'
import { onLoad, onShow } from '@dcloudio/uni-app'

import { zNavPage } from 'zgg-ui/libs/zRouter'

const pageName = 'BasisPage'

onMounted(function () {
  ready()
})
const onShow = () => {}

const onLoad = () => {}

useIndexPageProvide('basic', onShow, onLoad)

/** 准备好 */
function ready() {}

type BasisElementDataType = {
  title: string
  path: string
  url: string
}

const BasisElementData = ref<BasisElementDataType[]>([
  {
    title: '颜色',
    path: 'color',
    url: '/basic-pages/color/index',
  },
  {
    title: 'Flex布局',
    path: 'flex',
    url: '/basic-pages/flex/index',
  },
  {
    title: '图标',
    path: 'z-icon',
    url: '/basic-pages/icon/index',
  },
  {
    title: '标题',
    path: 'z-title',
    url: '/basic-pages/title/index',
  },
  {
    title: '按钮',
    path: 'z-button',
    url: '/basic-pages/button/index',
  },
  {
    title: '标签',
    path: 'z-tag',
    url: '/basic-pages/tag/index',
  },
  {
    title: '徽标',
    path: 'z-badge',
    url: '/basic-pages/badge/index',
  },
  {
    title: '头像',
    path: 'z-avatar',
    url: '/basic-pages/avatar/index',
  },
  {
    title: '页脚',
    path: 'z-footer',
    url: '/basic-pages/footer/index',
  },
])

const pageTo = (path: string) => {
  ;(zNavPage as Function)(path, 'navigateTo').catch(() => {
    uni.showToast({
      title: '暂未发布',
      icon: 'none',
    })
  })
}
</script>

<template>
  <div class="basisPage dfc aic">
    <div class="imageContent dfr jcc aife">
      <image :src="'../../static/ZGGUI.png'" class="imageSize" />
    </div>
    <div class="dfr fww" style="width: 90%">
      <div
        v-for="(item, index) in BasisElementData"
        class="component dfc jcc aifs cw"
        :key="index"
        @tap.stop="pageTo(item.url)"
      >
        <z-title
          :color="'cb'"
          :size="'17'"
          :otherStyle="{
            padding: '5rpx',
            fontWeight: 'bolder',
          }"
          @click="pageTo(item.url)"
        >
          {{ item.title }}
        </z-title>
        <div style="width: 100%" class="dfr jcfe">
          <z-title
            :color="'cgray1'"
            :size="'large'"
            :otherStyle="{
              padding: '5rpx',
            }"
            @click="pageTo(item.url)"
          >
            {{ item.path }}
          </z-title>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.basisPage {
  height: 100%;
  width: 100%;
  .imageContent {
    width: 100%;
    height: 500rpx;
    .imageSize {
      width: 300rpx;
      height: 300rpx;
    }
  }
  .component {
    width: 44%;
    height: 120rpx;
    padding: 10rpx;
    margin: 10rpx;
    border-radius: 15rpx;
    background: linear-gradient(135deg, #acd1ec 40%, #b3e5ff 60%, #8ccfff 100%);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
  }
}
</style>
