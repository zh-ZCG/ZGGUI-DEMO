<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { useUniAppSystemRectInfo } from 'zgg-ui/libs/use-uniapp-system-rect-info/use-uniapp-system-rect-info'
const { navBarInfo } = useUniAppSystemRectInfo()
import { ref } from 'vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-popup/index',
})
const { isDemoH5Page } = useDemoH5Page()

const showNormalPopup = ref(false)
const openNormalPopup = () => {
  showNormalPopup.value = true
}

type PopupOpenDirection = 'top' | 'bottom' | 'left' | 'right' | 'center'

type PopupCloseBtnPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

// 弹出设置弹出方向弹框
const showTopDirectionPopup = ref(false)
const showRightDirectionPopup = ref(false)
const showBottomDirectionPopup = ref(false)
const showLeftDirectionPopup = ref(false)
const showCenterDirectionPopup = ref(false)
const openDirectionPopup = (direction: PopupOpenDirection) => {
  switch (direction) {
    case 'top':
      showTopDirectionPopup.value = true
      break
    case 'right':
      showRightDirectionPopup.value = true
      break
    case 'bottom':
      showBottomDirectionPopup.value = true
      break
    case 'left':
      showLeftDirectionPopup.value = true
      break
    case 'center':
      showCenterDirectionPopup.value = true
      break
  }
}

// 显示关闭按钮
const showLeftTopCloseBtnPopup = ref(false)
const showRightTopCloseBtnPopup = ref(false)
const showLeftBottomCloseBtnPopup = ref(false)
const showRightBottomCloseBtnPopup = ref(false)
const openCloseBtnPopup = (position: PopupCloseBtnPosition) => {
  switch (position) {
    case 'top-left':
      showLeftTopCloseBtnPopup.value = true
      break
    case 'top-right':
      showRightTopCloseBtnPopup.value = true
      break
    case 'bottom-left':
      showLeftBottomCloseBtnPopup.value = true
      break
    case 'bottom-right':
      showRightBottomCloseBtnPopup.value = true
      break
  }
}

// 隐藏遮罩
const showHideOverlayPopup = ref(false)
const openHideOverlayPopup = () => {
  showHideOverlayPopup.value = true
}

// 关闭点击遮罩关闭
const showNoOverlayClosePopup = ref(false)
const openNoOverlayClosePopup = () => {
  showNoOverlayClosePopup.value = true
}

// 设置遮罩透明度
const showTransparentOverlayPopup = ref(false)
const openTransparentOverlayPopup = () => {
  showTransparentOverlayPopup.value = true
}

// 自定义弹框
const showCustomPopup = ref(false)
const openCustomPopup = () => {
  showCustomPopup.value = true
}
const closeCustomPopup = () => {
  showCustomPopup.value = false
}
</script>

