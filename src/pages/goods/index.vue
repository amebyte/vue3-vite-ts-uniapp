<template>
  <view class="container">
    <view class="nav">
      <block v-for="item in navList" :key="item.id">
        <view class="tab-name" :class="item.id === currNavId ? 'on' : ''" @click="navHandler(item.id)">
          {{ item.name }}
        </view>
      </block>
    </view>
    <!--轮播图 start-->
    <view class="ad-banner">
      <ad-swiper :img-urls="indexBanner" :image-h="173"></ad-swiper>
    </view>
    <!--轮播图 end-->
    <view v-show="currNavId === 1">
      <GoodsListColumnStyle />
    </view>
    <view v-show="currNavId === 2">
      <ProductListGrid />
    </view>
    <view v-show="currNavId === 3">
      <ProductListGrid />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore, mapActions } from 'vuex'
import { BannerActionTypes } from '@/store/modules/banner/action-types'
import AdSwiper from '@/components/ad-swiper/index.vue'
import ProductListGrid from '@/components/product-list-grid/index.vue'
import GoodsListColumnStyle from './components/GoodsListColumnStyle.vue'
const navList = ref([
  { name: '精品课程', id: 1 },
  { name: '水培商品', id: 2 },
  { name: '其他商品', id: 3 },
])
const currNavId = ref(1)
const navHandler = (id) => {
  currNavId.value = id
}

const store = useStore()
const fetchBanner = mapActions(['banner', BannerActionTypes.ACTION_GET_BANNER]).ACTION_GET_BANNER.bind({
  $store: store,
})
fetchBanner()
const indexBanner = computed(() => store.state.banner.indexBanner)
</script>

<style lang="scss" scoped>
.container {
  .nav {
    display: flex;
    justify-content: space-around;
    margin-left: 80rpx;
    margin-right: 80rpx;
    margin-top: 40rpx;
    margin-bottom: 30rpx;

    .tab-name {
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: 600;
      color: #00796b;
      opacity: 0.5;
      padding-bottom: 10rpx;
      &.on {
        color: #00796b;
        opacity: 1;
        border-bottom: 4rpx solid #5aefc9;
      }
    }
  }
  .ad-banner {
    margin: 20rpx;
    overflow: hidden;
    border-radius: 10rpx;
  }
}
</style>
