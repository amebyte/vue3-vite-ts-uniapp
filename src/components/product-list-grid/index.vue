<template>
  <view class="product-list-grid">
    <view v-if="goodsList.length" class="list">
      <view v-for="(item, index) in goodsList" :key="index" class="item" @click="goDetail(item)">
        <view class="pictrue">
          <image :src="item.pic" mode="widthFix"></image>
        </view>
        <view class="text">
          <view class="name line1">{{ item.prodName }}</view>
          <view class="vip acea-row row-between-wrapper">
            <view class="money font-color"
              >￥<text class="num">{{ item.price }}</text>
            </view>
            <view class="add-cart">
              <text class="iconfont icon-add-cart-fill"></text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view v-if="goodsList.length > 0" class="loadingicon acea-row row-center-wrapper">
      <text class="loading iconfont icon-jiazai" :hidden="loading == false"></text>{{ loadTitle }}
    </view>
    <block v-if="!goodsList.length">
      <view class="empty-img">暂无数据</view>
    </block>
  </view>
</template>
<script setup lang="ts">
import { onPageScroll, onLoad, onShow, onHide, onReachBottom } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { fetchRecommendGoodsList } from '@/api/goods'
type goodsType = {
  id: string
  pic: string
  prodName: string
  price: number
  shopName: string
}
let goodsList = ref<Array<goodsType>>([])
const getNewGoodsList = () => {
  const params = {
    pageNum: 0,
    pageSize: 10,
  }
  fetchRecommendGoodsList(params)
    .then((r) => {
      console.log('r', r)
      goodsList.value = r.data
      console.log('newGoodsList', goodsList.value)
    })
    .catch((err) => console.log(err))
}
onLoad(() => {
  getNewGoodsList()
})

let loading = ref(false)
let loadTitle = ref('加载更多')

const goDetail = (item) => {
  uni.navigateTo({
    url: `/pages/goods/goodsDetail?productId=${item.id}&shopId=${item.shopId}`,
  })
}
</script>
<style lang="scss" scoped>
.product-list-grid {
  margin-top: 40rpx;
}

.product-list-grid .list {
  padding: 0 30rpx;
  column-count: 2;
  column-gap: 20rpx;
}

.product-list-grid .list .item {
  width: 335rpx;
  background-color: #fff;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
  //   border: 1rpx solid #eee;
  break-inside: avoid;
  box-shadow: 0px 0px 14rpx 6rpx rgba(29, 233, 182, 0.11);
}

.product-list-grid .list .item .pictrue {
  position: relative;
  width: 100%;
  // height: 335rpx;
}

.product-list-grid .list .item .pictrue image {
  width: 100%;
  height: 100%;
  border-radius: 20rpx 20rpx 0 0;
}

.product-list-grid .list .item .text {
  padding: 20rpx 17rpx 26rpx 17rpx;
  font-size: 30rpx;
  color: #0a3121;
}

.product-list-grid .list .item .text .money {
  font-size: 26rpx;
  font-weight: bold;
  margin-top: 8rpx;
  color: #1aa86c;
}

.product-list-grid .list .item .text .money .num {
  font-size: 34rpx;
}

.product-list-grid .list .item .text .vip {
  font-size: 22rpx;
  color: #aaa;
  margin-top: 7rpx;
}

.product-list-grid .list .item .text .vip .add-cart {
  margin-top: 10rpx;
}

.product-list-grid .list .item .text .vip .add-cart .iconfont {
  font-size: 50rpx;
  font-weight: bold;
  color: #1aa86c;
}

.empty-img {
  width: 690rpx;
  height: 300rpx;
  border-radius: 14rpx;
  margin: 0 auto;
  background-color: #f2f2f2;
  text-align: center;
  line-height: 300rpx;

  .iconfont {
    font-size: 50rpx;
  }
}
</style>
