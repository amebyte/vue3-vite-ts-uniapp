<template>
  <view class="container">
    <view
      class="header"
      :style="'padding-top:' + state.navTop + 'px;height:' + state.navHeight + 'px'"
      :class="{ bg: state.showBg }"
    >
      <view v-if="state.currentCity" class="city">
        <text class="iconfont icon-map-coordinates"></text>
        {{ state.currentCity }}
      </view>
      <text>{{ title }}</text>
    </view>
    <view class="content">
      <!--轮播图 start-->
      <ad-swiper :img-urls="indexBanner"></ad-swiper>
      <!--轮播图 end-->
      <!--搜索 start-->
      <view class="header-search" :style="{ display: state.display }">
        <HeaderSearch></HeaderSearch>
      </view>
      <!--搜索 end-->

      <!--消息 start-->
      <MessageComp v-if="isShowMessage" @closeMessage="closeMessage"> </MessageComp>
      <!--消息 end-->

      <view style="padding: 20rpx">
        <menus-comp :menus-config="state.quickMenu"></menus-comp>
      </view>
      <view style="padding: 0 20rpx 20rpx 20rpx"><MenusTwo /></view>
      <!--精选课程 start-->
      <RecommendGoods />
      <!--精选课程 end-->
      <!--活动预约 start-->
      <EventReservation />
      <!--活动预约 end-->
      <!--专家答疑 start-->
      <QuestionsAndAnswers />
      <!--专家答疑 end-->
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
import MessageComp from './components/MessageComp.vue'
import MenusComp from './components/MenusComp.vue'
import MenusTwo from './components/MenusTwo.vue'
import RecommendGoods from './components/RecommendGoods.vue'
import EventReservation from './components/EventReservation.vue'
import QuestionsAndAnswers from './components/QuestionsAndAnswers.vue'
import { IMAGE_URL, APP_NAME } from '@/config/app'
export default defineComponent({
  name: 'IndexPage',
  components: {
    AdSwiper,
    HeaderSearch,
    MessageComp,
    MenusComp,
    MenusTwo,
    RecommendGoods,
    EventReservation,
    QuestionsAndAnswers,
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
          path: '/pages/discover/activity',
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

    const title = ref(APP_NAME)

    let isShowMessage = ref(true)
    const closeMessage = () => {
      isShowMessage.value = false
    }

    const store = useStore()

    const fetchBanner = mapActions(['banner', BannerActionTypes.ACTION_GET_BANNER]).ACTION_GET_BANNER.bind({
      $store: store,
    })
    fetchBanner()

    const indexBanner = computed(() => store.state.banner.indexBanner)

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
      indexBanner,
      isShowMessage,
      closeMessage,
    }
  },
})
</script>

<style lang="scss">
@import '@/static/css/variable.scss';
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: $background-color;
  .header {
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
      background-color: $top-background-color;
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
  .content {
    width: 100%;
  }
}
</style>
