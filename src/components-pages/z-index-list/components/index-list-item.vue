<script lang="ts" setup>
defineProps({
  /**
   * @description 头像地址
   */
  avatar: String,
  /**
   * @description 用户昵称
   */
  nickname: String,
  /**
   * @description 用户所属部门
   */
  department: String,
})
</script>

<template>
  <div class="index-list-item">
    <div class="avatar">
      <image class="image" :src="avatar" mode="aspectFill" />
    </div>
    <div class="info">
      <div class="nickname">{{ nickname }}</div>
      <div class="department">{{ department }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.index-list-item {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30rpx;
  background-color: #fff;
  color: @primary;

  .avatar {
    flex-shrink: 0;
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;

    .image {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }

  .info {
    flex: 1;
    margin-left: 26rpx;
    line-height: 1;

    .nickname {
      font-size: 34rpx;
    }
    .department {
      margin-top: 20rpx;
      color: @info;
      font-size: 24rpx;
    }
  }
}
</style>
