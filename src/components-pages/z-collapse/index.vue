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
  path: '/components-pages/z-collapse/index',
})
const { isDemoH5Page } = useDemoH5Page()

const currentCollapse = ref<number>()
const currentCustomCollapse = ref<number>(1)

const collapseData: { title: string; content: string }[] = [
  {
    title: '别',
    content:
      '在春天，你把手帕轻挥，是让我远去，还是马上返回？不，什么也不是，什么也不因为，就像水中的落花，就像花上的露水，只有影子懂得，只有风能体会，只有叹息惊起的彩蝶，还在心花中纷飞。',
  },
  {
    title: '黄鹤楼',
    content:
      '昔人已乘黄鹤去，此地空余黄鹤楼。黄鹤一去不复返，白云千载空悠悠。晴川历历汉阳树，芳草萋萋鹦鹉洲。日暮乡关何处是，烟波江上使人愁。',
  },
  {
    title: '远和近',
    content: '你，一会看我，一会看云，我觉得，你看我时很远，你看云时很近',
  },
]
</script>

<template>
  <CustomPage
    title="折叠面板"
    :is-h5-demo-page="isDemoH5Page"
    page-bg-color="#ebeef5"
  >
    <DemoContainer title="基础使用">
      <div class="collapse-container">
        <div class="collapse-item">
          当前选中的折叠面板：
          <text>
            {{ currentCollapse === undefined ? '未打开' : currentCollapse }}
          </text>
        </div>
        <div class="collapse-item bgw">
          <z-collapse v-model="currentCollapse">
            <z-collapse-item
              v-for="(item, index) in collapseData"
              :key="index"
              :title="item.title"
            >
              {{ item.content }}
            </z-collapse-item>
          </z-collapse>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="面板共存">
      <div class="collapse-container">
        <div class="collapse-item bgw">
          <z-collapse :accordion="false">
            <z-collapse-item
              v-for="(item, index) in collapseData"
              :key="index"
              :title="item.title"
            >
              {{ item.content }}
            </z-collapse-item>
          </z-collapse>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="隐藏箭头">
      <div class="collapse-container">
        <div class="collapse-item bgw">
          <z-collapse :show-arrow="false">
            <z-collapse-item
              v-for="(item, index) in collapseData"
              :key="index"
              :title="item.title"
            >
              {{ item.content }}
            </z-collapse-item>
          </z-collapse>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="修改箭头颜色">
      <div class="collapse-container">
        <div class="collapse-item bgw">
          <z-collapse arrow-color="primary">
            <z-collapse-item
              v-for="(item, index) in collapseData"
              :key="index"
              :title="item.title"
            >
              {{ item.content }}
            </z-collapse-item>
          </z-collapse>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="禁止点击第二项">
      <div class="collapse-container">
        <div class="collapse-item bgw">
          <z-collapse>
            <z-collapse-item
              v-for="(item, index) in collapseData"
              :key="index"
              :title="item.title"
              :disabled="index === 1"
            >
              {{ item.content }}
            </z-collapse-item>
          </z-collapse>
        </div>
      </div>
    </DemoContainer>
    <DemoContainer title="自定义标题内容">
      <div class="collapse-container">
        <div class="collapse-item bgw">
          <z-collapse v-model="currentCustomCollapse">
            <z-collapse-item v-for="(item, index) in collapseData" :key="index">
              <template #title>
                <div class="title">
                  <div v-if="index === 1" class="icon">
                    <z-icon name="hexin" />
                  </div>
                  <div
                    class="value"
                    :class="[index === currentCustomCollapse ? 'cb' : 'cgray5']"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </template>
              {{ item.content }}
            </z-collapse-item>
          </z-collapse>
        </div>
      </div>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="less" scoped>
.collapse-container {
  position: relative;
  width: 100%;

  .collapse-item {
    position: relative;
    width: 100%;
    border-radius: 15rpx;

    & + .collapse-item {
      margin-top: 30rpx;
    }

    .title {
      display: flex;
      align-items: center;
      .value {
        transition: color 0.3s ease;
      }
    }
  }
}
</style>
