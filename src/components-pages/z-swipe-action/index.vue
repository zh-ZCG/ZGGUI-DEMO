<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

import { SwipeActionItemOption } from 'zgg-ui/components/z-swipe-action-item/z-swipe-action-item'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-swipe-action/index',
})
const { isDemoH5Page } = useDemoH5Page()
// 菜单选项
const swipeActionItemOption: SwipeActionItemOption[] = [
  { text: '标记已读', bgColor: 'primary' },
  { text: '置顶', bgColor: 'warning' },
  { text: '删除', bgColor: 'error' },
]

// 圆形图标菜单选项
const swipeActionItemCircleIconOption: SwipeActionItemOption[] = [
  { icon: 'hexin', bgColor: 'primary', round: true },
  { icon: 'jichuzujian', bgColor: 'warning', round: true },
  { icon: 'star3', bgColor: 'error', round: true },
]

// 菜单选中事件
const swipeActionOptionSelectEvent = (
  index: string | number,
  optionIndex: number
) => {
  uni.showToast({
    title: `选中了第${index}个滑动菜单的第${optionIndex}个选项`,
    icon: 'none',
  })
}
</script>

<template>
  <CustomPage title="滑动菜单" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <div class="swipe-action-container">
        <div class="swipe-action-item">
          <z-swipe-action @select="swipeActionOptionSelectEvent">
            <z-swipe-action-item
              v-for="i in 3"
              :key="i"
              :options="swipeActionItemOption"
            >
              <div class="content">
                <div class="avatar">
                  <image
                    src="http://192.168.1.15/testapkwgt/mm.png"
                    mode="aspectFill"
                    style="width: 110rpx; height: 110rpx"
                  />
                </div>
                <div class="content-detail">
                  <div class="top">
                    <div class="nickname">ZGGUI</div>
                  </div>
                  <div class="bottom">
                    <div class="message">
                      <text>有消息送达了</text>
                    </div>
                  </div>
                </div>
              </div>
            </z-swipe-action-item>
          </z-swipe-action>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁止第一项打开选项菜单">
      <div class="swipe-action-container">
        <div class="swipe-action-item">
          <z-swipe-action>
            <z-swipe-action-item
              v-for="i in 3"
              :key="i"
              :options="swipeActionItemOption"
              :disabled="i === 1"
            >
              <div class="content">
                <div class="avatar">
                  <image
                    src="http://192.168.1.15/testapkwgt/mm.png"
                    mode="aspectFill"
                    style="width: 110rpx; height: 110rpx"
                  />
                </div>
                <div class="content-detail">
                  <div class="top">
                    <div class="nickname">ZGGUI</div>
                  </div>
                  <div class="bottom">
                    <div class="message">
                      <text>有消息送达了</text>
                    </div>
                  </div>
                </div>
              </div>
            </z-swipe-action-item>
          </z-swipe-action>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="允许划出多个菜单">
      <div class="swipe-action-container">
        <div class="swipe-action-item">
          <z-swipe-action :exclusive="false">
            <z-swipe-action-item
              v-for="i in 3"
              :key="i"
              :options="swipeActionItemOption"
            >
              <div class="content">
                <div class="avatar">
                  <image
                    src="http://192.168.1.15/testapkwgt/mm.png"
                    mode="aspectFill"
                    style="width: 110rpx; height: 110rpx"
                  />
                </div>
                <div class="content-detail">
                  <div class="top">
                    <div class="nickname">ZGGUI</div>
                    <div class="date">10月31日</div>
                  </div>
                  <div class="bottom">
                    <div class="message">
                      <text>有消息送达了</text>
                    </div>
                  </div>
                </div>
              </div>
            </z-swipe-action-item>
          </z-swipe-action>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="圆形图标菜单">
      <div class="swipe-action-container">
        <div class="swipe-action-item">
          <z-swipe-action>
            <z-swipe-action-item
              v-for="i in 3"
              :key="i"
              :options="swipeActionItemCircleIconOption"
            >
              <div class="content">
                <div class="avatar">
                  <image
                    src="http://192.168.1.15/testapkwgt/mm.png"
                    mode="aspectFill"
                    style="width: 110rpx; height: 110rpx"
                  />
                </div>
                <div class="content-detail">
                  <div class="top">
                    <div class="nickname">ZGGUI</div>
                    <div class="date">10月31日</div>
                  </div>
                  <div class="bottom">
                    <div class="message">
                      <text>有消息送达了</text>
                    </div>
                  </div>
                </div>
              </div>
            </z-swipe-action-item>
          </z-swipe-action>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.swipe-action-container {
  position: relative;
  width: 100%;

  .swipe-action-item {
    position: relative;
    width: 100%;

    & + .swipe-action-item {
      margin-top: 30rpx;
    }

    .content {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .avatar {
        flex-shrink: 0;
        flex-grow: 0;
        width: 110rpx;
        height: 110rpx;
        border-radius: 50%;
        background-color: #eeeeee;
      }

      .content-detail {
        flex: 1;
        margin-left: 26rpx;
        line-height: 1;

        .top {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          .nickname {
            font-size: 34rpx;
          }
          .date {
            font-size: 22rpx;
            color: @info;
            margin-top: 8rpx;
            margin-right: 8rpx;
          }
        }

        .bottom {
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          .message {
            height: 1em;
            overflow: hidden;
            color: @info;
            margin-right: 80rpx;
          }
        }
      }
    }
  }
}
</style>
