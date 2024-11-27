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
  path: '/components-pages/z-switch/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 开关的状态
const switchStatus = ref(false)

// 开关状态的值
const switchValue1 = ref<number>(0)
const switchValue2 = ref(false)
const switchValue3 = ref(false)
const switchValue4 = ref(false)
const switchValue5 = ref(false)
const switchValue6 = ref(false)

// 拦截切换开关状态
const interceptSwitchValue = ref(false)
const interceptSwitchLoading = ref(false)
const interceptBeforeSwitch = () => {
  interceptSwitchLoading.value = true
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      uni.showToast({
        title: '权限不足，请联系管理员开启',
        icon: 'none',
      })
      interceptSwitchLoading.value = false
      reject()
    }, 2000)
  })
}
</script>

<template>
  <CustomPage title="开关" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="switch-container">
        <div class="switch-item">
          开关状态:
          <text class="cgray3_text">
            {{ switchStatus ? '开' : '关' }}
          </text>
        </div>
        <div class="switch-item df">
          <div>
            <z-switch v-model="switchStatus" />
          </div>
          <div class="" style="margin-left: 10rpx">
            <z-switch v-model="switchStatus" shape="square" />
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改激活和非激活时的值">
      <div class="switch-container">
        <div class="switch-item">
          开关不同状态的值:
          <text class="cgray3_text">
            {{ switchValue1 }}
          </text>
        </div>
        <div class="switch-item">
          <z-switch v-model="switchValue1" :inactive-value="0" active-value="1" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="加载中开关">
      <div class="switch-container">
        <div class="switch-item">
          <z-switch v-model="switchValue2" loading />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置激活和非激活时显示的文本">
      <div class="switch-container">
        <div class="switch-item">
          <z-switch v-model="switchValue3" inactive-text="关闭" active-text="打开" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置激活和非激活时显示的图标">
      <div class="switch-container">
        <div class="switch-item">
          <z-switch
            v-model="switchValue4"
            inactive-icon="star1"
            active-icon="star3"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改开关尺寸">
      <div class="switch-container">
        <div class="switch-item">
          <z-switch v-model="switchValue5" size="small" />
        </div>
        <div class="switch-item">
          <z-switch v-model="switchValue5" size="large" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改开关颜色样式">
      <div class="switch-container">
        <div class="switch-item">
          <z-switch
            v-model="switchValue6"
            active-color="error"
            inactive-color="cgray3"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="切换拦截">
      <div class="switch-container">
        <div class="switch-item">
          <z-switch
            v-model="interceptSwitchValue"
            :loading="interceptSwitchLoading"
            :before-change="interceptBeforeSwitch"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.switch-container {
  position: relative;
  width: 100%;

  .switch-item {
    position: relative;
    width: 100%;

    & + .switch-item {
      margin-top: 30rpx;
    }
  }
}
</style>
