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
  path: '/components-pages/z-load-more line/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 自定义加载文案
const customLoadmoreText = [
  '往下滑试试',
  '等等，数据正在赶来路上',
  '没有啦，不要滑啦',
]
</script>

<template>
  <CustomPage title="加载更多" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="loadmore-container">
        <div class="loadmore-item">
          <z-load-more line />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义文案">
      <div class="loadmore-container">
        <div class="loadmore-item">
          <z-load-more line :loadmoreText="customLoadmoreText[0]" />
        </div>
        <div class="loadmore-item">
          <z-load-more
            status="loading"
            fontSize="14"
            line
            :loadingText="customLoadmoreText[1]"
          />
        </div>
        <div class="loadmore-item">
          <z-load-more status="nomore" line :nomoreText="customLoadmoreText[2]" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="设置加载中加载图标">
      <div class="loadmore-container">
        <div class="loadmore-item">
          <z-load-more
            line
            status="loading"
            iconColor="success"
            loadingIcon="circle"
          />
        </div>
        <div class="loadmore-item">
          <z-load-more
            line
            status="loading"
            iconColor="warning"
            loadingIcon="flower"
          />
        </div>
        <div class="loadmore-item">
          <z-load-more
            line
            status="loading"
            iconColor="error"
            loadingIcon="semicircle"
          />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏文案">
      <div class="loadmore-container">
        <div class="loadmore-item">
          <z-load-more status="loading" line iconColor="primary" :loading-text="''" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <div class="loadmore-container">
        <div class="loadmore-item">
          <z-load-more line fontSize="16" />
        </div>
        <div class="loadmore-item">
          <z-load-more line status="loading" fontSize="18" />
        </div>
        <div class="loadmore-item">
          <z-load-more line status="nomore" fontSize="20" />
        </div>
        <div class="loadmore-item">
          <z-load-more line status="loadmore" fontSize="22" />
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <div class="loadmore-container">
        <div class="loadmore-item">
          <z-load-more line color="error" />
        </div>
        <div class="loadmore-item">
          <z-load-more line status="loading" color="disabled" />
        </div>
        <div class="loadmore-item">
          <z-load-more line color="success" />
        </div>
        <div class="loadmore-item">
          <z-load-more line color="primary" />
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.loadmore-container {
  position: relative;
  width: 100%;

  .loadmore-item {
    position: relative;
    width: 100%;

    & + .loadmore-item {
      margin-top: 30rpx;
    }
  }
}
</style>
