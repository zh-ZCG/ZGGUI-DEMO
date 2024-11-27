<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref, computed } from 'vue'

import { zCheckboxValueType } from 'zgg-ui/components/z-checkbox/z-checkbox'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-checkbox/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 是否同意协议
const agent = ref(false)
// 当前选中的值
const currentSelectValue = ref<string[]>([])
// 判断当前是否全部选中
const isAllChecked = computed<boolean>(() => currentSelectValue.value.length === 3)
// 全选按钮点击事件
const isAllCheckedChange = (value: zCheckboxValueType) => {
  if (value) {
    currentSelectValue.value = ['选项一', '选项二', '选项三']
  } else {
    currentSelectValue.value = []
  }
}

// 复选框的值
const checkboxValue1 = ref([])
const checkboxValue2 = ref([])
const checkboxValue3 = ref([])
const checkboxValue4 = ref([])
const checkboxValue5 = ref([])
const checkboxValue6 = ref([])
</script>

<template>
  <CustomPage title="复选框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="checkbox-container">
        <div class="checkbox-item">
          当前项是否被选中:
          <text class="cgray3">
            {{ agent ? '同意协议' : '不同意协议' }}
          </text>
        </div>
        <div class="checkbox-item">
          <z-checkbox v-model="agent">
            <text class="cgray3" style="line-height: 1">
              同意协议
              <text class="cp5">《用户使用协议》</text>
            </text>
          </z-checkbox>
        </div>
        <div class="checkbox-item">
          当前已选的值:
          <text class="cgray3">
            {{ currentSelectValue.join(',') }}
          </text>
        </div>
        <div class="checkbox-item">
          <div>
            <z-checkbox
              :model-value="isAllChecked"
              checked-shape="circle"
              :indeterminate="!isAllChecked && currentSelectValue.length > 0"
              @change="isAllCheckedChange"
            >
              <text class="cgray3">全选</text>
            </z-checkbox>
          </div>
          <z-checkbox-group v-model="currentSelectValue">
            <z-checkbox label="选项一">选项一</z-checkbox>
            <z-checkbox label="选项二">选项二</z-checkbox>
            <z-checkbox label="选项三">选项三</z-checkbox>
          </z-checkbox-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改复选框的形状">
      <div class="checkbox-container">
        <div class="checkbox-item">
          <z-checkbox-group v-model="currentSelectValue" checked-shape="circle">
            <z-checkbox label="选项一">选项一</z-checkbox>
            <z-checkbox label="选项二">选项二</z-checkbox>
            <z-checkbox label="选项三">选项三</z-checkbox>
          </z-checkbox-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置允许选择的最大数量">
      <div class="checkbox-container">
        <div class="checkbox-item">
          <z-checkbox-group v-model="checkboxValue1" :max="2">
            <z-checkbox label="选项一">选项一</z-checkbox>
            <z-checkbox label="选项二">选项二</z-checkbox>
            <z-checkbox label="选项三">选项三</z-checkbox>
          </z-checkbox-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁止点击标签">
      <div class="checkbox-container">
        <div class="checkbox-item">
          <z-checkbox-group v-model="checkboxValue2" label-disabled>
            <z-checkbox label="选项一">选项一</z-checkbox>
            <z-checkbox label="选项二">选项二</z-checkbox>
            <z-checkbox label="选项三">选项三</z-checkbox>
          </z-checkbox-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示边框">
      <div class="checkbox-container">
        <div class="checkbox-item">
          <z-checkbox-group v-model="checkboxValue3" border>
            <z-checkbox label="选项一">选项一</z-checkbox>
            <z-checkbox label="选项二">选项二</z-checkbox>
            <z-checkbox label="选项三">选项三</z-checkbox>
          </z-checkbox-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="复选框尺寸">
      <div class="checkbox-container">
        <div class="checkbox-item">
          <z-checkbox-group v-model="checkboxValue4" :size="'small'">
            <z-checkbox label="选项一">选项一</z-checkbox>
            <z-checkbox label="选项二">选项二</z-checkbox>
            <z-checkbox label="选项三">选项三</z-checkbox>
          </z-checkbox-group>
        </div>
        <div class="checkbox-item">
          <z-checkbox-group v-model="checkboxValue4" :size="'small'" border>
            <z-checkbox label="选项一">选项一</z-checkbox>
            <z-checkbox label="选项二">选项二</z-checkbox>
            <z-checkbox label="选项三">选项三</z-checkbox>
          </z-checkbox-group>
        </div>
        <div class="checkbox-item">
          <z-checkbox-group v-model="checkboxValue4" :size="'large'">
            <z-checkbox label="选项一">选项一</z-checkbox>
            <z-checkbox label="选项二">选项二</z-checkbox>
            <z-checkbox label="选项三">选项三</z-checkbox>
          </z-checkbox-group>
        </div>
        <div class="checkbox-item">
          <z-checkbox-group v-model="checkboxValue4" :size="'large'" border>
            <z-checkbox label="选项一">选项一</z-checkbox>
            <z-checkbox label="选项二">选项二</z-checkbox>
            <z-checkbox label="选项三">选项三</z-checkbox>
          </z-checkbox-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="checkbox-container">
        <div class="checkbox-item">
          <z-checkbox-group v-model="checkboxValue5" active-color="primary">
            <z-checkbox label="选项一" active-color="error">选项一</z-checkbox>
            <z-checkbox label="选项二">选项二</z-checkbox>
            <z-checkbox label="选项三" active-color="#3646ff">选项三</z-checkbox>
          </z-checkbox-group>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="内容显示在左边">
      <div class="checkbox-container">
        <div class="checkbox-item">
          <z-checkbox-group v-model="checkboxValue6">
            <z-checkbox label="选项一">
              <template #left>选项一</template>
            </z-checkbox>
            <z-checkbox label="选项二">
              <template #left>选项二</template>
            </z-checkbox>
            <z-checkbox label="选项三">
              <template #left>选项三</template>
            </z-checkbox>
          </z-checkbox-group>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.checkbox-container {
  position: relative;
  width: 100%;

  .checkbox-item {
    position: relative;
    width: 100%;
    & + .checkbox-item {
      margin-top: 30rpx;
    }
  }
}
</style>
