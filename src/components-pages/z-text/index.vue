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
  path: '/components-pages/z-text/index',
})
const { isDemoH5Page } = useDemoH5Page()

const clickHandler = () => {
  // #ifndef MP-WEIXIN
  uni.showToast({
    title: '请使用微信小程序查看效果',
  })
  // #endif
}
</script>

<template>
  <CustomPage title="文本" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="text-container">
        <div class="text-item">
          <z-text text="ZGG" type="primary" />
          <z-text text="ZGG" type="success" />
          <z-text text="ZGG" type="error" />
          <z-text text="ZGG" type="warning" />
          <z-text text="ZGG" type="info" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置大小">
      <div class="text-container">
        <div class="text-item">
          <z-text text="ZGG" type="primary" :size="'14'" />
          <z-text text="ZGG" type="success" :size="'16'" />
          <z-text text="ZGG" type="error" :size="'18'" />
          <z-text text="ZGG" type="warning" :size="'20'" />
          <z-text text="ZGG" type="info" :size="'22'" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="是否加粗">
      <div class="text-container">
        <div class="text-item">
          <z-text text="ZGG" type="primary" :size="'14'" />
          <z-text text="ZGG" type="success" :size="'16'" bold />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置前后图标">
      <div class="text-container">
        <div class="text-item">
          <z-text text="ZGG" type="primary" :size="'14'" :prefixIcon="'fuwuzujian'" />
          <z-text text="ZGG" type="success" :size="'16'" :suffixIcon="'hexin'" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示行数，超出省略">
      <div class="text-container">
        <div class="text-item">
          <z-text
            text="少小离家老大回，乡音无改鬓毛衰。儿童相见不相识，笑问客从何处来。"
            type="primary"
            :size="'14'"
            :lines="1"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="拨打电话">
      <div class="text-container">
        <div class="text-item">
          <z-text
            text="8208208820"
            type="info"
            :size="'14'"
            :lines="1"
            mode="phone"
            call
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="名字脱敏">
      <div class="text-container">
        <div class="text-item">
          <z-text
            text="赵一二"
            type="primary"
            :size="'14'"
            :lines="1"
            mode="name"
            format="encrypt"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="金额展示">
      <div class="text-container">
        <div class="text-item">
          <z-text text="8888.88" type="error" :size="'14'" :lines="1" mode="price" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="日期格式化">
      <div class="text-container">
        <div class="text-item">
          <z-text
            text="1729061513000"
            type="info"
            :size="'14'"
            :lines="1"
            mode="date"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="超链接">
      <div class="text-container">
        <div class="text-item">
          <z-text
            href="https://ui.zcgnav.cn/"
            text="跳转主页"
            type="warning"
            :size="'14'"
            :lines="1"
            mode="link"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="小程序开放能力">
      <div class="text-container">
        <div class="text-item">
          <z-text
            text="分享到微信"
            openType="share"
            type="success"
            @click="clickHandler"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.text-container {
  position: relative;
  width: 100%;

  .text-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .text-item {
      margin-top: 30rpx;
    }

    z-text {
      margin-left: 10rpx;
    }
  }
}
</style>
