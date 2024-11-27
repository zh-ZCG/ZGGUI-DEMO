<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/basic-pages/badge/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="徽标" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="badge-container">
        <div class="badge-item">
          <div class="item">
            <div class="badge-content">
              <z-badge show value="99" absolute :position="[-5, -5]" />
              <div>非直角</div>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge show value="99" reversal absolute :position="[-5, -5]" />
              <div>非直反转</div>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge show value="99" rightAngle absolute :position="[-5, -5]" />
              <div>左下直角</div>
            </div>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="角标类型">
      <div class="badge-container">
        <div class="badge-item">
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                value="99"
                absolute
                :position="[-5, -5]"
                type="primary"
              ></z-badge>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                value="99"
                absolute
                :position="[-5, -5]"
                type="success"
              ></z-badge>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                value="99"
                absolute
                :position="[-5, -5]"
                type="warning"
              ></z-badge>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                value="99"
                absolute
                :position="[-5, -5]"
                type="error"
              ></z-badge>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                value="99"
                absolute
                :position="[-5, -5]"
                type="info"
              ></z-badge>
            </div>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="点角标">
      <div class="badge-container">
        <div class="badge-item">
          <div class="item">
            <div class="badge-content">
              <z-badge show dot absolute :position="[-5, -5]"></z-badge>
            </div>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="角标尺寸">
      <div class="badge-container">
        <div class="badge-item">
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                value="99"
                absolute
                :position="[-5, -5]"
                fontSize="8px"
              ></z-badge>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                value="99"
                absolute
                :position="[-5, -5]"
                fontSize="10px"
              ></z-badge>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                value="99"
                absolute
                :position="[-5, -5]"
                size="50"
                fontSize="12px"
              ></z-badge>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                value="99"
                absolute
                :position="[-5, -5]"
                fontSize="14px"
              ></z-badge>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                dot
                dotSize="16px"
                absolute
                :position="[-5, -5]"
              ></z-badge>
            </div>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置角标颜色">
      <div class="badge-container">
        <div class="badge-item">
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                :value="99"
                absolute
                :position="[-5, -5]"
                bg-color="warning"
              ></z-badge>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                :value="99"
                absolute
                :position="[-5, -5]"
                bg-color="primary"
                color="cw"
              ></z-badge>
            </div>
          </div>
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                :value="99"
                absolute
                :position="[-5, -5]"
                bg-color="primary"
                color="error"
              ></z-badge>
            </div>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置最大值">
      <div class="badge-container">
        <div class="badge-item">
          <div class="item">
            <div class="badge-content">
              <z-badge
                show
                :value="99"
                absolute
                :position="[-5, -5]"
                :maxNum="90"
              ></z-badge>
            </div>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置角标的位置">
      <div class="badge-container">
        <div class="badge-item">
          <div class="item">
            <div class="badge-content">
              <z-badge show value="99" absolute :position="[10, 10]"></z-badge>
            </div>
          </div>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.badge-container {
  position: relative;
  width: 100%;

  .badge-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .item {
      position: relative;

      margin-right: 30rpx;
      margin-top: 30rpx;
    }

    .badge-content {
      position: relative;
      width: 60rpx;
      height: 60rpx;
      padding: 30rpx;
      border-radius: 15rpx;
      background-color: #eeeeee;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22rpx;
      text-align: center;

      &.no-center {
        display: block;
        padding: 0;
        text-align: left;
      }
    }
  }
}
</style>
