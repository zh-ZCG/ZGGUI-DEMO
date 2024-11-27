<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

import type { WeekCalendarCustomData } from 'zgg-ui/components/z-week-calendar/index'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-week-calendar/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 周日历的值
const baseWeekCalendarValue = ref<number>()

// 指定年份和月份
const setYearMonthCalendarValue1 = ref<number>(20)
const setYearMonthCalendarValue2 = ref<number>(20)

// 设置最小最大日期
const setMinAndMaxCalendarValue = ref<number>(10)

// 自定义日历颜色
const customColorCalendarValue = ref<number>(10)

// 自定义日期下面的数据
const calendarData: WeekCalendarCustomData[] = [
  { date: 21, desc: '已签' },
  { date: 22, desc: '漏签' },
  { date: 23, desc: '已签' },
]
const customDataCalendarValue = ref<number>(16)
</script>

<template>
  <CustomPage title="周日历" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="week-calendar-container">
        <div class="week-calendar-item">
          <z-week-calendar v-model="baseWeekCalendarValue" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="指定年月周日历">
      <div class="week-calendar-container">
        <div class="week-calendar-item">
          <text class="cgray3">2024/11</text>
          <z-week-calendar
            v-model="setYearMonthCalendarValue1"
            year="2024"
            month="11"
          />
        </div>
        <div class="week-calendar-item">
          <text class="cgray3">2024/11</text>
          <z-week-calendar
            v-model="setYearMonthCalendarValue2"
            year="2024"
            month="11"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置最小最大日期">
      <div class="week-calendar-container">
        <div class="week-calendar-item">
          <z-week-calendar
            v-model="setMinAndMaxCalendarValue"
            :min-date="5"
            :max-date="20"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义颜色">
      <div class="week-calendar-container">
        <div class="week-calendar-item">
          <z-week-calendar
            v-model="customColorCalendarValue"
            :min-date="1"
            :max-date="20"
            active-bg-color="cw5"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义数据">
      <div class="week-calendar-container">
        <div class="week-calendar-item">
          <z-week-calendar
            v-model="customDataCalendarValue"
            :min-date="20"
            :max-date="30"
            :custom-data="calendarData"
          />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.week-calendar-container {
  position: relative;
  width: 100%;

  .week-calendar-item {
    position: relative;
    width: 100%;
    & + .week-calendar-item {
      margin-top: 30rpx;
    }
  }
}
</style>
