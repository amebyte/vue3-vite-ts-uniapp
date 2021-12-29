<template>
  <view class="content">
    <view
      class="home-header"
      :style="'padding-top:' + state.navTop + 'px;height:' + state.navHeight + 'px'"
      :class="{ bg: state.showBg }"
    >
      <view v-if="state.currentCity" class="city">
        <text class="iconfont icon-map-coordinates"></text>
        {{ state.currentCity }}
      </view>
      <text>{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onPageScroll, onShow, onHide } from '@dcloudio/uni-app'
import { ref, getCurrentInstance, reactive } from 'vue'
import { AppActionTypes } from '@/store/modules/app/action-types'
import { useStore } from 'vuex'
import { fetchUserInfo } from '@/api/user'
import AdSwiper from '@/components/ad-swiper/index.vue'
const state = reactive({
  showBg: false,
  display: '',
  navTop: 0,
  navHeight: 40,
  currentCity: '佛山市',
})
const title = ref('Hello')
const store = useStore()
const setToken = () => {
  store.dispatch(AppActionTypes.ACTION_LOGIN, 'token')
  title.value = store.state.app.token
}
const { proxy } = getCurrentInstance() as any
console.log('ctx', proxy, proxy.$StatusBar, proxy.$test)
const scroll = function (e) {
  const scrollY = e.scrollTop
  state.showBg = scrollY > 40 ? true : false
  state.display = scrollY > 40 ? 'none' : 'block'
}
onPageScroll((e) => {
  scroll(e)
})
// fetchUserInfo()
//   .then((r) => {
//     console.log('r', r)
//   })
//   .catch((err) => console.log(err))
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .home-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 32rpx;

    &.bg {
      background: #3ba5f8;
    }

    .city {
      font-size: 24rpx;
      position: absolute;
      left: 30rpx;
    }
  }
}
</style>
