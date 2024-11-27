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
  path: '/components-pages/z-date-time-picker/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 选择年月日
const dateDateTimePickerValue = ref('')
const showDateDateTimePicker = ref(false)
const openDateDateTimePicker = () => {
  showDateDateTimePicker.value = true
}

// 选择年月
const yearMonthDateTimePickerValue = ref('')
const showYearMonthDateTimePicker = ref(false)
const openYearMonthDateTimePicker = () => {
  showYearMonthDateTimePicker.value = true
}

// 选择时间
const timeDateTimePickerValue = ref('')
const showTimeDateTimePicker = ref(false)
const openTimeDateTimePicker = () => {
  showTimeDateTimePicker.value = true
}

// 选择日期时间
const dateTimeDateTimePickerValue = ref('')
const showDateTimeDateTimePicker = ref(false)
const openDateTimeDateTimePicker = () => {
  showDateTimeDateTimePicker.value = true
}

// 选择格式化后日期时间
const formatDateTimeDateTimePickerValue = ref('')
const showFormatDateTimeDateTimePicker = ref(false)
const openFormatDateTimeDateTimePicker = () => {
  showFormatDateTimeDateTimePicker.value = true
}
</script>

<template>
  <CustomPage title="日期时间选择器" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="选择年月日">
      <div class="date-time-picker-container">
        <div class="date-time-picker-item">
          当前选中的日期时间:
          <text class="cgray3">
            {{ dateDateTimePickerValue }}
          </text>
        </div>
        <div class="date-time-picker-item">
          <z-button size="large" type="primary" @click="openDateDateTimePicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="选择年月">
      <div class="date-time-picker-container">
        <div class="date-time-picker-item">
          当前选中的日期时间:
          <text class="cgray3">
            {{ yearMonthDateTimePickerValue }}
          </text>
        </div>
        <div class="date-time-picker-item">
          <z-button size="large" type="primary" @click="openYearMonthDateTimePicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="选择时间">
      <div class="date-time-picker-container">
        <div class="date-time-picker-item">
          当前选中的日期时间:
          <text class="cgray3">
            {{ timeDateTimePickerValue }}
          </text>
        </div>
        <div class="date-time-picker-item">
          <z-button size="large" type="primary" @click="openTimeDateTimePicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="选择日期时间">
      <div class="date-time-picker-container">
        <div class="date-time-picker-item">
          当前选中的日期时间:
          <text class="cgray3">
            {{ dateTimeDateTimePickerValue }}
          </text>
        </div>
        <div class="date-time-picker-item">
          <z-button size="large" type="primary" @click="openDateTimeDateTimePicker">
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="选择格式化日期时间">
      <div class="date-time-picker-container">
        <div class="date-time-picker-item">
          当前选中的日期时间:
          <text class="cgray3">
            {{ formatDateTimeDateTimePickerValue }}
          </text>
        </div>
        <div class="date-time-picker-item">
          <z-button
            size="large"
            type="primary"
            @click="openFormatDateTimeDateTimePicker"
          >
            打开选择器
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <div class="fit-height" />
  </CustomPage>

  <!-- 选择日期选择器 -->
  <z-date-time-picker
    v-model="dateDateTimePickerValue"
    v-model:open="showDateDateTimePicker"
    mode="date"
    min-time="2020/11/15"
    max-time="2025/11/15"
  />

  <!-- 选择年月选择器 -->
  <z-date-time-picker
    v-model="yearMonthDateTimePickerValue"
    v-model:open="showYearMonthDateTimePicker"
    mode="yearmonth"
    min-time="2020/10"
    max-time="2025/12"
  />

  <!-- 选择时间选择器 -->
  <z-date-time-picker
    v-model="timeDateTimePickerValue"
    v-model:open="showTimeDateTimePicker"
    mode="time"
    min-time="06:30:00"
    max-time="12:30:00"
  />

  <!-- 选择日期时间选择器 -->
  <z-date-time-picker
    v-model="dateTimeDateTimePickerValue"
    v-model:open="showDateTimeDateTimePicker"
    mode="datetime"
    min-time="2020/11/15 10:28:10"
    max-time="2025/11/15 10:28:10"
  />

  <!-- 选择格式化日期时间选择器 -->
  <z-date-time-picker
    v-model="formatDateTimeDateTimePickerValue"
    v-model:open="showFormatDateTimeDateTimePicker"
    mode="datetime"
    min-time="2020-11-15 10:28"
    max-time="2025-11-15 10:28"
    format="YYYY-MM-DD HH:mm"
  />
</template>

<style lang="less" scoped>
.date-time-picker-container {
  position: relative;
  width: 100%;

  .date-time-picker-item {
    position: relative;
    width: 100%;

    & + .date-time-picker-item {
      margin-top: 30rpx;
    }
  }
}

.fit-height {
  height: 800rpx;
}
</style>
