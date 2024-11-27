<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'
import SubContainer from '@/components/subContainer.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-code-input/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 验证码的值
const codeValue = ref('')

const verifyCodeCompleteHandle = () => {
  uni.hideKeyboard()
  uni.showToast({
    title: '验证码输入完成',
    icon: 'none',
  })
}
</script>

<template>
  <CustomPage title="验证码输入" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="code-input-container">
        <div class="code-input-item">
          输入验证码的值:
          <text class="cgray3">{{ codeValue }}</text>
        </div>
        <div class="code-input-item">
          <z-code-input v-model="codeValue" @complete="verifyCodeCompleteHandle" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置验证码长度">
      <div class="code-input-container">
        <div class="code-input-item">
          <z-code-input :focus="false" :length="6" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏输入值">
      <div class="code-input-container">
        <div class="code-input-item">
          <z-code-input :focus="false" password />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置验证码提示框大小">
      <div class="code-input-container">
        <div class="code-input-item">
          <z-code-input :focus="false" width="60" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置提示框的类型">
      <SubContainer title="边框">
        <div class="code-input-container">
          <div class="code-input-item">
            <z-code-input :focus="false" input-type="border" />
          </div>
        </div>
      </SubContainer>
      <SubContainer title="边框带竖线">
        <div class="code-input-container">
          <div class="code-input-item">
            <z-code-input :focus="false" input-type="border-vline" />
          </div>
        </div>
      </SubContainer>
      <SubContainer title="边框带横线">
        <div class="code-input-container">
          <div class="code-input-item">
            <z-code-input :focus="false" input-type="border-hline" />
          </div>
        </div>
      </SubContainer>
      <SubContainer title="底部横线">
        <div class="code-input-container">
          <div class="code-input-item">
            <z-code-input :focus="false" input-type="bottom-hline" />
          </div>
        </div>
      </SubContainer>
      <SubContainer title="居中横线">
        <div class="code-input-container">
          <div class="code-input-item">
            <z-code-input :focus="false" input-type="middle-hline" />
          </div>
        </div>
      </SubContainer>
      <SubContainer title="居中竖线">
        <div class="code-input-container">
          <div class="code-input-item">
            <z-code-input :focus="false" input-type="middle-vline" />
          </div>
        </div>
      </SubContainer>
    </DemoContainer>
    <DemoContainer title="设置验证码提示框样式">
      <div class="code-input-container">
        <div class="code-input-item">
          <z-code-input :focus="false" inactive-color="cs3" active-color="cs5" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.code-input-container {
  position: relative;
  width: 100%;

  .code-input-item {
    position: relative;
    width: 100%;

    & + .code-input-item {
      margin-top: 30rpx;
    }
  }
}
</style>
