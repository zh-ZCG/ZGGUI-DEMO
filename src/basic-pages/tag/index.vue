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
  path: '/basic-pages/tag/index',
})
const { isDemoH5Page } = useDemoH5Page()

const showClose1 = ref(true)
const showClose2 = ref(true)
const showClose3 = ref(true)
</script>

<template>
  <CustomPage title="标签" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="tag-container">
        <div class="tag-item">
          <z-tag show title="ZGG" type="primary" />
          <z-tag show title="ZGG" type="success" />
          <z-tag show title="ZGG" type="error" />
          <z-tag show title="ZGG" type="warning" />
          <z-tag show title="ZGG" type="info" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="镂空处理">
      <div class="tag-container">
        <div class="tag-item">
          <z-tag show plain title="ZGG" type="primary" />
          <z-tag show plain title="ZGG" type="success" />
          <z-tag show plain title="ZGG" type="error" />
          <z-tag show plain title="ZGG" type="warning" />
          <z-tag show plain title="ZGG" type="info" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置尺寸">
      <div class="tag-container">
        <div class="tag-item">
          <z-tag show plain size="small" title="ZGG" type="primary" />
          <z-tag show plain size="normal" title="ZGG" type="success" />
          <z-tag show plain size="large" title="ZGG" type="error" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示关闭按钮">
      <div class="tag-container">
        <div class="tag-item">
          <z-tag
            :show="showClose1"
            @close="showClose1 = false"
            plain
            canclose
            size="small"
            title="ZGG"
            type="primary"
          />
          <z-tag
            :show="showClose2"
            @close="showClose2 = false"
            plain
            canclose
            closeColor="error"
            size="normal"
            title="ZGG"
            type="success"
          />
          <z-tag
            :show="showClose3"
            @close="showClose3 = false"
            plain
            canclose
            closeColor="success"
            size="large"
            title="ZGG"
            type="error"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="显示图片/图标">
      <div class="tag-container">
        <div class="tag-item">
          <z-tag show plain size="small" icon="hexin" title="ZGG" type="primary" />
          <z-tag show plain size="normal" icon="hexin" title="ZGG" type="success" />
          <z-tag show plain size="large" icon="hexin" title="ZGG" type="error" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.tag-container {
  position: relative;
  width: 100%;

  .tag-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + .tag-item {
      margin-top: 30rpx;
    }

    z-tag {
      margin-left: 10rpx;
    }
  }
}
</style>
