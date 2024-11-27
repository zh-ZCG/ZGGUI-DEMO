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
  path: '/components-pages/z-tabs/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 当前选中的标签索引
const currentTabsIndex = ref(0)

// 选项卡数据
const tabsData = [
  {
    text: '关注',
    badgeConfig: {
      absolute: true,
      position: [-10, -10],
      value: 10,
    },
  },
  {
    text: '推荐',
    badgeConfig: {
      absolute: true,
      position: [-10, -10],
      value: 20,
    },
  },
  {
    text: '热榜',
    badgeConfig: {
      absolute: true,
      position: [-7, -7],
      dotSize: 5,
      dot: true,
    },
  },
  {
    text: '搞笑',
  },
  {
    text: '宠物',
    badgeConfig: {
      absolute: true,
      position: [-7, -7],
      dot: true,
      dotSize: 5,
    },
  },
  {
    text: '汽车',
  },
  {
    text: 'AI',
  },
  {
    text: '音乐',
  },
  {
    text: '电影',
  },
  {
    text: '游戏',
  },
]

// 禁止滑动标签栏数据
const noScrollTabsData = [
  {
    text: '关注',
  },
  {
    text: '推荐',
  },
  {
    text: '热榜',
  },
  {
    text: '搞笑',
  },
  {
    text: '萌宠',
  },
]

// 切换拦截事件
const interceptSwitchEvent = (index: number) => {
  return new Promise<boolean>((resolve, reject) => {
    if (index === 1) {
      uni.showToast({
        title: '选择被拦截了，请选择其他标签',
        icon: 'none',
      })
      return reject()
    }
    resolve(true)
  })
}
</script>

<template>
  <CustomPage title="标签栏" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="tabs-container">
        <div class="tabs-item">
          当前选中的标签索引:
          <text class="cgray5">{{ currentTabsIndex }}</text>
        </div>
        <div class="tabs-item">
          <z-tabs v-model="currentTabsIndex">
            <z-tabs-item
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
            />
          </z-tabs>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <div class="tabs-container">
        <div class="tabs-item">
          <z-tabs height="100" font-size="30" bar-width="60">
            <z-tabs-item
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
            />
          </z-tabs>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="tabs-container">
        <div class="tabs-item">
          <z-tabs
            bg-color="cgray5"
            color="success"
            active-color="primary"
            bar-color="error"
          >
            <z-tabs-item
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
              :active-color="index === 1 ? 'error' : ''"
            />
          </z-tabs>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁止滑动">
      <div class="tabs-container">
        <div class="tabs-item">
          <z-tabs :scroll="false">
            <z-tabs-item
              v-for="(item, index) in noScrollTabsData"
              :key="index"
              :title="item.text"
            />
          </z-tabs>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏滑块">
      <div class="tabs-container">
        <div class="tabs-item">
          <z-tabs :bar="false">
            <z-tabs-item
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
            />
          </z-tabs>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="激活后不加粗字体">
      <div class="tabs-container">
        <div class="tabs-item">
          <z-tabs :active-bold="false">
            <z-tabs-item
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
            />
          </z-tabs>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置角标">
      <div class="tabs-container">
        <div class="tabs-item">
          <z-tabs>
            <z-tabs-item
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
              :badge-config="item?.badgeConfig === undefined ? {} : item.badgeConfig"
            />
          </z-tabs>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁止第二项选择">
      <div class="tabs-container">
        <div class="tabs-item">
          <z-tabs>
            <z-tabs-item
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
              :disabled="index === 1"
            />
          </z-tabs>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="拦截第二项选择">
      <div class="tabs-container">
        <div class="tabs-item">
          <z-tabs :before-switch="interceptSwitchEvent">
            <z-tabs-item
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
            />
          </z-tabs>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.tabs-container {
  position: relative;
  width: 100%;

  .tabs-item {
    position: relative;
    width: 100%;

    & + .tabs-item {
      margin-top: 30rpx;
    }
  }
}
</style>
