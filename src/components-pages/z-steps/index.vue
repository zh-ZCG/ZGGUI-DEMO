<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useUniAppSystemRectInfo } from 'zgg-ui/libs/use-uniapp-system-rect-info/use-uniapp-system-rect-info'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-steps/index',
})
const { isDemoH5Page } = useDemoH5Page()
const { navBarInfo } = useUniAppSystemRectInfo()

// 当前选中的标签索引
const currentStepIndex = ref(0)

// 步骤条数据
const stepsData = [
  {
    title: '步骤一',
    icon: 'hexin',
    activeIcon: 'hexin',
  },
  {
    title: '步骤二',
    icon: 'wo',
    activeIcon: 'wo',
    color: 'error',
    activeColor: 'success',
  },
  {
    title: '步骤三',
    icon: 'star1',
    activeIcon: 'star3',
    color: 'warning',
    activeColor: 'primary',
  },
  {
    title: '步骤四',
    icon: 'fuwuzujian',
    activeIcon: 'fuwuzujian',
    color: 'disabled',
    activeColor: 'primary',
  },
]

// 上一步
const prevStep = () => {
  if (currentStepIndex.value < 0) {
    currentStepIndex.value = 3
    return
  }
  currentStepIndex.value--
}
// 下一步
const nextStep = () => {
  currentStepIndex.value++
  if (currentStepIndex.value > 3) {
    currentStepIndex.value = -1
    return
  }
}
</script>

<template>
  <CustomPage title="步骤条" :is-h5-demo-page="isDemoH5Page">
    <div class="steps-operation" :style="{ top: `${navBarInfo.height + 20}px` }">
      <div class="prev">
        <z-button size="lg" @click="prevStep">上一步</z-button>
      </div>
      <div class="prev">
        <z-button size="lg" @click="nextStep">下一步</z-button>
      </div>
    </div>
    <div class="placeholder-top" />
    <DemoContainer title="基础使用">
      <div class="steps-container">
        <div class="steps-item">
          当前所在步骤:
          <text class="cgray4">{{ currentStepIndex }}</text>
        </div>
        <div class="steps-item">
          <z-steps v-model="currentStepIndex">
            <z-steps-item
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
            />
          </z-steps>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁止点击选中步骤">
      <div class="steps-container">
        <div class="steps-item">
          <z-steps v-model="currentStepIndex" disabled>
            <z-steps-item
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
            />
          </z-steps>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="steps-container">
        <div class="steps-item">
          <z-steps v-model="currentStepIndex" color="error" active-color="success">
            <z-steps-item
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :color="item?.color || ''"
              :active-color="item?.activeColor || ''"
            />
          </z-steps>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="数值模式">
      <div class="steps-container">
        <div class="steps-item">
          <z-steps v-model="currentStepIndex" mode="number">
            <z-steps-item
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
            />
          </z-steps>
        </div>
        <div class="steps-item">
          <z-steps
            v-model="currentStepIndex"
            mode="number"
            color="error"
            active-color="success"
          >
            <z-steps-item
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :color="item?.color || ''"
              :active-color="item?.activeColor || ''"
            />
          </z-steps>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="点图标模式">
      <div class="steps-container">
        <div class="steps-item">
          <z-steps v-model="currentStepIndex" mode="dotIcon">
            <z-steps-item
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </z-steps>
        </div>
        <div class="steps-item">
          <z-steps
            v-model="currentStepIndex"
            mode="dotIcon"
            color="disabled"
            active-color="primary"
          >
            <z-steps-item
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :color="item?.color || ''"
              :active-color="item?.activeColor || ''"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </z-steps>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="图标模式">
      <div class="steps-container">
        <div class="steps-item">
          <z-steps v-model="currentStepIndex" mode="icon">
            <z-steps-item
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </z-steps>
        </div>
        <div class="steps-item">
          <z-steps
            v-model="currentStepIndex"
            mode="icon"
            color="disabled"
            active-color="primary"
          >
            <z-steps-item
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :color="item?.color || ''"
              :active-color="item?.activeColor || ''"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </z-steps>
        </div>
        <div class="steps-item">
          <z-steps
            v-model="currentStepIndex"
            mode="icon"
            color="disabled"
            active-color="primary"
          >
            <z-steps-item
              v-for="(item, index) in stepsData"
              :key="index"
              :color="item?.color || ''"
              :active-color="item?.activeColor || ''"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </z-steps>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.steps-container {
  position: relative;
  width: 100%;

  .steps-item {
    position: relative;
    width: 100%;

    & + .steps-item {
      margin-top: 30rpx;
    }
  }
}

.steps-operation {
  position: fixed;
  left: 0;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rpx 30rpx;
  z-index: 100;
}

.placeholder-top {
  height: 50px;
}
</style>
