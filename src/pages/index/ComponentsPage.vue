<!-- BasisPage -->
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
import { ref, onMounted, getCurrentInstance } from 'vue'
import type { Ref } from 'vue'

import { useIndexPageProvide } from '../../utils/use-index-page-provide'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { zNavPage } from 'zgg-ui/libs/zRouter'
const pageName = 'ComponentsPage'

onMounted(function () {
  ready()
})
const onShow = () => {}

const onLoad = () => {}

useIndexPageProvide('components', onShow, onLoad)

/** 准备好 */
function ready() {}

interface PageContainerDataItem {
  title: string
  path: string
  url: string
}

type PageContainerData = {
  title: string
  data: PageContainerDataItem[]
  tips?: string
}

const ComponentspageData: PageContainerData[] = [
  {
    title: '基础组件',
    tips: '',
    data: [
      {
        title: '文本',
        path: 'z-text',
        url: '/components-pages/z-text/index',
      },
      {
        title: '图片',
        path: 'z-image',
        url: '/components-pages/z-image/index',
      },
      {
        title: '加载图标',
        path: 'z-loading-icon',
        url: '/components-pages/z-loading-icon/index',
      },
    ],
  },
  {
    title: '布局组件',
    tips: '',
    data: [
      {
        title: '线条',
        path: 'z-line',
        url: '/components-pages/z-line/index',
      },
      {
        title: '单元格',
        path: 'z-cell',
        url: '/components-pages/z-cell/index',
      },
      {
        title: '吸顶',
        path: 'z-sticky',
        url: '/components-pages/z-sticky/index',
      },
      {
        title: '折叠面板',
        path: 'z-collapse',
        url: '/components-pages/z-collapse/index',
      },
      {
        title: '瀑布流',
        path: 'z-water-fall',
        url: '/components-pages/z-water-fall/index',
      },
      {
        title: '分段器',
        path: 'z-subsection',
        url: '/components-pages/z-subsection/index',
      },
      {
        title: '搜索框',
        path: 'z-search-box',
        url: '/components-pages/z-search-box/index',
      },
      {
        title: '选项卡切换',
        path: 'z-switch-tab',
        url: '/components-pages/z-switch-tab/index',
      },
      {
        title: '横向滚动',
        path: 'z-scroll-list',
        url: '/components-pages/z-scroll-list/index',
      },
      {
        title: '分割线',
        path: 'z-divider',
        url: '/components-pages/z-divider/index',
      },
      {
        title: '无网络提示',
        path: 'z-no-network',
        url: '/components-pages/z-no-network/index',
      },
    ],
  },
  {
    title: '反馈组件',
    tips: '',
    data: [
      {
        title: '弹出框',
        path: 'z-popup',
        url: '/components-pages/z-popup/index',
      },
      {
        title: '模态框',
        path: 'z-modal',
        url: '/components-pages/z-modal/index',
      },
      {
        title: '消息通知',
        path: 'z-notify',
        url: '/components-pages/z-notify/index',
      },
      {
        title: '通知栏',
        path: 'z-notice-bar',
        url: '/components-pages/z-notice-bar/index',
      },
      {
        title: '操作菜单',
        path: 'z-action-sheet',
        url: '/components-pages/z-action-sheet/index',
      },
      {
        title: '气泡弹框',
        path: 'z-bubble-box',
        url: '/components-pages/z-bubble-box/index',
      },
      {
        title: 'popup 操作栏',
        path: 'z-popup-bar',
        url: '/components-pages/z-popup-bar/index',
      },
      {
        title: '遮罩层',
        path: 'z-overlay',
        url: '/components-pages/z-overlay/index',
      },
      {
        title: '滑动菜单',
        path: 'z-swipe-action',
        url: '/components-pages/z-swipe-action/index',
      },
      {
        title: '加载更多',
        path: 'z-load-more',
        url: '/components-pages/z-load-more/index',
      },
      {
        title: '空白页',
        path: 'z-empty',
        url: '/components-pages/z-empty/index',
      },
      {
        title: '加载页',
        path: 'z-loading-page',
        url: '/components-pages/z-loading-page/index',
      },
    ],
  },
  {
    title: '导航组件',
    tips: '',
    data: [
      {
        title: '顶部导航栏',
        path: 'z-navbar',
        url: '/components-pages/z-navbar/index',
      },
      {
        title: '底部导航栏',
        path: 'z-tabbar',
        url: '/components-pages/z-tabbar/index',
      },
      {
        title: '标签栏',
        path: 'z-tabs',
        url: '/components-pages/z-tabs/index',
      },
      {
        title: '步骤条',
        path: 'z-steps',
        url: '/components-pages/z-steps/index',
      },
      {
        title: '索引列表',
        path: 'z-index-list',
        url: '/components-pages/z-index-list/index',
      },
      {
        title: '下拉菜单',
        path: 'z-drop-down',
        url: '/components-pages/z-drop-down/index',
      },
      {
        title: '返回顶部',
        path: 'z-back-top',
        url: '/components-pages/z-back-top/index',
      },
    ],
  },
  {
    title: '表单组件',
    tips: '',
    data: [
      {
        title: '表单',
        path: 'z-form',
        url: '/components-pages/z-form/index',
      },
      {
        title: '输入框',
        path: 'z-input',
        url: '/components-pages/z-input/index',
      },
      {
        title: '步进器',
        path: 'z-number-box',
        url: '/components-pages/z-number-box/index',
      },
      {
        title: '单选框',
        path: 'z-radio',
        url: '/components-pages/z-radio/index',
      },
      {
        title: '复选框',
        path: 'z-checkbox',
        url: '/components-pages/z-checkbox/index',
      },
      {
        title: 'Switch开关',
        path: 'z-switch',
        url: '/components-pages/z-switch/index',
      },
      {
        title: '滑动条',
        path: 'z-slider',
        url: '/components-pages/z-slider/index',
      },
      {
        title: 'Picker选择器',
        path: 'z-picker',
        url: '/components-pages/z-picker/index',
      },
      {
        title: '日期时间选择器',
        path: 'z-date-time-picker',
        url: '/components-pages/z-date-time-picker/index',
      },
      {
        title: '地区选择器',
        path: 'z-region-picker',
        url: '/components-pages/z-region-picker/index',
      },
      {
        title: '图片上传',
        path: 'z-image-upload',
        url: '/components-pages/z-image-upload/index',
      },
      {
        title: '评分',
        path: 'z-rate',
        url: '/components-pages/z-rate/index',
      },
      {
        title: '日历',
        path: 'z-calendar',
        url: '/components-pages/z-calendar/index',
      },
      {
        title: '周日历',
        path: 'z-week-calendar',
        url: '/components-pages/z-week-calendar/index',
      },
    ],
  },
  {
    title: '数据展示',
    tips: '',
    data: [
      {
        title: '进度条',
        path: 'z-progress',
        url: '/components-pages/z-progress/index',
      },
      {
        title: '倒计时',
        path: 'z-count-down',
        url: '/components-pages/z-count-down/index',
      },
      {
        title: '数字跳转',
        path: 'z-count-to',
        url: '/components-pages/z-count-to/index',
      },
      {
        title: '数字滚动',
        path: 'z-count-scroll',
        url: '/components-pages/z-count-scroll/index',
      },
    ],
  },
  {
    title: '内容展示',
    tips: '',
    data: [
      {
        title: '阅读更多',
        path: 'z-read-more',
        url: '/components-pages/z-read-more/index',
      },
      {
        title: '相册',
        path: 'z-photo-album',
        url: '/components-pages/z-photo-album/index',
      },
      {
        title: '轮播图',
        path: 'z-swiper',
        url: '/components-pages/z-swiper/index',
      },
    ],
  },
  {
    title: '其他组件',
    tips: '',
    data: [
      {
        title: '间隔槽',
        path: 'z-gap',
        url: '/components-pages/z-gap/index',
      },
      {
        title: '超链接',
        path: 'z-link',
        url: '/components-pages/z-link/index',
      },
      {
        title: '动画',
        path: 'z-transition',
        url: '/components-pages/z-transition/index',
      },
      {
        title: '软键盘',
        path: 'z-keyboard',
        url: '/components-pages/z-keyboard/index',
      },
      {
        title: '懒加载',
        path: 'z-lazy-load',
        url: '/components-pages/z-lazy-load/index',
      },
      {
        title: '验证码输入',
        path: 'z-code-input',
        url: '/components-pages/z-code-input/index',
      },
    ],
  },
]

