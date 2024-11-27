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
  path: '/components-pages/z-swiper/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 轮播图数据
const swiperData = [
  'http://192.168.1.15/testapkwgt/mm.png',
  'http://192.168.1.15/testapkwgt/hh.png',
  'http://192.168.1.15/testapkwgt/sll.png',
  'http://192.168.1.15/testapkwgt/mm.png',
  'http://192.168.1.15/testapkwgt/hh.png',
]

const currentSwiperIndex = ref(0)
</script>

<template>
  <CustomPage title="轮播图" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="swiper-container">
        <div class="swiper-item">
          当前轮播图索引：
          <text class="cgray3">{{ currentSwiperIndex }}</text>
        </div>
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper v-model="currentSwiperIndex" :data="swiperData" loop autoplay>
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自动切换时间">
      <div class="swiper-container">
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper :data="swiperData" autoplay :interval="10000">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示指示器">
      <div class="swiper-container">
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper :data="swiperData" indicator indicator-type="line">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper :data="swiperData" indicator indicator-type="dot">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper :data="swiperData" indicator indicator-type="number">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改指示器的位置">
      <div class="swiper-container">
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper :data="swiperData" indicator indicator-position="left-top">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper :data="swiperData" indicator indicator-position="center-top">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper :data="swiperData" indicator indicator-position="right-top">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper :data="swiperData" indicator indicator-position="left-bottom">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper :data="swiperData" indicator indicator-position="center-bottom">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper :data="swiperData" indicator indicator-position="right-bottom">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改指示器颜色">
      <div class="swiper-container">
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper
              :data="swiperData"
              indicator
              indicator-bg-color="cgray3"
              indicator-active-bg-color="cgray5"
            >
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper
              :data="swiperData"
              indicator
              indicator-type="number"
              indicator-position="right-bottom"
              indicator-bg-color="rgba(1, 190, 250, 0.2)"
              indicator-text-color="#01beff"
            >
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="使用active参数处理动画">
      <div class="swiper-container">
        <div class="swiper-item">
          <div class="swiper-wrapper">
            <z-swiper :data="swiperData">
              <template #default="{ data, active }">
                <view class="swiper-data animation" :class="[{ active }]">
                  <image class="image" :src="data" mode="aspectFit" />
                </view>
              </template>
            </z-swiper>
          </div>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 100%;

  .swiper-item {
    position: relative;
    width: 100%;
    height: 100%;

    & + .swiper-item {
      margin-top: 30rpx;
    }

    .swiper-wrapper {
      position: relative;
      width: 100%;
      height: 420rpx;
      border-radius: 30rpx;
      overflow: hidden;

      .swiper-data {
        width: 100%;
        height: 100%;
        border-radius: 30rpx;
        background-color: #eeeeee;

        &.animation {
          transition: transform 0.5s linear;
          transform: scale(0.8);
        }

        &.active {
          transform: scale(1);
        }

        .image {
          width: 100%;
          height: 100%;
          border-radius: inherit;
        }
      }
    }
  }
}
</style>
