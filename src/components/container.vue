<!-- 页面内容模板 -->
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
onMounted(function () {
  ready()
})

/** 准备好 */
function ready() {}

interface PropsType {
  title: string //内容标题
  titlePadding?: boolean //标题带边距
}

const props = withDefaults(defineProps<PropsType>(), {})
</script>

<template>
  <div class="container pr">
    <div
      class="title"
      :class="[
        {
          'title-padding': titlePadding,
        },
      ]"
    >
      <z-title mode="hLine" :title="title" color="primary" size="32rpx" />
    </div>
    <div class="content pr">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  .title {
    .title-padding {
      padding: 0rpx 30rpx;
    }
  }
  .content {
    width: 100%;
    margin-top: 30rpx;
  }

  & + & {
    margin-top: 50rpx;
  }
}
</style>
