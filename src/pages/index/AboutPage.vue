<!-- AboutPage -->
<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import type { Ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'

import { onShow } from '@dcloudio/uni-app'

const pageName = 'AboutPage'

onMounted(function () {
  ready()
})

/** 准备好 */
function ready() {}

const starData = ref<{ name: string; num: string; icon: string }[]>([
  {
    name: 'click',
    num: '',
    icon: 't-icon-click',
  },
  {
    name: 'star',
    num: '',
    icon: 't-icon-star',
  },
  {
    name: 'fork',
    num: '',
    icon: 't-icon-fork',
  },
])

starData.value.forEach(elem => {
  elem.num = (Math.random() * 10000).toFixed(0).toString()
})

//常用功能数据
const funcData = ref([
  {
    isT: true,
    name: '联系客服',
    icon: 't-icon-weixin',
  },
  {
    isT: false,
    name: '问题反馈',
    icon: 'icon-fankui',
  },
  {
    isT: false,
    name: '分享给',
    icon: 'icon-fenxiang',
  },
])

function copygithub() {
  uni.setClipboardData({
    data: 'https://github.com/zh-ZCG/ZGGUI',
    success: () => {
      uni.showToast({
        title: '复制成功',
        icon: 'none',
      })
    },
    fail: err => {
      console.error('复制失败：', err)
      uni.showToast({
        title: '复制失败',
        icon: 'none',
      })
    },
  })
}
</script>

<template>
  <div class="AboutPage dfc aic">
    <div class="headerContent dfr jcc aic bgw">
      <div class="dfc jcc" style="padding: 0 40rpx; width: 255px">
        <text class="fwb fs1 cb">Hi~,欢迎使用ZGG-UI</text>
        <text class="fs3 cgray2">zgg-ui 版本：2.0.1</text>
        <div style="margin-top: 20rpx">
          <z-tag type="warning" show title="超 级 vip"></z-tag>
        </div>
      </div>
      <div class="df jcc aic" style="width: 120px">
        <z-avatar
          src="http://192.168.1.15/testapkwgt/zggui-icon.png"
          size="100"
          :mode="'aspectFit'"
        ></z-avatar>
      </div>
    </div>
    <div
      class="dfc bgw"
      style="
        width: 90%;
        border-radius: 15rpx;
        height: 200rpx;
        box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.05);
      "
    >
      <text class="fwb dfr aic fs2" style="padding-left: 20rpx; height: 70rpx">
        平台数据
      </text>
      <div class="dfr aic jcse" style="height: 130rpx">
        <div class="dfc aic pr" style="width: 30%">
          <z-count-scroll :value="starData[0].num" />
          <i
            :class="`t-icon ${starData[0].icon}`"
            style="height: 50rpx; width: 50rpx; font-size: 50rpx; margin-top: 10rpx"
          ></i>
        </div>
        <div class="dfc aic" style="width: 30%">
          <z-count-scroll :value="starData[1].num" />
          <i
            :class="`t-icon ${starData[1].icon}`"
            style="height: 50rpx; width: 50rpx; font-size: 50rpx; margin-top: 10rpx"
          ></i>
        </div>
        <div class="dfc aic pr" style="width: 30%">
          <z-count-scroll :value="starData[2].num" />
          <i
            :class="`t-icon ${starData[2].icon}`"
            style="height: 50rpx; width: 50rpx; font-size: 50rpx; margin-top: 10rpx"
          ></i>
        </div>
      </div>
    </div>
    <z-gap></z-gap>
    <div
      class="dfc bgw"
      style="
        width: 90%;
        border-radius: 15rpx;
        height: 200rpx;
        box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.05);
      "
    >
      <text class="fwb dfr aic fs2" style="padding-left: 20rpx; height: 70rpx">
        常用功能
      </text>
      <div class="dfr aic jcse" style="height: 130rpx">
        <div class="dfc aic pr" style="width: 30%">
          <i
            v-if="funcData[0].isT"
            :class="`t-icon ${funcData[0].icon}`"
            style="height: 50rpx; width: 50rpx; font-size: 50rpx; margin-top: 5rpx"
          ></i>
          <i
            v-else
            :class="`iconfont ${funcData[0].icon}`"
            class="cp5"
            style="height: 50rpx; width: 50rpx; font-size: 50rpx; margin-top: 5rpx"
          ></i>
          <text style="margin-top: 10rpx">{{ funcData[0].name }}</text>
          <button
            plain
            open-type="contact"
            class="pa"
            style="width: 100%; height: 100%; border: 0 #fff"
          ></button>
        </div>
        <div class="dfc aic" style="width: 30%">
          <i
            v-if="funcData[1].isT"
            :class="`t-icon ${funcData[1].icon}`"
            style="height: 50rpx; width: 50rpx; font-size: 50rpx; margin-top: 5rpx"
          ></i>
          <i
            v-else
            :class="`iconfont ${funcData[1].icon}`"
            class="cp5"
            style="height: 50rpx; width: 50rpx; font-size: 50rpx; margin-top: 5rpx"
          ></i>
          <text style="margin-top: 10rpx">{{ funcData[1].name }}</text>
        </div>
        <div class="dfc aic pr" style="width: 30%">
          <i
            v-if="funcData[2].isT"
            :class="`t-icon ${funcData[2].icon}`"
            style="height: 50rpx; width: 50rpx; font-size: 50rpx; margin-top: 5rpx"
          ></i>
          <i
            v-else
            :class="`iconfont ${funcData[2].icon}`"
            class="cp5"
            style="height: 50rpx; width: 50rpx; font-size: 50rpx; margin-top: 5rpx"
          ></i>
          <text style="margin-top: 10rpx">{{ funcData[2].name }}</text>
          <button
            plain
            open-type="share"
            class="pa"
            style="width: 100%; height: 100%; border: 0 #fff"
          ></button>
        </div>
      </div>
    </div>
    <z-gap></z-gap>
    <div
      style="
        height: 100rpx;
        width: 90%;
        border-radius: 15rpx;
        box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.05);
      "
      class="dfr aic"
      @tap.stop="copygithub"
    >
      <i
        class="iconfont icon-github"
        style="font-size: 40rpx; margin-left: 20rpx"
      ></i>
      <div style="margin-left: 10rpx">代码地址</div>
    </div>
    <z-gap></z-gap>
    <div
      style="
        height: 100rpx;
        width: 90%;
        border-radius: 15rpx;
        box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.05);
      "
      class="dfr aic"
      @tap.stop="copygithub"
    >
      <i
        class="iconfont icon-anquan cw5"
        style="font-size: 40rpx; margin-left: 20rpx"
      ></i>
      <div style="margin-left: 10rpx">用户协议</div>
    </div>
    <z-gap></z-gap>
    <div
      style="
        height: 100rpx;
        width: 90%;
        border-radius: 15rpx;
        box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.05);
      "
      class="dfr aic"
      @tap.stop="copygithub"
    >
      <i
        class="iconfont icon-daimamoban cp5"
        style="font-size: 40rpx; margin-left: 20rpx"
      ></i>
      <div style="margin-left: 10rpx">开发日志</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.AboutPage {
  min-height: 100vh;
  width: 100%;
  .headerContent {
    width: 100%;
    height: 400rpx;
    box-shadow: 0 5 10 10 rgba(0, 0, 0, 0.5);
    margin-top: 50rpx;
  }
}
</style>
