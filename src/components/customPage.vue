<!-- 页面模板 -->
// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif
<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance, computed, CSSProperties } from 'vue'
import z from 'zgg-ui/libs/z'
onMounted(function () {
  ready()
})

/** 准备好 */
function ready() {}

interface PropsType {
  title?: string
  padding?: string
  pageBgColor?: string
  isH5DemoPage?: boolean
  onlyBack?: boolean
  navbarFrosted?: boolean
  navbarBottomShadow?: boolean
  navbarPlaceholder?: boolean
  bottomMoreSpace?: boolean
  contentFullWidth?: boolean
}

const props = withDefaults(defineProps<PropsType>(), {
  title: 'ZGGUI',
  padding: '12',
  isH5DemoPage: false,
  onlyBack: false,
  navbarFrosted: true,
  navbarBottomShadow: true,
  navbarPlaceholder: true,
  bottomMoreSpace: true,
  contentFullWidth: false,
})

// 页面容器的类
const containerClass = computed<string>(() => {
  const cls: string[] = ['z-custom-page']

  return cls.join(' ')
})
// 页面容器样式
const containerStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {}

  if (props.padding) {
    style.padding = z.addUnit(props.padding)
  }

  if (props.pageBgColor) style.backgroundColor = props.pageBgColor

  if (props.contentFullWidth) {
    style.width = '100vw'
    style.overflowX = 'hidden'
  }

  if (props.bottomMoreSpace) {
    style.paddingBottom = '80rpx'
  }

  return style
})

// 导航栏返回按钮
const navBarIcon = {
  back: {
    hide: '',
    show: 'jiantouzuo',
    only: 'jiantouzuo',
  },
  home: {
    hide: '',
    show: 'shouye',
  },
}
const backIcon = computed<string>(() => {
  let icon =
    navBarIcon.back[props.isH5DemoPage ? 'hide' : props.onlyBack ? 'only' : 'show']
  // #ifdef MP-ALIPAY
  icon = ''
  // #endif
  return icon
})
const homeIcon = computed<string>(() => {
  let icon = navBarIcon.home[props.isH5DemoPage || props.onlyBack ? 'hide' : 'show']

  // #ifdef MP-ALIPAY
  icon = ''
  // #endif

  return icon
})
</script>

<template>
  <div class="custom-page pr">
    <z-navbar
      fixed
      :back-icon="backIcon"
      :home-icon="homeIcon"
      :frosted="navbarFrosted"
      :bottom-shadow="navbarBottomShadow"
      :placeholder="navbarPlaceholder"
      :safe-area-inset-right="!isH5DemoPage"
    >
      <!-- #ifndef MP-ALIPAY -->
      {{ title }}
      <!-- #endif -->
    </z-navbar>
    <div :class="[containerClass]" class="pr" :style="containerStyle">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.custom-page {
  width: 100%;
  .z-custom-page {
    width: auto;
  }
}
</style>
