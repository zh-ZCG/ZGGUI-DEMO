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
  path: '/components-pages/z-region-picker/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 基础地区选择器
const baseRegionPickerValue = ref<string[]>([])
const showBaseRegionPicker = ref(false)
const openBaseRegionPicker = () => {
  showBaseRegionPicker.value = true
}

// code默认值地区选择器
const codeDefaultRegionPickerValue = ref<string[]>(['44', '4401', '440113'])
const showCodeDefaultRegionPicker = ref(false)
const openCodeDefaultRegionPicker = () => {
  showCodeDefaultRegionPicker.value = true
}

// 地区名称默认值选择器
const nameDefaultRegionPickerValue = ref<string[]>(['广东省', '深圳市', '龙岗区'])
const showNameDefaultRegionPicker = ref(false)
const openNameDefaultRegionPicker = () => {
  showNameDefaultRegionPicker.value = true
}
</script>

<template>
  <CustomPage title="地区选择器" :is-h5-demo-page="isDemoH5Page">
    <div class="warning-tips cw5">
      <text class="fs2">提示:</text>
      <div class="fs4">
        地区选择器组件使用了附加的地区数据，需要在项目中引入地区数据，想要避免小程序过大，建议使用小程序官方的地区选择器。
      </div>
    </div>
    <DemoContainer title="基础使用">
      <div class="region-container">
        <div class="region-item">
          选中的地区:
          <text class="cgray3">
            <block v-for="(item, index) in baseRegionPickerValue" :key="index">
              {{ item }}
              {{ index === baseRegionPickerValue.length - 1 ? '' : ' - ' }}
            </block>
          </text>
        </div>
        <div class="region-item">
          <z-button size="large" type="primary" @click="openBaseRegionPicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="code默认值">
      <div class="region-container">
        <div class="region-item">
          选中的地区:
          <text class="cgray3">
            <block v-for="(item, index) in codeDefaultRegionPickerValue" :key="index">
              {{ item }}
              {{ index === codeDefaultRegionPickerValue.length - 1 ? '' : ' - ' }}
            </block>
          </text>
        </div>
        <div class="region-item">
          <z-button size="large" type="primary" @click="openCodeDefaultRegionPicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="地区名称默认值">
      <div class="region-container">
        <div class="region-item">
          选中的地区:
          <text class="cgray3">
            <block v-for="(item, index) in nameDefaultRegionPickerValue" :key="index">
              {{ item }}
              {{ index === nameDefaultRegionPickerValue.length - 1 ? '' : ' - ' }}
            </block>
          </text>
        </div>
        <div class="region-item">
          <z-button size="large" type="primary" @click="openNameDefaultRegionPicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <div class="fit-height" />
  </CustomPage>

  <!-- 基础地区选择器 -->
  <z-region-picker
    v-model="baseRegionPickerValue"
    v-model:open="showBaseRegionPicker"
  />

  <!-- code默认值地区选择器 -->
  <z-region-picker
    v-model="codeDefaultRegionPickerValue"
    v-model:open="showCodeDefaultRegionPicker"
  />

  <!-- 地区名称默认值选择器 -->
  <z-region-picker
    v-model="nameDefaultRegionPickerValue"
    v-model:open="showNameDefaultRegionPicker"
  />
</template>

<style lang="less" scoped>
.region-container {
  position: relative;
  width: 100%;

  .region-item {
    position: relative;
    width: 100%;

    & + .region-item {
      margin-top: 30rpx;
    }
  }
}

.warning-tips {
  padding-bottom: 30rpx;
}

.fit-height {
  height: 800rpx;
}
</style>
