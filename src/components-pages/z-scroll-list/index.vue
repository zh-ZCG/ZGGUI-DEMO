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
  path: '/components-pages/z-scroll-list/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="横向滚动" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="scroll-list-container">
        <div class="scroll-list-item">
          <z-scroll-list>
            <div class="scroll-data">
              <div v-for="i in 6" :key="i" class="data-item">
                <div class="item-icon cw" :class="[`bgp${i + 1}`]">
                  <z-icon name="hexin" />
                </div>
                <div class="item-title">模块</div>
              </div>
            </div>
          </z-scroll-list>
        </div>
        <div class="scroll-list-item" style="margin-bottom: 50rpx">
          <z-scroll-list>
            <div>
              <div class="scroll-data">
                <div v-for="i in 6" :key="i" class="data-item">
                  <div class="item-icon cw" :class="[`bgs${i}`]">
                    <z-icon name="wo" />
                  </div>
                  <div class="item-title">模块</div>
                </div>
              </div>
              <div class="scroll-data">
                <div v-for="i in 6" :key="i" class="data-item">
                  <div class="item-icon cw" :class="[`bge${i + 1}`]">
                    <z-icon name="fuwuzujian" />
                  </div>
                  <div class="item-title">模块</div>
                </div>
              </div>
            </div>
          </z-scroll-list>
        </div>
      </div>
    </DemoContainer>
    <div style="display: none">
      <z-icon name="hexin" />
    </div>
    <DemoContainer title="修改指示器样式">
      <div class="scroll-list-container">
        <div class="scroll-list-item">
          <z-scroll-list
            :indicator-width="60"
            :indicator-block-width="30"
            indicator-color="error"
            indicator-block-color="success"
          >
            <div class="scroll-data">
              <div v-for="i in 6" :key="i" class="data-item">
                <div class="item-icon cw" :class="[`bgw${i + 1}`]">
                  <z-icon name="wo" />
                </div>
                <div class="item-title">模块</div>
              </div>
            </div>
          </z-scroll-list>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏指示器">
      <div class="scroll-list-container">
        <div class="scroll-list-item">
          <z-scroll-list :indicator="false">
            <div class="scroll-data">
              <div v-for="i in 6" :key="i" class="data-item">
                <div class="item-icon cw" :class="[`bgp${i}`]">
                  <z-icon name="fuwuzujian" />
                </div>
                <div class="item-title">模块</div>
              </div>
            </div>
          </z-scroll-list>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.scroll-list-container {
  position: relative;
  width: 100%;

  .scroll-list-item {
    position: relative;
    width: 100%;

    & + .scroll-list-item {
      margin-top: 30rpx;
    }
  }
}

.scroll-data {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 30rpx;

  .data-item {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40rpx;

    .item-icon {
      width: 100rpx;
      height: 100rpx;
      border-radius: 15rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      font-size: 70rpx;
    }
    .item-title {
      margin-top: 14rpx;
      line-height: 1;
    }
  }
}
</style>