<template>
  <CustomPage title="弹出框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="popup-container">
        <div class="popup-item">
          <z-button size="large" type="primary" @click="openNormalPopup">
            弹出默认弹出框
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置弹出方向">
      <div class="popup-container">
        <div class="popup-item">
          <z-button size="large" type="primary" @click="openDirectionPopup('top')">
            在上方弹出弹出框
          </z-button>
        </div>
        <div class="popup-item">
          <z-button size="large" type="primary" @click="openDirectionPopup('right')">
            在右方弹出弹出框
          </z-button>
        </div>
        <div class="popup-item">
          <z-button size="large" type="primary" @click="openDirectionPopup('bottom')">
            在下方弹出弹出框
          </z-button>
        </div>
        <div class="popup-item">
          <z-button size="large" type="primary" @click="openDirectionPopup('left')">
            在左方弹出弹出框
          </z-button>
        </div>
        <div class="popup-item">
          <z-button size="large" type="primary" @click="openDirectionPopup('center')">
            在中间弹出弹出框
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="关闭按钮设置">
      <div class="popup-container">
        <div class="popup-item">
          <z-button
            size="large"
            type="primary"
            @click="openCloseBtnPopup('top-left')"
          >
            显示左上角关闭按钮
          </z-button>
        </div>
        <div class="popup-item">
          <z-button
            size="large"
            type="primary"
            @click="openCloseBtnPopup('top-right')"
          >
            显示右上角关闭按钮
          </z-button>
        </div>
        <div class="popup-item">
          <z-button
            size="large"
            type="primary"
            @click="openCloseBtnPopup('bottom-left')"
          >
            显示左下角关闭按钮
          </z-button>
        </div>
        <div class="popup-item">
          <z-button
            size="large"
            type="primary"
            @click="openCloseBtnPopup('bottom-right')"
          >
            显示右下角关闭按钮
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="遮罩设置">
      <div class="popup-container">
        <div class="popup-item">
          <z-button size="large" type="primary" @click="openHideOverlayPopup">
            不显示遮罩
          </z-button>
        </div>
        <div class="popup-item">
          <z-button size="large" type="primary" @click="openTransparentOverlayPopup">
            设置透明遮罩
          </z-button>
        </div>
        <div class="popup-item">
          <z-button size="large" type="primary" @click="openNoOverlayClosePopup">
            禁用点击遮罩关闭弹框
          </z-button>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="案例">
      <div class="popup-container">
        <div class="popup-item">
          <z-button size="large" type="primary" @click="openCustomPopup">
            弹出自定义弹出框
          </z-button>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>

  <!-- 基础弹框 -->
  <z-popup v-model="showNormalPopup">
    <div class="popup-content center">ZGGUI</div>
  </z-popup>

  <!-- 上方弹框 -->
  <z-popup v-model="showTopDirectionPopup" mode="top" :top="navBarInfo.height">
    <div class="popup-content top">ZGGUI</div>
  </z-popup>

  <!-- 右方弹框 -->
  <z-popup v-model="showRightDirectionPopup" width="50vw" mode="right">
    <div class="popup-content right">ZGGUI</div>
  </z-popup>

  <!-- 下方弹框 -->
  <z-popup v-model="showBottomDirectionPopup" mode="bottom">
    <div class="popup-content bottom">ZGGUI</div>
  </z-popup>

  <!-- 左方弹框 -->
  <z-popup v-model="showLeftDirectionPopup" width="50vw" mode="left">
    <div class="popup-content left">ZGGUI</div>
  </z-popup>

  <!-- 中间弹框 -->
  <z-popup
    v-model="showCenterDirectionPopup"
    width="calc(100vw - 200rpx)"
    mode="center"
  >
    <div class="popup-content center">ZGGUI</div>
  </z-popup>

  <!-- 显示左上方关闭按钮弹框 -->
  <z-popup v-model="showLeftTopCloseBtnPopup" closeable closeIconPos="top-left">
    <div class="popup-content center">ZGGUI</div>
  </z-popup>

  <!-- 显示右上方关闭按钮弹框 -->
  <z-popup v-model="showRightTopCloseBtnPopup" closeable closeIconPos="top-right">
    <div class="popup-content center">ZGGUI</div>
  </z-popup>

  <!-- 显示左下方关闭按钮弹框 -->
  <z-popup v-model="showLeftBottomCloseBtnPopup" closeable closeIconPos="bottom-left">
    <div class="popup-content center">ZGGUI</div>
  </z-popup>

  <!-- 显示右下方关闭按钮弹框 -->
  <z-popup
    v-model="showRightBottomCloseBtnPopup"
    closeable
    closeIconPos="bottom-right"
  >
    <div class="popup-content center">ZGGUI</div>
  </z-popup>

  <!-- 不显示遮罩 -->
  <z-popup v-model="showHideOverlayPopup" :overlay="false" closeable>
    <div class="popup-content center">ZGGUI</div>
  </z-popup>

  <!-- 设置透明遮罩 -->
  <z-popup v-model="showTransparentOverlayPopup" :overlay-opacity="0">
    <div class="popup-content center">ZGGUI</div>
  </z-popup>

  <!-- 禁用点击遮罩关闭弹框 -->
  <z-popup v-model="showNoOverlayClosePopup" :clickCloseOverlay="false" closeable>
    <div class="popup-content center">ZGGUI</div>
  </z-popup>

  <!-- 弹框演示 -->
  <z-popup v-model="showCustomPopup" mode="center" :overlay-opacity="0.5">
    <div class="custom-popup-content">
      <div class="content">
        <image
          class="content-image"
          src="http://192.168.1.15/testapkwgt/mm.png"
          mode="widthFix"
        />
      </div>
      <div class="closeable" @tap.stop="closeCustomPopup">
        <z-icon name="close-circle" />
      </div>
    </div>
  </z-popup>
</template>

<style lang="less" scoped>
.popup-container {
  position: relative;
  width: 100%;

  .popup-item {
    position: relative;
    width: 100%;

    & + .popup-item {
      margin-top: 30rpx;
    }
  }
}

.popup-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.center {
    padding: 30rpx;
    width: auto;
    height: 200rpx;
  }

  &.top,
  &.bottom {
    height: 300rpx;
  }

  &.right,
  &.left {
    width: 300rpx;
  }
}

.custom-popup-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    width: 80%;
    height: auto;

    .content-image {
      width: 100%;
    }
  }

  .closeable {
    font-size: 80rpx;
    margin-top: 40rpx;
    color: #999999;
  }
}
</style>
