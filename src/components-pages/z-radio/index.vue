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
  path: '/components-pages/z-radio/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 当前的选中状态
const radioSelectStatus = ref(false)
// 用户选中的值
const userSelectValue = ref('男')

// 单选值
const radioValue1 = ref('')
const radioValue2 = ref('')
const radioValue3 = ref('')
const radioValue4 = ref('')
const radioValue5 = ref('')
</script>

<template>
  <CustomPage title="单选框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="radio-container">
        <div class="radio-item">
          单选框选中状态:
          <text class="cgray5">
            {{ radioSelectStatus ? '已选中' : '未选中' }}
          </text>
        </div>
        <div class="radio-item">
          <z-radio v-model="radioSelectStatus" :label="true">满300减50</z-radio>
        </div>
        <div class="radio-item">
          当前选中的值:
          <text class="cgray5">
            {{ userSelectValue || '未选择' }}
          </text>
        </div>
        <div class="radio-item">
          <z-radio-group v-model="userSelectValue">
            <z-radio label="男">男</z-radio>
            <z-radio label="女">女</z-radio>
            <z-radio label="保密">保密</z-radio>
          </z-radio-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁止点击标签选择">
      <div class="radio-container">
        <div class="radio-item">
          <z-radio-group v-model="radioValue1" label-disabled>
            <z-radio label="男">男</z-radio>
            <z-radio label="女">女</z-radio>
            <z-radio label="保密">保密</z-radio>
          </z-radio-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示边框">
      <div class="radio-container">
        <div class="radio-item">
          <z-radio-group v-model="radioValue2" border>
            <z-radio label="男">男</z-radio>
            <z-radio label="女">女</z-radio>
            <z-radio label="保密">保密</z-radio>
          </z-radio-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置尺寸">
      <div class="radio-container">
        <div class="radio-item">
          <z-radio-group v-model="radioValue3" size="small">
            <z-radio label="男">男</z-radio>
            <z-radio label="女">女</z-radio>
            <z-radio label="保密">保密</z-radio>
          </z-radio-group>
        </div>
        <div class="radio-item">
          <z-radio-group v-model="radioValue3" size="small" border>
            <z-radio label="男">男</z-radio>
            <z-radio label="女">女</z-radio>
            <z-radio label="保密">保密</z-radio>
          </z-radio-group>
        </div>
        <div class="radio-item">
          <z-radio-group v-model="radioValue3" size="large">
            <z-radio label="男">男</z-radio>
            <z-radio label="女">女</z-radio>
            <z-radio label="保密">保密</z-radio>
          </z-radio-group>
        </div>
        <div class="radio-item">
          <z-radio-group v-model="radioValue3" size="large" border>
            <z-radio label="男">男</z-radio>
            <z-radio label="女">女</z-radio>
            <z-radio label="保密">保密</z-radio>
          </z-radio-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置颜色">
      <div class="radio-container">
        <div class="radio-item">
          <z-radio-group v-model="radioValue4" active-color="primary">
            <z-radio label="男">男</z-radio>
            <z-radio label="女" active-color="warning">女</z-radio>
            <z-radio label="保密" active-color="cgray5">保密</z-radio>
          </z-radio-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="内容显示在左边">
      <div class="radio-container">
        <div class="radio-item">
          <z-radio-group v-model="radioValue5">
            <z-radio label="核心" border>
              <template #left>
                <div class="custom-left-radio">
                  <z-icon name="hexin" />
                </div>
              </template>
            </z-radio>
            <z-radio label="收藏" border>
              <template #left>
                <div class="custom-left-radio">
                  <z-icon name="star3" />
                </div>
              </template>
            </z-radio>
          </z-radio-group>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.radio-container {
  position: relative;
  width: 100%;

  .radio-item {
    position: relative;
    width: 100%;
    & + .radio-item {
      margin-top: 30rpx;
    }
  }
}

.custom-left-radio {
  font-size: 38rpx;
}
</style>
