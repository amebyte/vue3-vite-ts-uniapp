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

        <view style="padding: 20rpx">
          <menus-comp :menus-config="state.quickMenu"></menus-comp>
          <!--秒杀-->
          <navigator url="/pages/activity/goods-seckill/index" hover-class="navigator-hover" style="margin-top: 20rpx">
            <image
              :src="state.imageUrl + '/shop-uniapp/miaosha.png'"
              mode="scaleToFill"
              style="width: 100%; height: 200rpx"
            ></image>
          </navigator>
        </view>

        <!--新用户专享-->
        <NewGoods :is-show="newGoodsShow" />
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
import MenusComp from './components/MenusComp.vue'
import NewGoods from './components/newGoods.vue'
import { IMAGEURL } from '@/config/app'
export default defineComponent({
  name: 'IndexPage',
  components: {
    AdSwiper,
    MenusComp,
    NewGoods,
  },
  onPageScroll() {
    // console.log('onPageScroll')
  },
  setup() {
    const state = reactive({
      imageUrl: IMAGEURL,
      showBg: false,
      display: '',
      navTop: 0,
      navHeight: 40,
      currentCity: '佛山市',
      quickMenu: [
        {
          url: '../../static/images/meviky/home-icon-01.svg',
          title: '附近油站',
          path: '/pages/shop/station/index',
        },
        {
          url: '../../static/images/meviky/home-icon-02.svg',
          title: '精选服务',
          path: '/pages/goods/goods-search/index?isSelected=true',
        },
        {
          url: '../../static/images/meviky/home-icon-03.svg',
          title: '生活缴费',
          path: '/pages/living/index',
        },
        {
          url: '../../static/images/meviky/home-icon-04.svg',
          title: '领券中心',
          path: '/pages/coupon/list',
        },
        {
          url: '../../static/images/meviky/home-icon-05.svg',
          title: '附近门店',
          path: '/pages/shop/near-shop/index',
        },
        {
          url: '../../static/images/meviky/home-icon-06.svg',
          title: '家用电器',
          path: '/pages/goods/goods-search/index',
        },
        {
          url: '../../static/images/meviky/home-icon-07.svg',
          title: '汽车用品',
          path: '/pages/goods/goods-search/index',
        },
        {
          url: '../../static/images/meviky/home-icon-08.svg',
          title: '家居家纺',
          path: '/pages/goods/goods-search/index',
        },
        {
          url: '../../static/images/meviky/home-icon-09.svg',
          title: '日常用品',
          path: '/pages/goods/goods-search/index',
        },
        {
          url: '../../static/images/meviky/home-icon-10.svg',
          title: '更多服务',
          path: '/pages/good/list',
        },
      ],
    })
    // console.log('statestate', state.quickMenu)
    const title = ref('美物纪优选')
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
    }
  }
}
</style>
