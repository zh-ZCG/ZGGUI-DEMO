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
  path: '/components-pages/z-picker/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 单值数组数据选择器
const singlePickerValue = ref()
const showSinglePicker = ref(false)
const openSinglePicker = () => {
  showSinglePicker.value = true
}

// 单值对象数组数据选择器
const singlePickerObjectValue = ref()
const showSingleObjectPicker = ref(false)
const openSingleObjectPicker = () => {
  showSingleObjectPicker.value = true
}

// 多值数组数据选择器
const multiPickerValue = ref()
const showMultiPicker = ref(false)
const openMultiPicker = () => {
  showMultiPicker.value = true
}

// 多值对象数组数据选择器
const multiPickerObjectValue = ref()
const showMultiObjectPicker = ref(false)
const openMultiObjectPicker = () => {
  showMultiObjectPicker.value = true
}

// 联动选择器
const linkagePickerValue = ref()
const showLinkagePicker = ref(false)
const openLinkagePicker = () => {
  showLinkagePicker.value = true
}

/**展示数据 */
// 单列picker选择器数据
const singlePickerData = [
  '设计模板A',
  '设计模板B',
  '设计模板C',
  '设计模板D',
  '设计模板E',
]
const singlePickerObjectData = [
  { label: '设计模板A', value: 1 },
  { label: '设计模板B', value: 2 },
  { label: '设计模板C', value: 3 },
  { label: '设计模板D', value: 4 },
  { label: '设计模板E', value: 5 },
]

// 多列picker选择器数据
const multiPickerData = [
  ['白班', '夜班'],
  ['30分钟', '1小时', '2小时', '4小时'],
  ['单人', '双人', '多人'],
  ['现金结算', '电子结算'],
]
const multiPickerObjectData = [
  [
    { label: '白班', value: 1 },
    { label: '夜班', value: 2 },
  ],
  [
    { label: '30分钟', value: 10 },
    { label: '1小时', value: 20 },
    { label: '2小时', value: 30 },
    { label: '4小时', value: 40 },
  ],
  [
    { label: '单人', value: 100 },
    { label: '双人', value: 200 },
    { label: '多人', value: 300 },
  ],
  [
    { label: '现金结算', value: 1000 },
    { label: '电子结算', value: 2000 },
  ],
]

// 多列联动选择器数据
const linkageData = [
  {
    label: '研发部',
    value: 1,
    children: [
      {
        label: '前端团队',
        value: 11,
        children: [
          {
            label: 'UI设计组',
            value: 111,
            children: [
              {
                label: 'UI设计1组',
                value: 1111,
              },
              {
                label: 'UI设计2组',
                value: 1112,
              },
            ],
          },
          {
            label: '开发组',
            value: 112,
          },
          {
            label: '测试组',
            value: 113,
          },
        ],
      },
      {
        label: '后端团队',
        value: 12,
        children: [
          {
            label: 'API开发组',
            value: 121,
          },
          {
            label: '数据管理组',
            value: 122,
          },
        ],
      },
    ],
  },
  {
    label: '市场部',
    value: 2,
    children: [
      {
        label: '国内市场',
        value: 21,
        children: [
          {
            label: '北区',
            value: 211,
          },
          {
            label: '南区',
            value: 212,
          },
        ],
      },
      {
        label: '国际市场',
        value: 22,
        children: [
          {
            label: '亚太区',
            value: 221,
          },
          {
            label: '欧美区',
            value: 222,
          },
        ],
      },
    ],
  },
  {
    label: '行政部',
    value: 3,
    children: [
      {
        label: '人力资源',
        value: 31,
        children: [
          {
            label: '招聘组',
            value: 311,
          },
          {
            label: '培训组',
            value: 312,
          },
        ],
      },
      {
        label: '财务组',
        value: 32,
        children: [
          {
            label: '薪酬管理',
            value: 321,
          },
          {
            label: '成本控制',
            value: 322,
          },
        ],
      },
    ],
  },
]
</script>

<template>
  <CustomPage title="Picker选择器" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="单列选择器-单值数组数据">
      <div class="picker-container">
        <div class="picker-item">
          当前选中的值:
          <text class="cgray3">{{ singlePickerValue }}</text>
        </div>
        <div class="picker-item">
          <z-button size="large" type="primary" @click="openSinglePicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="单列选择器-单值对象数组数据">
      <div class="picker-container">
        <div class="picker-item">
          当前选中的值:
          <text class="cgray3">{{ singlePickerObjectValue }}</text>
        </div>
        <div class="picker-item">
          <z-button size="large" type="primary" @click="openSingleObjectPicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="多列选择器-多值数组数据">
      <div class="picker-container">
        <div class="picker-item">
          当前选中的值:
          <text class="cgray3">
            {{ multiPickerValue?.[0] || '' }} - {{ multiPickerValue?.[1] || '' }} -
            {{ multiPickerValue?.[2] || '' }} -
            {{ multiPickerValue?.[3] || '' }}
          </text>
        </div>
        <div class="picker-item">
          <z-button size="large" type="primary" @click="openMultiPicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="多列选择器-多值对象数组数据">
      <div class="picker-container">
        <div class="picker-item">
          当前选中的值:
          <text class="cgray3">
            {{ multiPickerObjectValue?.[0] || '' }} -
            {{ multiPickerObjectValue?.[1] || '' }} -
            {{ multiPickerObjectValue?.[2] || '' }} -
            {{ multiPickerObjectValue?.[3] || '' }}
          </text>
        </div>
        <div class="picker-item">
          <z-button size="large" type="primary" @click="openMultiObjectPicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="联动选择器">
      <div class="picker-container">
        <div class="picker-item">
          当前选中的值:
          <text class="cgray3">
            {{ linkagePickerValue?.[0] || '' }} -
            {{ linkagePickerValue?.[1] || '' }} -
            {{ linkagePickerValue?.[2] || '' }} -
            {{ linkagePickerValue?.[3] || '' }}
          </text>
        </div>
        <div class="picker-item">
          <z-button size="large" type="primary" @click="openLinkagePicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <div class="fit-bottom" />
  </CustomPage>

  <!-- 单值数组 -->
  <z-picker
    v-model="singlePickerValue"
    v-model:open="showSinglePicker"
    :data="singlePickerData"
  />

  <!-- 单值对象数组 -->
  <z-picker
    v-model="singlePickerObjectValue"
    v-model:open="showSingleObjectPicker"
    :data="singlePickerObjectData"
  />

  <!-- 多值数组 -->
  <z-picker
    v-model="multiPickerValue"
    v-model:open="showMultiPicker"
    :data="multiPickerData"
  />

  <!-- 多值对象数组 -->
  <z-picker
    v-model="multiPickerObjectValue"
    v-model:open="showMultiObjectPicker"
    :data="multiPickerObjectData"
    :show-cancel="false"
  />

  <!-- 联动选择器 -->
  <z-picker
    v-model="linkagePickerValue"
    v-model:open="showLinkagePicker"
    :data="linkageData"
    confirm-text="选择班级"
    confirm-color="success"
  />
</template>

<style lang="less" scoped>
.picker-container {
  position: relative;
  width: 100%;

  .picker-item {
    position: relative;
    width: 100%;

    & + .picker-item {
      margin-top: 30rpx;
    }
  }
}

.fit-bottom {
  height: 200rpx;
}
</style>
