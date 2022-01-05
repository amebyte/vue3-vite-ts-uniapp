<template>
  <view class="footer-bar">
    <view class="item shop" @click="gotoHandler">
      <text class="iconfont icon-home"></text>
      <text class="txt">首页</text>
    </view>
    <view class="item" @click="toggleFavourite">
      <text v-if="!isFavorite" class="iconfont icon-favorite-filling"></text>
      <text v-else class="iconfont icon-favorite-filling active"></text>
      <text class="txt">收藏</text>
    </view>
    <navigator open-type="switchTab" class="item shopping-cart" url="/pages/shopping-cart/index" hover-class="none">
      <text class="iconfont icon-shopping-cart">
        <text v-if="cartCount > 0" class="good-number">{{ cartCount > 99 ? '99+' : cartCount }}</text>
      </text>
      <text class="txt">购物车</text>
    </navigator>
    <view class="item btn add-cart" @click="joinCart">
      <text class="txt">加入购物车</text>
    </view>
    <view class="item btn buy-now" style="flex: 4.5" @click="buyNowAction">
      <text class="txt" style="width: 80%; margin-right: 20rpx">立即抢购</text>
    </view>
  </view>
</template>

<script lang="ts">
import { onPageScroll, onLoad, onShow, onHide, onReachBottom } from '@dcloudio/uni-app'
import { ref, getCurrentInstance, reactive, toRef, computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'DetailFooterBar',
  setup() {
    let cartCount = ref(0)
    let isFavorite = ref(false)
    const gotoHandler = () => {
      console.log('gotoHandler')
    }
    const toggleFavourite = () => {
      console.log('toggleFavourite')
    }
    const joinCart = () => {
      console.log('joinCart')
    }
    const buyNowAction = () => {
      console.log('buyNowAction')
    }
    return {
      cartCount,
      isFavorite,
      gotoHandler,
      toggleFavourite,
      joinCart,
      buyNowAction,
    }
  },
})
</script>

<style lang="scss">
.footer-bar {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100rpx;
    flex: 1;

    .iconfont {
      font-size: 36rpx;

      &.active {
        color: #e60012 !important;
      }
    }

    .txt {
      font-size: 20rpx;
    }

    &.shop {
      color: #e60012;
    }

    &.shopping-cart {
      position: relative;

      .good-number {
        width: 28rpx;
        height: 28rpx;
        background-color: #ea3401;
        position: absolute;
        top: 10rpx;
        right: 20rpx;
        border-radius: 100%;
        color: #fff;
        font-size: 18rpx;
        text-align: center;
        line-height: 28rpx;
      }
    }

    &.btn {
      flex: 2.5;
      color: #fff;

      .txt {
        width: 208rpx;
        height: 76rpx;
        line-height: 76rpx;
        text-align: center;
        border-radius: 40rpx;
        font-size: 28rpx;
      }
    }

    &.add-cart {
      .txt {
        background-color: #e60012;
      }
    }

    &.buy-now {
      .txt {
        background-color: #ffb52e;
      }
    }
  }
}
</style>
