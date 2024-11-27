import { createSSRApp } from 'vue'

import 'zgg-ui/styles/ZCGstyle.less'
import 'zgg-ui/styles/ZCG.less'
import 'zgg-ui/styles/transition.less'
import 'zgg-ui/styles/iconfont.css'
import './static/iconfont.css'
import './static/iconfont-weapp-icon.css'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
