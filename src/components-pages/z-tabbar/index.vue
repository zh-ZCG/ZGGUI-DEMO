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
  path: '/components-pages/z-tabbar/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 当前选中的导航索引
const currentTabbarIndex = ref<number>(0)

// 普通菜单数据
const normalTabbarData = [
  { text: '基础', icon: 'fuwuzujian', activeIcon: 'fuwuzujian' },
  {
    text: '组件',
    icon: 'hexin',
    activeIcon: 'hexin',
    badge: 99,
  },
  { text: 'vip', icon: 'star1', activeIcon: 'star3' },
  { text: '关于', icon: 'wo', activeIcon: 'wo' },
  {
    text: '组件',
    icon: 'hexin',
    activeIcon: 'hexin',
    badge: 99,
  },
]

// 多彩菜单数据
const colorTabbarData = [
  {
    text: '基础',
    icon: 'fuwuzujian',
    activeIcon: 'fuwuzujian',
    activeColor: 'primary',
  },
  {
    text: '组件',
    icon: 'hexin',
    activeIcon: 'hexin',
    activeColor: 'success',
  },
  {
    text: '关于',
    icon: 'wo',
    activeIcon: 'wo',
    activeColor: 'primary',
  },
]

// tabbar切换拦截
const interceptTabbarSwitch = (index: number) => {
  return new Promise<boolean>((resolve, reject) => {
    if (index === 1) {
      uni.showToast({
        title: '拦截导航切换',
        icon: 'none',
      })
      return reject()
    }
    resolve(true)
  })
}
</script>

<template>
  <CustomPage title="底部导航栏" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="tabbar-container">
        <div class="tabbar-item">
          当前选中的导航索引:
          <text class="cgray5">{{ currentTabbarIndex }}</text>
        </div>
        <div class="tabbar-item">
          <z-tabbar
            v-model="currentTabbarIndex"
            :z-index="1"
            :safe-area-inset-bottom="false"
            :fixed="false"
          >
            <z-tabbar-item
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :in-active-icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </z-tabbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <div class="tabbar-container">
        <div class="tabbar-item">
          <z-tabbar
            height="110"
            :z-index="1"
            :safe-area-inset-bottom="false"
            :fixed="false"
          >
            <z-tabbar-item
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :in-active-icon="item.icon"
              :active-icon="item.activeIcon"
              icon-size="50"
              font-size="26"
            />
          </z-tabbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="tabbar-container">
        <div class="tabbar-item">
          <z-tabbar
            inactive-color="cgray5"
            :z-index="1"
            :safe-area-inset-bottom="false"
            :fixed="false"
          >
            <z-tabbar-item
              v-for="(item, index) in colorTabbarData"
              :key="index"
              :text="item.text"
              :in-active-icon="item.icon"
              :active-icon="item.activeIcon"
              :active-color="item.activeColor"
            />
          </z-tabbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="中间凸起导航栏">
      <div class="tabbar-container">
        <div class="tabbar-item">
          <z-tabbar :z-index="1" :safe-area-inset-bottom="false" :fixed="false">
            <z-tabbar-item
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :bulge="index === 2"
              :in-active-icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </z-tabbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="带切换缩放动画">
      <div class="tabbar-container">
        <div class="tabbar-item">
          <z-tabbar
            switch-animation
            :z-index="1"
            :safe-area-inset-bottom="false"
            :fixed="false"
          >
            <z-tabbar-item
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :in-active-icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </z-tabbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="拦截第二项导航菜单">
      <div class="tabbar-container">
        <div class="tabbar-item">
          <z-tabbar
            :before-switch="interceptTabbarSwitch"
            :z-index="1"
            :safe-area-inset-bottom="false"
            :fixed="false"
          >
            <z-tabbar-item
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :in-active-icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </z-tabbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁止第二项菜单选择">
      <div class="tabbar-container">
        <div class="tabbar-item">
          <z-tabbar :z-index="1" :safe-area-inset-bottom="false" :fixed="false">
            <z-tabbar-item
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :in-active-icon="item.icon"
              :active-icon="item.activeIcon"
              :disabled="index === 1"
            />
          </z-tabbar>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="固定并显示毛玻璃效果底部导航栏">
      <div class="tabbar-container">
        <div class="tabbar-item">
          <z-tabbar fixed frosted>
            <z-tabbar-item
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :in-active-icon="item.icon"
              :active-icon="item.activeIcon"
              :badge="item?.badge || ''"
              :badge-config="{
                dot: index === 4,
              }"
            />
          </z-tabbar>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.tabbar-container {
  position: relative;
  width: 100%;

  .tabbar-item {
    position: relative;
    width: 100%;

    & + .tabbar-item {
      margin-top: 30rpx;
    }
  }
}
</style>
