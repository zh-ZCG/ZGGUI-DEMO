<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('欢迎使用ZGGUI')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style>
/* @import '../src/styles/iconfont.css'; */
</style>
