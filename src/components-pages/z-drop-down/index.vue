<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref, computed } from 'vue'

type SelectOrderConditionDataItem = {
  title: string
  condition: string
  select: boolean
}

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-drop-down/index',
})
const { isDemoH5Page } = useDemoH5Page()
const openDropDown = ref<boolean>(false)
const dropdownItemIndex = ref<number>(-1)
const priceSort = ref<'up' | 'down'>('up')

const selectOrderConditionData = ref<SelectOrderConditionDataItem[]>([
  {
    title: '综合推荐',
    condition: '综合推荐',
    select: true,
  },
  {
    title: '评论',
    condition: '评论数从高到低',
    select: false,
  },
])
const orderConditionTitle = computed<string>(
  () => selectOrderConditionData.value.find(item => item.select)?.title || ''
)

// 下拉框菜单选项点击事件
const dropdownMenuItemClickHandle = (index: number) => {
  dropdownItemIndex.value = index
  switch (index) {
    case 0:
      openDropDown.value = true
      break
    case 1:
      uni.showToast({
        icon: 'none',
        title: '按照销量排序',
      })
      break
    case 2:
      if (priceSort.value === 'up') {
        priceSort.value = 'down'
        uni.showToast({
          icon: 'none',
          title: '按照价格降序排序',
        })
      } else {
        priceSort.value = 'up'
        uni.showToast({
          icon: 'none',
          title: '按照价格升序排序',
        })
      }
      break
  }
}

// 排序条件选择事件
const sortConditionSelectHandle = (index: number) => {
  selectOrderConditionData.value.forEach((item, i) => {
    if (index === i) item.select = true
    else item.select = false
  })
  openDropDown.value = false
}
</script>

<template>
  <CustomPage title="下拉框" padding="0" :is-h5-demo-page="isDemoH5Page">
    <div class="dropdown-container">
      <z-drop-down v-model:open="openDropDown">
        <template #menu>
          <div class="dropdown-menu">
            <div
              class="dropdown-menu-item"
              @tap.stop="dropdownMenuItemClickHandle(0)"
            >
              <div class="text">{{ orderConditionTitle }}</div>
              <div class="icon" :class="[{ active: openDropDown }]">
                <z-icon name="jiantouxia" />
              </div>
            </div>
            <div
              class="dropdown-menu-item"
              :class="[dropdownItemIndex === 1 ? 'ce5' : '']"
              @tap.stop="dropdownMenuItemClickHandle(1)"
            >
              销量
            </div>
            <div
              class="dropdown-menu-item"
              @tap.stop="dropdownMenuItemClickHandle(2)"
            >
              <div class="text">价格</div>
              <div class="double-icon">
                <div class="top" :class="[priceSort === 'up' ? 'ce5' : '']">
                  <z-icon name="jiantoushang" />
                </div>
                <div class="bottom" :class="[priceSort === 'down' ? 'ce5' : '']">
                  <z-icon name="jiantouxia" />
                </div>
              </div>
            </div>
          </div>
        </template>

        <div class="dropdown-content">
          <div class="recommend-list">
            <div
              v-for="(item, index) in selectOrderConditionData"
              :key="index"
              class="recommend-list-item"
              @tap.stop="sortConditionSelectHandle(index)"
            >
              <div v-if="item.select" class="item-select-icon ce5">
                <z-icon name="zhengque" />
              </div>
              <div class="item-text">{{ item.condition }}</div>
            </div>
          </div>
        </div>
      </z-drop-down>
    </div>
  </CustomPage>
</template>

<style lang="less" scoped>
.dropdown-container {
  position: relative;
  width: 100%;

  .dropdown-menu {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;

    .dropdown-menu-item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10rpx 0rpx;

      .icon {
        margin-left: 6rpx;
        transform-origin: center center;
        transform: rotate(0deg);
        transition: transform 0.25s linear;
        line-height: 1;

        &.active {
          transform: rotate(-180deg);
        }
      }

      .double-icon {
        margin-left: 6rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .top {
          transform: translateY(8rpx);
        }
        .bottom {
          transform: translateY(-8rpx);
        }
      }
    }
  }

  .dropdown-content {
    position: relative;
    width: 100%;
    padding: 0rpx 30rpx;

    .recommend-list {
      position: relative;
      width: 100%;

      .recommend-list-item {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 20rpx 0rpx;

        .item-select-icon {
          margin-right: 20rpx;
        }
      }
    }
  }
}
</style>
