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
  path: '/components-pages/z-cell/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="单元格" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="cell-container">
        <div class="cell-item">
          <z-line></z-line>
          <z-cell
            title="ZGGUI"
            detail="方便, 快捷"
            :titleStyle="{ color: '#409eff' }"
            leftIcon="hexin"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="插槽内容">
      <div class="cell-container">
        <div class="cell-item">
          <z-cell show title="ZGGUI" type="primary">
            <template #leftIcon>
              <text>左边插槽</text>
            </template>
            <template #rightIcon>
              <text>右边插槽</text>
            </template>
          </z-cell>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="跳转页面">
      <div class="cell-container">
        <div class="cell-item">
          <z-cell title="打开线条页" url="/components-pages/z-line/index" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义插槽">
      <div class="cell-container">
        <div class="cell-item">
          <z-cell show title="ZGGUI" type="primary">
            <template #title>
              <div class="dfr aic">
                <text>自定义</text>
                <z-tag show title="标签" plain type="warning"></z-tag>
              </div>
            </template>
          </z-cell>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.cell-container {
  position: relative;
  width: 100%;

  .cell-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & + .cell-item {
      margin-top: 30rpx;
    }

    z-cell {
      margin-left: 10rpx;
    }
  }
}
</style>
