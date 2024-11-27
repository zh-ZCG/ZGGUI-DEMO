<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { KeyboardMode } from 'zgg-ui/components/z-keyboard/index'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-keyboard/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 打开键盘
const openKeyboard = ref<boolean>(false)
// 键盘模式
const keyboardMode = ref<KeyboardMode>('number')

// 键盘输入的值
const inputValue = ref('')

// 重置输入的值
const resetValue = () => {
  inputValue.value = ''
}

// 键盘关闭事件
const onKeyboardClose = () => {
  resetValue()
}

// 打开数字键盘
const openNumberKeyboard = () => {
  keyboardMode.value = 'number'
  openKeyboard.value = true
}
// 打开带小数点数字键盘
const openDigitKeyboard = () => {
  keyboardMode.value = 'digit'
  openKeyboard.value = true
}
// 打开随机数字键盘
const openRandomKeyboard = () => {
  keyboardMode.value = 'random'
  openKeyboard.value = true
}
// 打开身份证键盘
const openIdcardKeyboard = () => {
  keyboardMode.value = 'idcard'
  openKeyboard.value = true
}
// 打开车牌键盘
const openCarKeyboard = () => {
  keyboardMode.value = 'car'
  openKeyboard.value = true
}
</script>

<template>
  <CustomPage title="软键盘" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="键盘输入的值">
      <div class="keyboard-container">
        <div class="keyboard-item">
          键盘输入的值:
          <text class="cgray3">{{ inputValue }}</text>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="打开数字键盘">
      <div class="keyboard-container">
        <div class="keyboard-item">
          <z-button size="large" type="primary" @click="openNumberKeyboard">
            打开数字键盘
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="打开带小数点数字键盘">
      <div class="keyboard-container">
        <div class="keyboard-item">
          <z-button size="large" type="primary" @click="openDigitKeyboard">
            打开带小数点数字键盘
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="打开随机数字键盘">
      <div class="keyboard-container">
        <div class="keyboard-item">
          <z-button size="large" type="primary" @click="openRandomKeyboard">
            打开随机位置键盘
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="打开身份证键盘">
      <div class="keyboard-container">
        <div class="keyboard-item">
          <z-button size="large" type="primary" @click="openIdcardKeyboard">
            打开身份证键盘
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="打开车牌键盘">
      <div class="keyboard-container">
        <div class="keyboard-item">
          <z-button size="large" type="primary" @click="openCarKeyboard">
            打开车牌键盘
          </z-button>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>

  <z-keyboard
    v-model="inputValue"
    v-model:show="openKeyboard"
    :mode="keyboardMode"
    @close="onKeyboardClose"
  />
</template>

<style lang="less" scoped>
.keyboard-container {
  position: relative;
  width: 100%;

  .keyboard-item {
    position: relative;
    width: 100%;

    & + .keyboard-item {
      margin-top: 30rpx;
    }
  }
}
</style>
