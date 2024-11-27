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
  path: '/components-pages/z-subsection/index',
})
const { isDemoH5Page } = useDemoH5Page()

const currentSubsectionIndex = ref<number>(0)
</script>

<template>
  <CustomPage title="分段器" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="subsection-container">
        <div class="subsection-item">
          当前选中的索引：
          <text class="cgray2">
            {{ currentSubsectionIndex <= 0 ? '未选中' : currentSubsectionIndex }}
          </text>
        </div>
        <div class="subsection-item">
          <z-subsection v-model="currentSubsectionIndex">
            <z-subsection-item title="全部" />
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
            <z-subsection-item title="已取消" />
          </z-subsection>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="按钮分段器">
      <div class="subsection-container">
        <div class="subsection-item">
          <z-subsection mode="button">
            <z-subsection-item title="全部" />
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
            <z-subsection-item title="已取消" />
          </z-subsection>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置尺寸">
      <div class="subsection-container">
        <div class="subsection-item">
          <z-subsection size="small">
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
          </z-subsection>
        </div>
        <div class="subsection-item">
          <z-subsection size="normal">
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
          </z-subsection>
        </div>
        <div class="subsection-item">
          <z-subsection size="large">
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
          </z-subsection>
        </div>
        <div class="subsection-item">
          <z-subsection size="xlarge">
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
          </z-subsection>
        </div>
        <div class="subsection-item">
          <z-subsection size="22">
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
          </z-subsection>
        </div>

        <div class="subsection-item">
          <z-subsection mode="button" size="small">
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
          </z-subsection>
        </div>
        <div class="subsection-item">
          <z-subsection mode="button" size="normal">
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
          </z-subsection>
        </div>
        <div class="subsection-item">
          <z-subsection mode="button" size="lg">
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
          </z-subsection>
        </div>
        <div class="subsection-item">
          <z-subsection mode="button" size="xlarge">
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
          </z-subsection>
        </div>
        <div class="subsection-item">
          <z-subsection mode="button" size="22">
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
          </z-subsection>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="subsection-container">
        <div class="subsection-item">
          <z-subsection active-color="error">
            <z-subsection-item title="全部" />
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
            <z-subsection-item title="已取消" />
          </z-subsection>
        </div>
        <div class="subsection-item">
          <z-subsection mode="button" active-color="primary">
            <z-subsection-item title="全部" />
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
            <z-subsection-item title="已取消" />
          </z-subsection>
        </div>
        <div class="subsection-item">
          <z-subsection>
            <z-subsection-item title="全部" />
            <z-subsection-item title="待付款" active-color="warning" />
            <z-subsection-item title="待收货" active-color="primary" />
            <z-subsection-item title="已完成" active-color="success" />
            <z-subsection-item title="已取消" active-color="error" />
          </z-subsection>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁止操作">
      <div class="subsection-container">
        <div class="subsection-item">
          <z-subsection disabled>
            <z-subsection-item title="全部" />
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
            <z-subsection-item title="已取消" />
          </z-subsection>
        </div>
        <div class="subsection-item">
          <z-subsection mode="button">
            <z-subsection-item title="全部" />
            <z-subsection-item title="待付款" />
            <z-subsection-item title="待收货" />
            <z-subsection-item title="已完成" />
            <z-subsection-item title="已取消" disabled />
          </z-subsection>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义内容">
      <div class="subsection-container">
        <div class="subsection-item">
          <z-subsection>
            <z-subsection-item>
              <z-icon name="fuwuzujian" />
            </z-subsection-item>
            <z-subsection-item>
              <z-icon name="hexin" />
            </z-subsection-item>
            <z-subsection-item>
              <z-icon name="wo" />
            </z-subsection-item>
            <z-subsection-item>
              <z-icon name="hexin" />
            </z-subsection-item>
            <z-subsection-item>
              <z-icon name="fuwuzujian" />
            </z-subsection-item>
          </z-subsection>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.subsection-container {
  position: relative;
  width: 100%;

  .subsection-item {
    position: relative;
    width: 100%;

    & + .subsection-item {
      margin-top: 30rpx;
    }
  }
}
</style>
