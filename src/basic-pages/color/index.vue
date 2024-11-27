<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import {
  ref,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  nextTick,
  computed,
  CSSProperties,
} from 'vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import z from 'zgg-ui/libs/z'
import zColor from 'zgg-ui/libs/zColor'
import { useObserver } from 'zgg-ui/libs/Hooks/z-use-observe'
import { useUniAppSystemRectInfo } from 'zgg-ui/libs/use-uniapp-system-rect-info/use-uniapp-system-rect-info'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/basic-pages/color/index',
})
const { isDemoH5Page } = useDemoH5Page()

const instance = getCurrentInstance()

const { systemScreenInfo, navBarInfo } = useUniAppSystemRectInfo()
const { connectObserver, disconnectObserver } = useObserver(instance)

const componentTypes = ['primary', 'success', 'error', 'warning', 'info']

const colorTypes = componentTypes.filter(item => item)

const ZGGUIColors = [
  'black',
  'gray',
  'red',
  'pink',
  'orange',
  'yellow',
  'green',
  'blue',
  'bluegray',
  'cyan',
  'purple',
  'brown',
]

// 展示容器id
const showContainerId = `c-${instance?.uid}`

// 当前选中的颜色索引
const currentSelectColorIndex = ref<number>(0)

// 选中后选择器容器的颜色
const selectContainerBgColor = ref('blue')
const selectContainerStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    height: `calc(100vh - ${navBarInfo.height}px)`,
    top: `${navBarInfo.height}px`,
  }

  if (selectContainerBgColor.value) {
    style.backgroundColor = zColor.getTypeColor(`c${selectContainerBgColor.value}5`)
  }

  return style
})

// 选项对应的类
const selectItemClass = computed<(index: number) => string>(() => {
  return (index: number) => {
    const cls: string[] = []
    if (index === currentSelectColorIndex.value) {
      cls.push('active')
    }

    return cls.join(' ')
  }
})

// 颜色点击事件
let clickEventFlag = false
const colorClickEvent = (color: string, index: number) => {
  if (index === currentSelectColorIndex.value) return
  clickEventFlag = true
  currentSelectColorIndex.value = index
  selectContainerBgColor.value = color

  // 滚动到指定的颜色
  uni.pageScrollTo({
    scrollTop: showContainerTopList[index] - navBarInfo.height,
    duration: 150,
  })

  updateSelectContainerScrollViewPosition()
}

// 监听展示容器触顶事件
const monitorDataContainerScrollInfo = () => {
  disconnectObserver()
  connectObserver(
    '.show-container-title',
    (observerRes: any) => {
      if (observerRes.intersectionRatio > 0.98) {
        if (clickEventFlag) {
          clickEventFlag = false
          return
        }
        const index = Number(observerRes.id.replace(`${showContainerId}-`, ''))
        if (index !== currentSelectColorIndex.value) {
          currentSelectColorIndex.value = index
          if (index == 0) {
            selectContainerBgColor.value = 'blue'
          } else {
            selectContainerBgColor.value = `${
              ZGGUIColors[currentSelectColorIndex.value - 1]
            }`
          }

          updateSelectContainerScrollViewPosition()
        }
      }
    },
    {
      type: 'relativeToViewport',
      margins: {
        top: -navBarInfo.height,
      },
    },
    {
      thresholds: [0.95, 0.98, 1],
      observeAll: true,
    }
  )
}

// 每个展示容器的栏目Top值
let showContainerTopList: number[] = []
// 每个颜色选择选项的位置信息
let selectContainerTopList: number[] = []
// 获取容器栏目/选项的位置信息
let initCount = 0
const getContainerRectInfo = async () => {
  try {
    const showContainerNodeInfos = await z.getDomInfos(
      '.show-container-content',
      instance
    )
    const selectContainerNodeInfos = await z.getDomInfos(
      '.scroll-view-item',
      instance
    )
    if (
      !showContainerNodeInfos ||
      !showContainerNodeInfos.length ||
      !selectContainerNodeInfos ||
      !selectContainerNodeInfos.length
    ) {
      if (initCount > 10) {
        throw new Error('获取展示容器栏目节点信息失败')
      }
      initCount++
      setTimeout(() => {
        getContainerRectInfo()
      }, 150)
      return
    }

    initCount = 0
    showContainerTopList = showContainerNodeInfos.map(item => item.top || 0)
    selectContainerTopList = selectContainerNodeInfos.map(item => item.top || 0)
    monitorDataContainerScrollInfo()
  } catch (err) {
    z.error(`Color页面获取展示容器栏目节点信息失败: ${err}`)
  }
}

// 更新颜色选项ScrollView的位置，让其在居中的位置
const selectContainerScrollTop = ref<number>(0)
const updateSelectContainerScrollViewPosition = () => {
  const containerHeight = systemScreenInfo.height - navBarInfo.height
  const top =
    selectContainerTopList[currentSelectColorIndex.value] -
    navBarInfo.height -
    (containerHeight - 45) / 2
  selectContainerScrollTop.value = top < 0 ? 0 : top
}

