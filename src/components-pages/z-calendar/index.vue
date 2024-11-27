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
  path: '/components-pages/z-calendar/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 日历的值
const baseCalendarValue = ref('')
const lunarCalendarValue = ref('')

// 多选日期
const multiCalendarValue = ref<string[]>(['2023/06/20', '2023/06/21'])

// 选择时间范围
const rangeCalendarValue = ref<string[]>(['2023/06/01', '2023/07/30'])

// 修改颜色和文案
const customColorCalendarValue = ref('')
const customColorRangeCalendarValue = ref<string[]>(['2023/06/01', '2023/07/30'])

// 在弹出框中选择日期
const popupCalendarValue = ref('')
const showCalendarPopup = ref(false)
const openCalendarPopup = () => {
  showCalendarPopup.value = true
}
const closeCalendarPopup = () => {
  showCalendarPopup.value = false
}
</script>

<template>
  <CustomPage title="日历" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="calendar-container">
        <div class="calendar-item">
          当前选中的日期:
          <text class="cgray3">{{ baseCalendarValue }}</text>
        </div>
        <div class="calendar-item">
          <z-calendar v-model="baseCalendarValue" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示农历">
      <div class="calendar-container">
        <div class="calendar-item">
          <z-calendar v-model="lunarCalendarValue" show-lunar />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="多选日期">
      <div class="calendar-container">
        <div class="calendar-item">
          当前选中的日期:
          <text class="cgray3 item-value">[{{ multiCalendarValue.join(',') }}]</text>
        </div>
        <div class="calendar-item">
          <z-calendar
            v-model="multiCalendarValue"
            mode="multi"
            min-date="2023/06/01"
            max-date="2023/06/30"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="选择日期范围">
      <div class="calendar-container">
        <div class="calendar-item">
          当前选中的日期:
          <text class="cgray3 item-value">[{{ rangeCalendarValue.join(',') }}]</text>
        </div>
        <div class="calendar-item">
          <z-calendar
            v-model="rangeCalendarValue"
            mode="range"
            min-date="2023/05/01"
            max-date="2023/10/01"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改选中的颜色">
      <div class="calendar-container">
        <div class="calendar-item">
          <z-calendar
            v-model="customColorCalendarValue"
            active-bg-color="cw5"
            active-text-color="disabled"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改选中的颜色和文案">
      <div class="calendar-container">
        <div class="calendar-item">
          <z-calendar
            v-model="customColorRangeCalendarValue"
            mode="range"
            min-date="2023/05/01"
            max-date="2023/10/01"
            active-bg-color="cw5"
            active-text-color="disabled"
            range-bg-color="cw5"
            range-start-desc="入场"
            range-end-desc="离场"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="配合popup使用">
      <div class="calendar-container">
        <div class="calendar-item">
          当前选中的日期:
          <text class="cgray3">{{ popupCalendarValue }}</text>
        </div>
        <div class="calendar-item">
          <z-button type="primary" @click="openCalendarPopup">选择日期</z-button>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>

  <z-popup v-model="showCalendarPopup" open-direction="bottom">
    <div class="" style="padding-top: 10rpx">
      <z-calendar :restart="showCalendarPopup" v-model="popupCalendarValue" />
    </div>
    <div class="" style="padding: 10rpx 0">
      <z-button
        font-size="36"
        custom-class="popup-calendar-button"
        type="primary"
        @click="closeCalendarPopup"
      >
        选择所选日期
      </z-button>
    </div>
  </z-popup>
</template>

<style lang="less" scoped>
.calendar-container {
  position: relative;
  width: 100%;

  .calendar-item {
    position: relative;
    width: 100%;

    & + .calendar-item {
      margin-top: 30rpx;
    }

    .item-value {
      word-break: break-all;
    }
  }
}

.popup-calendar-button {
  margin: 0rpx 30rpx;
  width: calc(100% - 60rpx) !important;
  padding: 20rpx 30rpx !important;
}
</style>
