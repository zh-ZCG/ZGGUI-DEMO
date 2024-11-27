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
  path: '/components-pages/z-input/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 输入框输入的值
const inputValue = ref('')

// 配合picker进行使用
const pickerData = ['选项一', '选项二']
const pickerValue = ref('')
const showPicker = ref(false)
const openPicker = () => {
  showPicker.value = true
}
</script>

<template>
  <CustomPage title="输入框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="input-container">
        <div class="input-item">
          您输入的值:
          <text class="cgray5">{{ inputValue }}</text>
        </div>
        <div class="input-item">
          <z-input v-model="inputValue" placeholder="输入搜索内容" focus />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="输入框尺寸">
      <div class="input-container">
        <div class="input-item">
          <z-input placeholder="请输入需要搜索的内容" size="small" />
        </div>
        <div class="input-item">
          <z-input placeholder="请输入需要搜索的内容" size="large" />
        </div>
        <div class="input-item">
          <z-input
            placeholder="请输入需要搜索的内容"
            height="100"
            :other-style="{ fontSize: '40rpx' }"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置边框样式">
      <div class="input-container">
        <div class="input-item bggray5">
          <z-input placeholder="请输入需要搜索的内容" :border="false" />
        </div>
        <div class="input-item">
          <z-input placeholder="请输入需要搜索的内容" border-color="cgray5" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示下划线输入框">
      <div class="input-container">
        <div class="input-item">
          <z-input placeholder="请输入需要搜索的内容" underline />
        </div>
        <div class="input-item">
          <z-input
            placeholder="请输入需要搜索的内容"
            underline
            border-color="disbaled"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="对齐方式">
      <div class="input-container">
        <div class="input-item">
          <z-input placeholder="请输入需要搜索的内容" text-align="center" />
        </div>
        <div class="input-item">
          <z-input placeholder="请输入需要搜索的内容" text-align="right" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示清除按钮">
      <div class="input-container">
        <div class="input-item">
          <z-input placeholder="请输入需要搜索的内容" clearable />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置输入框右边显示的图标">
      <div class="input-container">
        <div class="input-item">
          <z-input
            placeholder="请输入需要搜索的内容"
            clearable
            right-icon="fire-fill"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="普通输入框类型">
      <SubContainer title="整数输入框">
        <z-input type="number" />
      </SubContainer>
      <SubContainer title="小数输入框">
        <z-input type="digit" />
      </SubContainer>
      <SubContainer title="身份证输入框">
        <z-input type="idcard" />
      </SubContainer>
    </DemoContainer>
    <DemoContainer title="文本域">
      <SubContainer title="基本使用">
        <z-input type="textarea" placeholder="请输入评论内容" />
      </SubContainer>
      <SubContainer title="设置文本框高度">
        <z-input
          type="textarea"
          placeholder="请输入评论内容"
          height="250"
          clearable
        />
      </SubContainer>
      <SubContainer title="设置为换行按钮">
        <z-input
          type="textarea"
          placeholder="请输入评论内容"
          height="250"
          clearable
          confirm-type=""
        />
      </SubContainer>
      <SubContainer title="设置尺寸">
        <z-input type="textarea" placeholder="请输入评论内容" size="large" />
      </SubContainer>
      <SubContainer title="设置对齐方式">
        <z-input type="textarea" placeholder="请输入评论内容" text-align="center" />
      </SubContainer>
      <SubContainer title="显示字数统计">
        <z-input
          type="textarea"
          placeholder="请输入评论内容"
          height="250"
          :maxlength="200"
          clearable
          show-word-limit
        />
      </SubContainer>
    </DemoContainer>
    <DemoContainer title="密码输入框">
      <SubContainer title="基本使用">
        <z-input type="password" placeholder="请输入密码" />
      </SubContainer>
      <SubContainer title="隐藏显示密码按钮">
        <z-input type="password" placeholder="请输入密码" :show-password="false" />
      </SubContainer>
    </DemoContainer>
    <DemoContainer title="自定义输入框前后插槽内容">
      <div class="input-container">
        <div class="input-item">
          <z-input placeholder="请输入手机号码" clearable>
            <template #prefix>
              <div class="custom-input-prefix">+86</div>
            </template>
            <template #suffix>
              <div class="custom-input-suffix cw bgp5" style="margin-left: 10rpx">
                <z-button type="primary">获取验证码</z-button>
              </div>
            </template>
          </z-input>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="配合picker进行使用">
      <div class="input-container">
        <div class="input-item">
          <z-input
            v-model="pickerValue"
            type="select"
            placeholder="请选择需要使用操作选项"
            @click="openPicker"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>

  <z-picker v-model="pickerValue" v-model:open="showPicker" :data="pickerData" />
</template>

<style lang="less" scoped>
.input-container {
  position: relative;
  width: 100%;

  .input-item {
    position: relative;
    width: 100%;

    & + .input-item {
      margin-top: 30rpx;
    }
  }
}

.custom-input-prefix {
  line-height: 1;
  padding-right: 20rpx;
}
.custom-input-suffix {
  border-radius: 15rpx;
}
</style>