const noticeData = [
  '以下为常用组件↓ ↓ ↓ ------------- ZGGUI 全面上线, 高效 快速搭建多平台移动端, 如有任何使用问题, 欢迎询问',
]

const pageTo = (path: string) => {
  ;(zNavPage as Function)(path, 'navigateTo').catch(() => {
    uni.showToast({
      title: '暂未发布',
      icon: 'none',
    })
  })
}
</script>

<template>
  <div class="ComponentsPage dfc aic">
    <z-status-bar></z-status-bar>
    <div style="width: 100%; min-height: 40px"></div>
    <z-notice-bar :data="noticeData" :speed="150" textColor="primary"></z-notice-bar>
    <div class="list-container">
      <div v-for="(item, index) in ComponentspageData" :key="index" class="list-item">
        <div class="list-title">
          <z-title
            :title="item.title"
            :sub-title="item.title"
            color="primary"
            size="xlarge"
          />
        </div>
        <div v-if="!!item.tips" class="list-tips ce5">
          {{ item.tips }}
        </div>
        <div class="content-container">
          <div
            v-for="(dItem, dIndex) in item.data"
            :key="dIndex"
            class="component dfc jcc aifs cw"
            @tap.stop="pageTo(dItem.url)"
          >
            <z-title
              :color="'cb'"
              :size="'17'"
              :otherStyle="{
                padding: '5rpx',
                fontWeight: 'bolder',
              }"
              @click="pageTo(dItem.url)"
            >
              {{ dItem.title }}
            </z-title>
            <div style="width: 100%" class="dfr jcfe">
              <z-title
                :color="'cgray1'"
                :size="'large'"
                :otherStyle="{
                  padding: '5rpx',
                }"
                @click="pageTo(dItem.url)"
              >
                {{ dItem.path }}
              </z-title>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style lang="less" scoped>
.ComponentsPage {
  height: 100%;
  width: 100%;
  .TopBarHeight {
    height: 60px;
    width: 100vw;
  }

  .list-container {
    position: relative;
    width: 90%;

    .list-item {
      position: relative;
      width: 100%;
      margin-top: 60rpx;

      &:first-of-type {
        margin-top: 0;
      }

      // 标题
      .list-title {
        position: relative;

        padding-left: 26rpx;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 10rpx;
          height: 70%;
          border-radius: 100rpx;
          background-color: @primary;
          transform: translateY(-58%);
        }
      }

      // 提示
      .list-tips {
        margin-top: 20rpx;
        text-align: justify;
        font-size: 32rpx;
        font-weight: 600;
      }

      .content-container {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .component {
          width: 44%;
          height: 120rpx;
          padding: 10rpx;
          margin: 10rpx;
          border-radius: 15rpx;
          background: linear-gradient(135deg, #acd1ec 40%, #b3e5ff 60%, #8ccfff 100%);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}
</style>
