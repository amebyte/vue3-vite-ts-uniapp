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
    <view style="width: 100%">
      <view>
        <ad-swiper :img-urls="indexBanner"></ad-swiper>

        <!-- #ifdef MP -->
        <view class="header-search" :style="{ display: state.display }">
          <HeaderSearch></HeaderSearch>
        </view>
        <!-- #endif -->

        <view style="padding: 20rpx">
          <menus-comp :menus-config="state.quickMenu"></menus-comp>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { onPageScroll, onLoad, onShow, onHide, onReachBottom } from '@dcloudio/uni-app'
import { ref, getCurrentInstance, reactive, toRef, computed, defineComponent } from 'vue'
import { AppActionTypes } from '@/store/modules/app/action-types'
import { useStore, mapActions } from 'vuex'
import { BannerActionTypes } from '@/store/modules/banner/action-types'
import { useMapState } from '@/hooks/useMapState'
import AdSwiper from '@/components/ad-swiper/index.vue'
import HeaderSearch from './components/HeaderSearch.vue'
import MenusComp from './components/MenusComp.vue'
import { IMAGE_URL, APP_NAME } from '@/config/app'
export default defineComponent({
  name: 'IndexPage',
  components: {
    AdSwiper,
    HeaderSearch,
    MenusComp,
  },
  onPageScroll() {
    // console.log('onPageScroll')
  },
  setup() {
    const state = reactive({
      imageUrl: IMAGE_URL,
      showBg: false,
      display: 'block',
      navTop: 0,
      navHeight: 40,
      currentCity: '佛山市',
      quickMenu: [
        {
          url: '../../static/images/skip/activity.png',
          title: '活动',
          path: '/pages/shop/station/index',
        },
        {
          url: '../../static/images/skip/curriculum.png',
          title: '课程',
          path: '/pages/goods/goods-search/index?isSelected=true',
        },
        {
          url: '../../static/images/skip/AAndQ.png',
          title: '答疑',
          path: '/pages/living/index',
        },
        {
          url: '../../static/images/skip/brand.png',
          title: '品牌',
          path: '/pages/coupon/list',
        },
        {
          url: '../../static/images/skip/cooperate.png',
          title: '合作',
          path: '/pages/shop/near-shop/index',
        },
      ],
    })
    // console.log('statestate', state.quickMenu)
    const title = ref(APP_NAME)
    const newGoodsShow = ref(true)
    const store = useStore()
    // console.log('store', store)

    const fetchBanner = mapActions(['banner', BannerActionTypes.ACTION_GET_BANNER]).ACTION_GET_BANNER.bind({
      $store: store,
    })
    fetchBanner()

    const indexBanner = computed(() => store.state.banner.indexBanner)
    // const quickMenu = computed(() => state.quickMenu)
    // console.log('bannerState', indexBanner.value, quickMenu.value)
    const setToken = () => {
      store.dispatch(AppActionTypes.ACTION_LOGIN, 'token')
      title.value = store.state.app.token
    }
    const { proxy } = getCurrentInstance() as any
    // console.log('ctx', proxy, proxy.$StatusBar, proxy.$test)
    const scroll = function (e) {
      const scrollY = e.scrollTop
      state.showBg = scrollY > 40 ? true : false
      state.display = scrollY > 40 ? 'none' : 'block'
    }
    console.log('onPageScroll', onPageScroll)
    onPageScroll((e) => {
      scroll(e)
    })
    onReachBottom(() => {
      //   console.log('onReachBottom')
    })
    onShow(() => {
      console.log('index onShow')
    })
    onLoad(() => {
      state.navTop = proxy.$StatusBar
      // #ifdef MP-WEIXIN
      state.navHeight = proxy.$CustomBar
      // #endif
    })
    return {
      state,
      title,
      newGoodsShow,
      indexBanner,
    }
  },
})
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
      .icon-map-coordinates {
        color: #fff;
      }
    }
  }
}
</style>
