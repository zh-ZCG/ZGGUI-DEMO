<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/customPage.vue'
import DemoContainer from '@/components/container.vue'
import IndexListItem from './components/index-list-item.vue'

import type {
  IndexListData,
  IndexListDataItemData,
  IndexListKeys,
} from 'zgg-ui/components/z-index-list/z-index-list'

import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { ref } from 'vue'

import { useUniAppSystemRectInfo } from 'zgg-ui/libs/use-uniapp-system-rect-info/use-uniapp-system-rect-info'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

useWxShare({
  path: '/components-pages/z-index-list/base-index-list',
})
const { isDemoH5Page } = useDemoH5Page()
const { navBarInfo, systemScreenInfo } = useUniAppSystemRectInfo()
// 头像链接数组
const avatarUrls = [
  'http://192.168.1.15/testapkwgt/mm.png',
  'http://192.168.1.15/testapkwgt/hh.png',
  'http://192.168.1.15/testapkwgt/sll.png',
]

// 列表数据
const listData = ref<IndexListData>({})

// 随机生成列表数据
const generateListItemData = (key: string) => {
  const data: IndexListDataItemData[] = []

  for (let i = 0; i < 5; i++) {
    const starCount = data.filter(item => item.star).length
    const star = Math.random() > 0.5 && starCount < 1
    // 随机选择一个头像
    const avatar = avatarUrls[Math.floor(Math.random() * avatarUrls.length)]

    data.push({
      id: i,
      avatar,
      nickname: `员工-${key}-${i}`,
      department: `${star ? '主管' : `${key}部门`}`,
      star,
    })
  }
  return data
}

// 生成列表数据
const generateListData = () => {
  for (let i = 0; i < 26; i++) {
    const key = String.fromCharCode(65 + i)
    listData.value[key as IndexListKeys] = {
      title: key.toUpperCase(),
      data: generateListItemData(key),
    }
  }

  // 添加#为key的对象
  listData.value['#'] = {
    title: '#',
    data: [
      {
        id: 0,
        avatar: avatarUrls[0],
        nickname: '开发部门-开发1号',
        department: '开发',
      },
      {
        id: 1,
        avatar: avatarUrls[1],
        nickname: '开发部门-开发2号',
        department: '开发',
      },
      {
        id: 2,
        avatar: avatarUrls[2],
        nickname: '开发部门-开发3号',
        department: '开发',
      },
    ],
  }
}

generateListData()
</script>

<template>
  <CustomPage
    title="基础索引列表"
    padding="0"
    :navbar-placeholder="false"
    :bottom-more-space="false"
    only-back
  >
    <z-index-list
      :data="listData"
      :sticky-offset-top="navBarInfo.height"
      :height="systemScreenInfo.height"
    >
      <template #default="{ data }">
        <IndexListItem
          :avatar="data.avatar"
          :nickname="data.nickname"
          :department="data.department"
        />
      </template>
    </z-index-list>
  </CustomPage>
</template>

<style lang="less" scoped></style>