onMounted(() => {
  nextTick(() => {
    getContainerRectInfo()
  })
})

onUnmounted(() => {
  disconnectObserver()
})
</script>

<template>
  <CustomPage title="color颜色" padding="0" :is-h5-demo-page="isDemoH5Page">
    <div class="color-page">
      <div class="select-container" :style="selectContainerStyle">
        <scroll-view
          class="scroll-view"
          scroll-y
          :scroll-top="selectContainerScrollTop"
          scroll-with-animation
        >
          <div class="content">
            <div
              class="scroll-view-item border"
              :class="[selectItemClass(0)]"
              @tap.stop="colorClickEvent('blue', 0)"
            >
              <z-icon :name="'http://192.168.1.15/testapkwgt/mm.png'" />
            </div>
            <div
              v-for="(color, index) in ZGGUIColors"
              :key="index"
              class="scroll-view-item border"
              :class="[selectItemClass(index + 1), `bg${color}1`]"
              @tap.stop="colorClickEvent(`${color}`, index + 1)"
            />
          </div>
        </scroll-view>
      </div>
      <div class="show-container">
        <!-- 主题配色 -->
        <div class="show-container-content">
          <div :id="`${showContainerId}-0`" class="show-container-title">
            主题配色
          </div>
          <div class="data">
            <div
              v-for="(item, index) in colorTypes"
              :key="index"
              class="item-vertical"
            >
              <div class="item-title" :style="`color:${zColor.getTypeColor(item)}`">
                {{ item }}
              </div>
              <div class="item-data">
                <div
                  v-for="(otherItem, otherIndex) in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
                  :key="otherIndex"
                  class="type-color"
                  :class="
                    otherIndex < 5
                      ? `bg${item.substring(0, 1)}${otherItem}`
                      : `bg${item.substring(0, 1)}${otherItem} cw`
                  "
                >
                  c{{ item.substring(0, 1) }}{{ otherItem }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ZGGUI内置颜色 -->
        <div
          v-for="(colorItem, colorIndex) in ZGGUIColors"
          :key="colorIndex"
          class="show-container-content"
        >
          <div
            :id="`${showContainerId}-${colorIndex + 1}`"
            :class="`c${colorItem}1`"
            class="show-container-title"
          >
            {{ colorItem }}
          </div>
          <div class="data">
            <div
              v-for="(typeItem, typeIndex) in [1, 2, 3, 4, 5]"
              :key="typeIndex"
              class="usual-item cling-to"
              :class="[
                typeIndex < 2
                  ? `bg${colorItem}${typeItem} cw`
                  : `bg${colorItem}${typeItem}`,
              ]"
            >
              <div class="data-name">c{{ colorItem }}{{ typeItem }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CustomPage>
</template>

<style lang="less" scoped>
.color-page {
  position: relative;
  width: 100%;
}

.select-container {
  position: fixed;
  left: 0;
  z-index: 2;

  .scroll-view {
    width: 100%;
    height: 100%;
    .content {
      position: relative;
      padding: 30rpx 20rpx;
      .scroll-view-item {
        width: 64rpx;
        height: 64rpx;
        margin-bottom: 30rpx;
        font-size: 40rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
      }
      .active {
        transform: scale(1.2);
      }
      .border {
        border-radius: 50%;
      }
    }
  }
}

.show-container {
  position: relative;
  width: auto;
  padding: 30rpx;
  padding-left: 130rpx;
  z-index: 1;

  .show-container-content {
    & + & {
      margin-top: 50rpx;
    }
    .show-container-title {
      font-size: 42rpx;
      margin-bottom: 30rpx;
    }
    .data {
      .item-vertical {
        position: relative;
        width: 100%;

        & + & {
          margin-top: 30rpx;
        }

        .item-title {
          font-size: 36rpx;
          margin-bottom: 20rpx;
        }

        .item-data {
          width: 100%;
          height: 160rpx;
          display: flex;

          .type-color {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            &:nth-of-type(1) {
              border-top-left-radius: 15rpx;
            }
            &:last-of-type {
              border-top-right-radius: 15rpx;
            }
          }
        }
      }
      .usual-item {
        padding: 40rpx 30rpx 40rpx 30rpx;
        border-radius: 15rpx;
        margin-bottom: 20rpx;
        line-height: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        // 紧贴
        .cling-to {
          border-radius: 0rpx;
          & + & {
            margin-top: 0;
          }

          &:nth-of-type(1) {
            border-top-left-radius: 15rpx;
            border-top-right-radius: 15rpx;
          }
          &:nth-of-type(4) {
            border-bottom-left-radius: 15rpx;
            border-bottom-right-radius: 15rpx;
          }
        }

        // 没有该元素
        &.no-element {
          display: none;
        }

        & + & {
          margin-top: 30rpx;
        }

        .data-name {
          font-size: 38rpx;
          &.small {
            font-size: 30rpx;
          }
        }
        .data-value {
          font-size: 24rpx;
          margin-top: 14rpx;
          text-transform: uppercase;
        }
        .no-upper {
          text-transform: none;
        }
      }
    }
  }
}
</style>
