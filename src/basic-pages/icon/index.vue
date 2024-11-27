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
  path: '/basic-pages/icon/index',
})
const { isDemoH5Page } = useDemoH5Page()

const attentionText = ref(
  'ZGGUI所有图标均来自iconfont，使用方法与iconfont一致，因为不同项目使用的icon图标均不相同，所以图标文件只包含组件必须图标和常用图标，以免项目过大'
)

const iconList = ref([
  'shouye',
  'wo',
  'hexin',
  'fuwuzujian',
  'arrow-right1',
  'chevron-right1',
  'chevron-up1',
  'eye1',
  'eye-slash1',
  'star1',
  'settings3',
  'star3',
  'empty-address',
  'weixin',
  'weixinpengyouquan',
  'qq',
  'xinlang',
  'facebook',
  'twitter',
  'pingguo',
  'empty-order',
  'empty-coupon',
  'empty-favor',
  'empty-comment',
  'empty-network',
  'empty-list',
  'backspace',
  'image-error',
  'empty-data',
  'search',
  'empty-permission',
  'tianjia',
  'jianshao',
  'cuowu',
  'cuowu-circle',
  'zhengque',
  'jiantoushang',
  'jiantouxia',
  'jiantouyou',
  'jiantouzuo',
  'empty-page',
  'empty-cart',
  'loading',
  'empty-history',
  'empty-search',
  'empty-message',
  'upload',
  'settings',
  'arrow-down1',
  'arrow-left1',
  'arrow-up1',
  'chevron-left1',
  'chevron-down1',
])
</script>

<template>
  <CustomPage title="图标" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="注意事项">
      <div class="icon-container">
        <div class="icon-item">
          <z-text :text="attentionText"></z-text>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="图标列表">
      <div class="icon-container">
        <div class="icon-item fww">
          <div
            class="dfc jcc aic"
            style="width: 29vw; height: 29vw; margin-left: 10rpx"
            v-for="(item, index) in iconList"
            :key="index"
          >
            <z-icon :size="40" :name="item" color="primary" />
            <z-text :text="item"></z-text>
          </div>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.icon-container {
  position: relative;
  width: 100%;

  .icon-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;

    & + .icon-item {
      margin-top: 30rpx;
    }
    &.fill-height {
      height: 400rpx;
    }
  }
}
</style>
