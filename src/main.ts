import { createSSRApp } from 'vue'
import App from './App.vue'
import { store } from './store'
export function createApp() {
  const app = createSSRApp(App)
  uni.getSystemInfo({
    success: function (e: any) {
      console.log('e', e)
      // #ifndef MP
      app.config.globalProperties.$StatusBar = e.statusBarHeight
      if (e.platform == 'android') {
        app.config.globalProperties.$CustomBar = e.statusBarHeight + 50
      } else {
        app.config.globalProperties.$CustomBar = e.statusBarHeight + 45
      }
      // #endif
    },
  })
  app.use(store)
  return {
    app,
  }
}
