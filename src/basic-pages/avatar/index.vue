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
  path: '/basic-pages/avatar/index',
})
const { isDemoH5Page } = useDemoH5Page()

const zAvatarGroupUrlList = ref([
  'http://192.168.1.15/testapkwgt/mm.png',
  'http://192.168.1.15/testapkwgt/mm.png',
  'http://192.168.1.15/testapkwgt/mm.png',
  'http://192.168.1.15/testapkwgt/mm.png',
  'http://192.168.1.15/testapkwgt/mm.png',
])
</script>
<template>
  <CustomPage title="头像" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="avatar-container">
        <div class="avatar-item">
          <div class="item">
            <z-avatar src="http://192.168.1.15/testapkwgt/mm.png" />
          </div>
          <div class="item">
            <z-avatar icon="hexin" bgColor="primary" />
          </div>
          <div class="item">
            <z-avatar color="success" text="Z"></z-avatar>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="头像类型">
      <div class="avatar-container">
        <div class="avatar-item">
          <div class="item">
            <z-avatar bgColor="primary" text="Z"></z-avatar>
          </div>
          <div class="item">
            <z-avatar bgColor="success" text="Z"></z-avatar>
          </div>
          <div class="item">
            <z-avatar bgColor="warning" text="Z"></z-avatar>
          </div>
          <div class="item">
            <z-avatar bgColor="error" text="Z"></z-avatar>
          </div>
          <div class="item">
            <z-avatar bgColor="info" text="Z"></z-avatar>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="头像形状">
      <div class="avatar-container">
        <div class="avatar-item">
          <div class="item">
            <z-avatar src="http://192.168.1.15/testapkwgt/mm.png" shape="circle" />
          </div>
        </div>
        <div class="avatar-item">
          <div class="item">
            <z-avatar src="http://192.168.1.15/testapkwgt/mm.png" shape="square" />
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="尺寸设置">
      <div class="avatar-container">
        <div class="avatar-item">
          <div class="item">
            <z-avatar src="http://192.168.1.15/testapkwgt/mm.png" size="32" />
          </div>
          <div class="item">
            <z-avatar src="http://192.168.1.15/testapkwgt/mm.png" size="34" />
          </div>
          <div class="item">
            <z-avatar icon="hexin" size="36" />
          </div>
          <div class="item">
            <z-avatar src="http://192.168.1.15/testapkwgt/mm.png" size="38" />
          </div>
        </div>
        <div class="avatar-item">
          <div class="item">
            <z-avatar src="http://192.168.1.15/testapkwgt/mm.png" size="50" />
          </div>
          <div class="item">
            <z-avatar icon="hexin" size="50" />
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义颜色">
      <div class="avatar-container">
        <div class="avatar-item">
          <div class="item">
            <z-avatar icon="hexin" bg-color="cp3" />
          </div>
          <div class="item">
            <z-avatar icon="hexin" bg-color="cs3" />
          </div>
          <div class="item">
            <z-avatar icon="hexin" bg-color="ce6" />
          </div>
          <div class="item">
            <z-avatar bg-color="cpink5" text="Z"></z-avatar>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="随机颜色">
      <div class="avatar-container">
        <div class="avatar-item">
          <div class="item">
            <z-avatar icon="hexin" randomBgColor />
          </div>
          <div class="item">
            <z-avatar icon="hexin" randomBgColor />
          </div>
          <div class="item">
            <z-avatar icon="hexin" randomBgColor />
          </div>
          <div class="item">
            <z-avatar randomBgColor text="Z"></z-avatar>
          </div>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="头像组基础使用">
      <div class="avatar-container">
        <div class="avatar-item">
          <z-avatar-group :urls="zAvatarGroupUrlList" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改头像组显示最大数量">
      <div class="avatar-container">
        <div class="avatar-item">
          <z-avatar-group :urls="zAvatarGroupUrlList" maxCount="3" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改头像组头像遮挡比例">
      <div class="avatar-container">
        <div class="avatar-item">
          <z-avatar-group :urls="zAvatarGroupUrlList" gap="0.6" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.avatar-category-title {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  :deep(.z-title) {
    font-weight: 500;
  }
}

.avatar-container {
  position: relative;
  width: 100%;

  .avatar-item {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    & + .avatar-item {
      margin-top: 30rpx;
    }

    .item {
      margin-right: 20rpx;
    }
  }
}
</style>
