<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import type {
  NotifyOptions,
  zNotifyInstance,
} from 'zgg-ui/components/z-notify/z-notify'

import { useDemoH5Page, useWxShare } from '@/hooks/index'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/basic-pages/button/index',
})
const { isDemoH5Page } = useDemoH5Page()

const notifyRef = ref<zNotifyInstance>()

const testButtonDebounce = () => {
  notifyRef.value?.show({
    msg: `点击了按钮`,
  })
}
</script>

<template>
  <CustomPage title="按钮" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="button-container">
        <div class="button-item">
          <div class="item"><z-button text="默认按钮"></z-button></div>
          <div class="item"><z-button text="镂空按钮" plain></z-button></div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="按钮类型">
      <div class="button-container">
        <div class="button-item">
          <div class="item"><z-button type="primary" text="按钮"></z-button></div>
          <div class="item"><z-button type="success" text="按钮"></z-button></div>
          <div class="item"><z-button type="error" text="按钮"></z-button></div>
          <div class="item"><z-button type="warning" text="按钮"></z-button></div>
          <div class="item"><z-button type="info" text="按钮"></z-button></div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="按钮细边框">
      <div class="button-container">
        <div class="button-item">
          <div class="item">
            <z-button hairline type="primary" text="按钮"></z-button>
          </div>
          <div class="item">
            <z-button hairline type="success" text="按钮"></z-button>
          </div>
          <div class="item">
            <z-button hairline type="error" text="按钮"></z-button>
          </div>
          <div class="item">
            <z-button hairline type="warning" text="按钮"></z-button>
          </div>
          <div class="item">
            <z-button hairline type="info" text="按钮"></z-button>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="按钮尺寸">
      <div class="button-container">
        <div class="button-item">
          <div class="item">
            <z-button size="small" text="按钮"></z-button>
          </div>
          <div class="item">
            <z-button size="normal" text="按钮"></z-button>
          </div>
          <div class="item">
            <z-button size="large" text="按钮"></z-button>
          </div>
          <div class="item">
            <z-button
              height="60px"
              width="120px"
              text="按钮"
              :other-style="{ padding: '16rpx 30rpx' }"
            ></z-button>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="节流">
      <div class="button-container">
        <div class="button-item">
          <div class="item">
            <z-button
              :throttleTime="10000"
              @click="testButtonDebounce"
              text="节流10s"
            ></z-button>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="加载中按钮">
      <div class="button-container">
        <div class="button-item">
          <div class="item">
            <z-button loading loadingText="加载中" loadingMode="circle"></z-button>
          </div>
          <div class="item">
            <z-button loading loadingText="加载中" loadingMode="flower"></z-button>
          </div>
          <div class="item">
            <z-button
              loading
              loadingText="加载中"
              loadingMode="semicircle"
            ></z-button>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁用按钮">
      <div class="button-container">
        <div class="button-item">
          <div class="item">
            <z-button disabled text="禁止点击"></z-button>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="button-container">
        <div class="button-item">
          <div class="item">
            <z-button text="文本按钮" type="primary"></z-button>
          </div>
          <div class="item">
            <z-button text="文本按钮" type="error"></z-button>
          </div>
          <div class="item">
            <z-button
              text="文本按钮"
              :color="'linear-gradient(45deg, #ff7e5f, #feb47b)'"
            ></z-button>
          </div>
          <div class="item">
            <z-button
              text="文本按钮"
              :color="'linear-gradient(45deg, #ff6a88, #ffcc7a)'"
            ></z-button>
          </div>
        </div>
      </div>
    </DemoContainer>

    <DemoContainer title="左侧图标">
      <div class="button-container">
        <div class="button-item">
          <div class="item">
            <z-button
              text="图标按钮"
              type="primary"
              icon="hexin"
              icon-color="warning"
            ></z-button>
          </div>
          <div class="item">
            <z-button
              text="图标按钮"
              type="error"
              icon="hexin"
              icon-color="success"
            ></z-button>
          </div>
        </div>
      </div>
    </DemoContainer>

    <DemoContainer title="自定义样式">
      <div class="button-container">
        <div class="button-item">
          <div class="item">
            <z-button
              color="cpink1"
              :other-style="{
                borderRadius: '15rpx 15rpx 0rpx 15rpx',
                padding: '14rpx 34rpx',
              }"
            >
              按钮
            </z-button>
          </div>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
  <z-notify ref="notifyRef" offsetTop="60"></z-notify>
</template>

<style lang="less" scoped>
.button-container {
  position: relative;
  width: 100%;

  .button-item {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    & + .button-item {
      margin-top: 30rpx;
    }

    .item {
      margin-right: 10rpx;
      margin-top: 10rpx;
    }
  }
}
</style>
