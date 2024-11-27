<script lang="ts" setup>
interface PropsType {
  title?: string
}

const props = withDefaults(defineProps<PropsType>(), {})
</script>

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

<template>
  <div class="sub-container">
    <div v-if="title" class="title dfr">
      <z-title mode="transparent" color="primary" size="large" align="left">
        {{ title }}
      </z-title>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.sub-container {
  position: relative;
  display: inline-block; // 消除共享margin属性
  width: 100%;

  & + & {
    margin-top: 24rpx;
  }

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 26rpx;
  }
}
</style>
