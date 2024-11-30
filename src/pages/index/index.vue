<script setup lang="ts">
import { ref, nextTick, provide, reactive, computed, CSSProperties } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { IndexSubPageContext, indexPageContextKey } from '@/utils/index-page'
import { useOrderedChildren } from 'zgg-ui/libs/Hooks/z-use-order-children'
import BasisPage from './BasisPage.vue'
import AboutPage from './AboutPage.vue'
import ComponentsPage from './ComponentsPage.vue'
import { useDemoH5Page, useWxShare } from '@/hooks/index'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'

declare var wx: {
  /** 隐私接口*/
  openPrivacyContract: (options: {
    /** 接口调用成功的回调函数 */
    success?: (e: any) => void
    /** 接口调用失败的回调函数 */
    fail?: (e: any) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: (e: any) => void
  }) => void

  /**判断是否同意隐私政策 */
  getPrivacySetting: (options: {
    /** 接口调用成功的回调函数 */
    success?: (e: any) => void
    /** 接口调用失败的回调函数 */
    fail?: (e: any) => void
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: (e: any) => void
  }) => void
}

// 当前选中的子页面的索引
const currentTabbarIndex = ref<number>(0)

const {
  children: items,
  addChild: addItem,
  removeChild: removeItem,
} = useOrderedChildren<IndexSubPageContext>()

// 底部导航栏数据
const tabbarData = [
  { text: '基础', icon: 'fuwuzujian', bulge: false },
  { text: '组件', icon: 'hexin', bulge: true },
  { text: '关于', icon: 'wo', bulge: false },
]

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))

const WxSharePath = computed(() => {
  return '/pages/index/index'
})

useWxShare({
  path: WxSharePath.value,
})

// 记录每个子页面的状态
const pageStatus = ref(Array.from({ length: tabbarData.length }, () => false))

// 导航切换事件
const onTabbarChange = (index: string | number) => {
  pageStatus.value.forEach((elem, pageIndex) => {
    if (pageIndex == index) {
      pageStatus.value[index as number] = true
      nextTick(() => {
        items.value?.[index as number]?.onLoad?.()
      })
    } else {
      pageStatus.value[pageIndex as number] = false
    }
  })
  items.value?.[index as number]?.onShow?.()
}

// pageContainer的样式
const pageContainerStyle = computed<(index: number) => CSSProperties>(() => {
  return (index: number) => {
    const style: CSSProperties = {}

    if (index !== currentTabbarIndex.value) {
      style.display = 'none'
    }

    return style
  }
})

/**是否展示隐私 */
const showyingsi = ref(false)

function handleAgreePrivacyAuthorization() {
  // 用户同意隐私协议事件回调
  // 用户点击了同意，之后所有已声明过的隐私接口和组件都可以调用了
  showyingsi.value = false
}
function handleOpenPrivacyContract() {
  // 打开隐私协议页面
  wx.openPrivacyContract({
    success: () => {}, // 打开成功
    fail: () => {}, // 打开失败
    complete: () => {},
  })
}

onLoad((options: any) => {
  // #ifdef MP-WEIXIN
  wx.getPrivacySetting({
    success: res => {
      console.log(res) // 返回结果为: res = { needAuthorization: true/false, privacyContractName: '《xxx隐私保护指引》' }
      if (res.needAuthorization) {
        // 需要弹出隐私协议
        showyingsi.value = true
      } else {
        // 用户已经同意过隐私协议，所以不需要再弹出隐私协议，也能调用已声明过的隐私接口
      }
    },
    fail: () => {},
    complete: () => {},
  })
  // #endif

  // 获取当前进入的子页面的索引
  const index = Number(options?.index || 0)
  // 设置当前子页面的状态为true
  pageStatus.value[index] = true
  nextTick(() => {
    currentTabbarIndex.value = index
    setTimeout(() => {
      // 执行子页面的onLoad钩子
      items.value?.[index]?.onLoad?.()
    }, 50)
  })
})

provide(
  indexPageContextKey,
  reactive({
    items: items.value,
    addItem,
    removeItem,
  })
)
</script>

<template>
  <div class="dfc" style="width: 100vw">
    <div class="content" v-if="pageStatus[0]" :style="pageContainerStyle(0)">
      <scroll-view scroll-y style="width: 100%; height: 100%">
        <BasisPage />
      </scroll-view>
    </div>
    <div class="content" v-if="pageStatus[1]" :style="pageContainerStyle(1)">
      <scroll-view scroll-y style="width: 100%; height: 100%">
        <ComponentsPage />
      </scroll-view>
    </div>
    <div class="content" v-if="pageStatus[2]" :style="pageContainerStyle(2)">
      <scroll-view scroll-y style="width: 100%; height: 100%">
        <AboutPage />
      </scroll-view>
    </div>
    <div
      class="dfc pf z1"
      style="
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        bottom: 0;
        left: 0;
        transition: 0.3s all ease-in-out;
        overflow: hidden;
      "
      :style="showyingsi ? 'height: 100vh;' : 'height:0vh'"
    >
      <div
        class="pa bgw dfc aic"
        style="
          width: 100vw;
          height: 600rpx;
          bottom: 0;
          border-top-left-radius: 25rpx;
          border-top-right-radius: 25rpx;
          transition: 0.3s all ease-in-out;
        "
        :style="showyingsi ? '600rpx' : 'height:0rpx'"
      >
        <div style="width: 90vw" class="dfc">
          <div style="height: 20rpx"></div>
          <div class="fs3">用户隐私保护提示</div>
          <div style="height: 40rpx"></div>
          <div class="fs4" style="color: #666666">
            感谢您使用本小程序，您使用本小程序前应当阅读并同意
          </div>
          <div style="height: 20rpx"></div>
          <div class="cblue1" @click="handleOpenPrivacyContract">
            《用户隐私保护指引》
          </div>
          <div style="height: 20rpx"></div>
          <div class="fs4" style="color: #666666">
            当您点击同意并开始时用产品服务时，即表示你已理解并同息该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法进入小程序。
          </div>
          <div style="height: 40rpx"></div>
          <div class="dfr aic">
            <navigator open-type="exit" target="miniProgram" style="width: 45%">
              <div
                style="
                  background-color: #f8f8fe;
                  border: 2rpx solid #eeeeee;
                  color: #1a1a1a;
                  border-radius: 15rpx;
                  height: 70rpx;
                  font-weight: 900;
                "
                class="fs2 fwn df jcc aic"
              >
                不同意并退出
              </div>
            </navigator>
            <div
              style="
                width: 45%;
                margin-left: 10%;
                background-color: #f8f8fe;
                border: 2rpx solid #eeeeee;
                color: #1a1a1a;
                border-radius: 15rpx;
                font-weight: 900;
                height: 70rpx;
              "
              class="fs2 fwn df jcc aic"
              @click="handleAgreePrivacyAuthorization"
            >
              同意并继续
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <z-tabbar
    v-model="currentTabbarIndex"
    fixed
    placeholder
    switch-animation
    frosted
    @change="onTabbarChange"
  >
    <z-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :name="index"
      :text="item.text"
      :bulge="item.bulge"
      inactive-color="#c5cad5"
      :inActiveIcon="item.icon"
      :active-icon="item.icon"
    />
  </z-tabbar>
</template>

<style scoped lang="less">
.content {
  width: 100%;
  height: 100%;
}
</style>
