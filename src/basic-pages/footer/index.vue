<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { zNavPage } from 'zgg-ui/libs/zRouter'

import { useDemoH5Page, useWxShare } from '@/hooks/index'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/basic-pages/footer/index',
})
const { isDemoH5Page } = useDemoH5Page()

interface FooterNavigatorItem {
  title?: string
  url?: string
  textColor?: string
}

type FooterNavigatorData = FooterNavigatorItem[]

interface FooterNavigator {
  /**
   * @description 导航标题
   */
  title: string
  /**
   * @description 导航链接
   */
  url?: string
  /**
   * @description 导航连接字体颜色
   */
  textColor?: string
}

const footerNavigator: FooterNavigatorData = [
  {
    title: '回到首页',
    url: '/pages/index/index?index=0',
    textColor: 'success',
  },
  {
    title: '关于我',
    url: '/pages/index/index?index=2',
  },
]

// 导航点击事件
const navClick = (nav: FooterNavigator) => {
  if (nav.url) {
    zNavPage(nav.url, 'reLaunch')
  }
}
</script>

<template>
  <CustomPage title="页脚" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="footer-container">
        <div class="footer-item">
          <z-footer content="Copyright (c) 2024-present ZGGUI" :fixed="false" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置页脚导航">
      <div class="footer-container">
        <div class="footer-item">
          <z-footer
            content="Copyright (c) 2024-present ZGGUI"
            :navigator="footerNavigator"
            :fixed="false"
            @navigator-click="navClick"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置尺寸">
      <div class="footer-container">
        <div class="footer-item">
          <z-footer
            content="Copyright (c) 2024-present ZGGUI"
            :fixed="false"
            size="small"
          />
        </div>
        <div class="footer-item">
          <z-footer
            content="Copyright (c) 2024-present ZGGUI"
            :fixed="false"
            size="normal"
          />
        </div>
        <div class="footer-item">
          <z-footer
            content="Copyright (c) 2024-present ZGGUI"
            :fixed="false"
            size="large"
          />
        </div>
        <div class="footer-item">
          <z-footer
            content="Copyright (c) 2024-present ZGGUI"
            :fixed="false"
            size="20"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="footer-container">
        <div class="footer-item">
          <z-footer
            content="Copyright (c) 2024-present ZGGUI"
            :fixed="false"
            text-color="disabled"
          />
        </div>
        <div class="footer-item">
          <z-footer
            content="Copyright (c) 2024-present ZGGUI"
            :fixed="false"
            text-color="primary"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="固定在容器的底部">
      <div class="footer-container">
        <div class="footer-item fill-height bggray5">
          <z-footer
            content="Copyright (c) 2024-present ZGGUI"
            :safeAreaInsetBottom="false"
            offset-bottom="20"
            fixed="true"
            :fixedMode="'container'"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="固定在页面的底部">
      <div class="footer-container">
        <div class="footer-item">
          <z-footer
            content="Copyright (c) 2024-present ZGGUI"
            fixed-mode="page"
            offset-bottom="20"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.footer-container {
  position: relative;
  width: 100%;

  .footer-item {
    position: relative;
    width: 100%;

    & + .footer-item {
      margin-top: 30rpx;
    }
    &.fill-height {
      height: 400rpx;
    }
  }
}
</style>
